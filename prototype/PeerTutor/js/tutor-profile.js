(() => {
    'use strict';

    const STORAGE_KEY = 'peertutor-tutor-profile-v1';

    const sectionNames = [
        'basic',
        'bio',
        'subjects',
        'avail',
        'social',
        'settings'
    ];

    const defaultAvailability = [
        [true, true, false],
        [false, true, true],
        [true, true, true],
        [false, true, true],
        [true, true, false],
        [true, false, false],
        [false, false, true]
    ];

    let portfolioFiles = [];
    let dirty = false;

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        [...root.querySelectorAll(selector)];

    function setDirty(value = true) {
        dirty = value;

        const title = $('.save-bar-title');

        if (title) {
            title.textContent = value
                ? 'Changes not saved'
                : 'All changes saved';
        }

        document.body.classList.toggle('profile-is-dirty', value);
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /* ========================================================
       ACCORDION SECTIONS
    ======================================================== */

    window.toggleSection = function toggleSection(name, forceOpen) {
        const body = document.getElementById(`body-${name}`);
        const chevron = document.getElementById(`chevron-${name}`);
        const section = document.getElementById(`sec-${name}`);

        if (!body || !section) {
            return;
        }

        const isOpen =
            body.classList.contains('is-open') ||
            body.style.display !== 'none';

        const shouldOpen =
            typeof forceOpen === 'boolean'
                ? forceOpen
                : !isOpen;

        body.style.display = shouldOpen ? 'block' : 'none';
        body.classList.toggle('is-open', shouldOpen);
        section.classList.toggle('is-open', shouldOpen);

        if (chevron) {
            chevron.classList.toggle(
                'ti-chevron-up',
                shouldOpen
            );

            chevron.classList.toggle(
                'ti-chevron-down',
                !shouldOpen
            );
        }

        const header = $('.edit-section-header', section);

        if (header) {
            header.setAttribute(
                'aria-expanded',
                String(shouldOpen)
            );
        }
    };

    function prepareAccordions() {
        sectionNames.forEach(name => {
            const section =
                document.getElementById(`sec-${name}`);

            const header =
                section &&
                $('.edit-section-header', section);

            const body =
                document.getElementById(`body-${name}`);

            if (!header || !body) {
                return;
            }

            const open = body.style.display !== 'none';

            body.classList.toggle('is-open', open);
            section.classList.toggle('is-open', open);

            header.tabIndex = 0;
            header.setAttribute('role', 'button');
            header.setAttribute(
                'aria-controls',
                `body-${name}`
            );
            header.setAttribute(
                'aria-expanded',
                String(open)
            );

            header.addEventListener('keydown', event => {
                if (
                    event.key === 'Enter' ||
                    event.key === ' '
                ) {
                    event.preventDefault();
                    window.toggleSection(name);
                }
            });
        });
    }

    /* LIVE PROFILE PREVIEW */

    window.updatePreview = function updatePreview(id, value) {
        const target = document.getElementById(id);

        if (target) {
            target.textContent =
                value.trim() || 'Your Name';
        }

        setDirty();
    };

    window.updateFullName = function updateFullName() {
        const first =
            $('#fname-input')?.value.trim() || '';

        const last =
            $('#lname-input')?.value.trim() || '';

        window.updatePreview(
            'preview-name',
            `${first} ${last}`.trim()
        );
    };

    window.updateUni = function updateUni() {
        const university =
            $('#uni-input')?.value.trim() ||
            'University';

        const major =
            $('#major-input')?.value.trim() ||
            'Major';

        const year =
            $('#year-input')?.value || 'Year';

        const target = $('#preview-uni');

        if (target) {
            target.textContent =
                `${university} · ${major} · ${year}`;
        }

        setDirty();
    };

    window.updateBio = function updateBio(textarea) {
        if (!textarea) {
            return;
        }

        const value = textarea.value;
        const count = value.length;

        const preview = $('#preview-bio');
        const chars = $('#bio-chars');
        const fill = $('#bio-fill');

        if (preview) {
            preview.textContent =
                value.trim() ||
                'Tell students about your teaching approach.';
        }

        if (chars) {
            chars.textContent = count;
        }

        if (fill) {
            fill.style.width =
                `${Math.min(100, (count / 500) * 100)}%`;
        }

        updateCompletion();
        setDirty();
    };

    window.updateRate = function updateRate(value) {
        const numericValue = Number(value) || 0;

        const display = $('#rate-display');
        const preview = $('#preview-rate');

        if (display) {
            display.innerHTML =
                `฿${numericValue} <span>/ hour</span>`;
        }

        if (preview) {
            preview.textContent = `฿${numericValue}`;
        }

        const multipliers = [0.5, 1, 1.5, 2];

        $$('.slen-opt').forEach((option, index) => {
            const text = option.textContent.trim();

            const minutes =
                text.match(/^\d+/)?.[0] ||
                [30, 60, 90, 120][index];

            const price =
                numericValue * multipliers[index];

            const formattedPrice =
                Number.isInteger(price)
                    ? price
                    : price.toFixed(2);

            const textNode = [...option.childNodes]
                .find(node => node.nodeType === Node.TEXT_NODE);

            if (textNode) {
                textNode.textContent =
                    ` ${minutes} min · ฿${formattedPrice}`;
            }
        });

        setDirty();
    };

    /* PROFILE PHOTO */

    window.previewPhoto = function previewPhoto(input) {
        const file = input.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith('image/')) {
            showToast(
                'Please choose a JPG or PNG image.',
                'error'
            );

            input.value = '';
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast(
                'Please choose an image smaller than 5 MB.',
                'error'
            );

            input.value = '';
            return;
        }

        const reader = new FileReader();

        reader.onload = event => {
            const source = event.target.result;

            const editImage =
                $('#photo-edit-preview img');

            const previewImage =
                $('#preview-avatar img');

            if (editImage) {
                editImage.src = source;
            }

            if (previewImage) {
                previewImage.src = source;
            }

            setDirty();
        };

        reader.readAsDataURL(file);
    };

    /* ========================================================
       LANGUAGES AND TEACHING STYLE
    ======================================================== */

    window.toggleLang = function toggleLang(element) {
        const selectedLanguages =
            $$('.lang-tag.selected');

        if (
            element.classList.contains('selected') &&
            selectedLanguages.length === 1
        ) {
            showToast(
                'Keep at least one language selected.',
                'error'
            );

            return;
        }

        element.classList.toggle('selected');
        setDirty();
    };

    window.selectStyle = function selectStyle(element) {
        $$('.style-opt').forEach(option => {
            option.classList.remove('selected');
        });

        element.classList.add('selected');

        const radio =
            $('input[type="radio"]', element);

        if (radio) {
            radio.checked = true;
        }

        setDirty();
    };

    /* ========================================================
       SUBJECTS
    ======================================================== */

    window.toggleSubject = function toggleSubject(element) {
        element.classList.toggle('selected');

        renderPreviewSubjects();
        updateCompletion();
        setDirty();
    };

    function renderPreviewSubjects() {
        const subjects =
            $$('.spick.selected').map(item =>
                item.textContent.trim()
            );

        const container = $('#preview-tags');

        if (!container) {
            return;
        }

        if (subjects.length) {
            container.innerHTML = subjects
                .slice(0, 5)
                .map(subject => {
                    return `
                        <span class="preview-tag">
                            ${escapeHtml(subject)}
                        </span>
                    `;
                })
                .join('');
        } else {
            container.innerHTML = `
                <span class="preview-tag preview-tag-empty">
                    Add a subject
                </span>
            `;
        }
    }

    /* ========================================================
       SESSION LENGTHS
    ======================================================== */

    window.toggleSlen = function toggleSlen(element) {
        element.classList.toggle('selected');

        const checkbox =
            $('input[type="checkbox"]', element);

        if (checkbox) {
            checkbox.checked =
                element.classList.contains('selected');
        }

        setDirty();
    };

    /* ========================================================
       PROFILE VISIBILITY
    ======================================================== */

    window.toggleVisibility =
        function toggleVisibility() {
            const visible =
                Boolean($('#vis-toggle')?.checked);

            const label = $('#vis-sub');

            if (label) {
                label.textContent = visible
                    ? 'Visible to students'
                    : 'Hidden from students';
            }

            const previewCard = $('.preview-card');

            if (previewCard) {
                previewCard.classList.toggle(
                    'profile-hidden-preview',
                    !visible
                );
            }

            setDirty();
        };

    /* ========================================================
       AVAILABILITY GRID
    ======================================================== */

    function buildAvailability(savedGrid) {
        const grid = $('#avail-grid');

        if (!grid) {
            return;
        }

        const days = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ];

        const periods = [
            'morning',
            'afternoon',
            'evening'
        ];

        const values =
            Array.isArray(savedGrid)
                ? savedGrid
                : defaultAvailability;

        grid.innerHTML = '';

        days.forEach((day, dayIndex) => {
            const column =
                document.createElement('div');

            column.className =
                'avail-day-col-inner';

            column.innerHTML = `
                <div class="avail-header-cell">
                    ${day}
                </div>
            `;

            for (
                let slotIndex = 0;
                slotIndex < 3;
                slotIndex += 1
            ) {
                const cell =
                    document.createElement('button');

                const enabled =
                    Boolean(
                        values[dayIndex]?.[slotIndex]
                    );

                cell.type = 'button';

                cell.className =
                    `avail-cell${enabled ? ' on' : ''}`;

                cell.dataset.day =
                    String(dayIndex);

                cell.dataset.slot =
                    String(slotIndex);

                cell.setAttribute(
                    'aria-pressed',
                    String(enabled)
                );

                cell.setAttribute(
                    'aria-label',
                    `${day} ${periods[slotIndex]} availability`
                );

                cell.addEventListener('click', () => {
                    cell.classList.toggle('on');

                    cell.setAttribute(
                        'aria-pressed',
                        String(
                            cell.classList.contains('on')
                        )
                    );

                    setDirty();
                });

                column.appendChild(cell);
            }

            grid.appendChild(column);
        });
    }

    function getAvailability() {
        return $$('.avail-day-col-inner').map(
            column =>
                $$('.avail-cell', column).map(
                    cell =>
                        cell.classList.contains('on')
                )
        );
    }

    /* ========================================================
       PORTFOLIO FILES
    ======================================================== */

    window.handlePortfolio =
        function handlePortfolio(input) {
            const incoming =
                [...(input.files || [])];

            const valid = incoming.filter(file => {
                if (file.size > 20 * 1024 * 1024) {
                    showToast(
                        `${file.name} is larger than 20 MB.`,
                        'error'
                    );

                    return false;
                }

                return true;
            });

            portfolioFiles = [
                ...portfolioFiles,
                ...valid
            ].slice(0, 5);

            renderPortfolio();

            input.value = '';
            setDirty();
        };

    function renderPortfolio() {
        const container = $('#portfolio-files');
        const area = $('#portfolio-area');

        if (!container) {
            return;
        }

        container.innerHTML = portfolioFiles
            .map((file, index) => {
                return `
                    <div class="pfile-item">
                        <i class="ti ti-file"></i>

                        <span class="pfile-name">
                            ${escapeHtml(file.name)}
                        </span>

                        <span class="pfile-size">
                            ${formatBytes(file.size)}
                        </span>

                        <button
                            type="button"
                            class="pfile-remove"
                            data-index="${index}"
                            aria-label="Remove ${escapeHtml(file.name)}"
                        >
                            <i class="ti ti-x"></i>
                        </button>
                    </div>
                `;
            })
            .join('');

        if (area) {
            area.classList.toggle(
                'has-files',
                portfolioFiles.length > 0
            );
        }

        $$('.pfile-remove', container).forEach(
            button => {
                button.addEventListener('click', () => {
                    portfolioFiles.splice(
                        Number(button.dataset.index),
                        1
                    );

                    renderPortfolio();
                    setDirty();
                });
            }
        );
    }

    function formatBytes(bytes) {
        if (!bytes) {
            return '0 KB';
        }

        if (bytes < 1024 * 1024) {
            return `${Math.ceil(bytes / 1024)} KB`;
        }

        return (
            `${(bytes / (1024 * 1024)).toFixed(1)} MB`
        );
    }

    /* ========================================================
       PROFILE COMPLETION
    ======================================================== */

    function updateCompletion() {
        const requirements = [
            Boolean($('#fname-input')?.value.trim()),
            Boolean($('#lname-input')?.value.trim()),
            Boolean($('#uni-input')?.value.trim()),
            Boolean($('#major-input')?.value.trim()),
            Boolean($('#bio-input')?.value.trim()),
            $$('.spick.selected').length > 0,
            $$('.avail-cell.on').length > 0
        ];

        const completed =
            requirements.filter(Boolean).length;

        const percentage = Math.round(
            (completed / requirements.length) * 100
        );

        const ring = $('#ring-fill');
        const text = $('#ring-pct');
        const hint = $('.complete-hint');

        if (text) {
            text.textContent = `${percentage}%`;
        }

        if (ring) {
            ring.style.strokeDashoffset = String(
                113 - (113 * percentage / 100)
            );
        }

        if (hint) {
            hint.textContent =
                percentage === 100
                    ? 'Your profile is ready for students.'
                    : 'Complete the missing details to reach 100%.';
        }

        const bioBadge =
            $('#sec-bio .section-badge');

        const bioComplete =
            Boolean($('#bio-input')?.value.trim());

        if (bioBadge) {
            bioBadge.textContent =
                bioComplete
                    ? 'Complete'
                    : 'Incomplete';

            bioBadge.className =
                `section-badge ${bioComplete
                    ? 'complete'
                    : 'incomplete'
                }`;
        }
    }

    /* ========================================================
       SAVE AND RESTORE
    ======================================================== */

    function collectState() {
        const inputs = {};

        const controls = $$
            (
                '.psetup-edit-col input:not([type="file"]), ' +
                '.psetup-edit-col textarea, ' +
                '.psetup-edit-col select'
            );

        controls.forEach((input, index) => {
            const key =
                input.id ||
                input.name ||
                `${input.tagName.toLowerCase()}-${index}`;

            inputs[key] =
                input.type === 'checkbox' ||
                    input.type === 'radio'
                    ? input.checked
                    : input.value;
        });

        return {
            inputs,

            languages:
                $$('.lang-tag.selected').map(
                    item => item.textContent.trim()
                ),

            subjects:
                $$('.spick.selected').map(
                    item => item.textContent.trim()
                ),

            teachingStyle:
                $('.style-opt.selected input')
                    ?.value || '',

            sessionLengths:
                $$('.slen-opt').map(
                    item =>
                        item.classList.contains(
                            'selected'
                        )
                ),

            availability:
                getAvailability(),

            visible:
                Boolean($('#vis-toggle')?.checked),

            savedAt:
                new Date().toISOString()
        };
    }

    function restoreState() {
        let state;

        try {
            state = JSON.parse(
                localStorage.getItem(STORAGE_KEY) ||
                'null'
            );
        } catch (error) {
            state = null;
        }

        if (!state) {
            buildAvailability();
            return;
        }

        const controls = $$
            (
                '.psetup-edit-col input:not([type="file"]), ' +
                '.psetup-edit-col textarea, ' +
                '.psetup-edit-col select'
            );

        controls.forEach((input, index) => {
            const key =
                input.id ||
                input.name ||
                `${input.tagName.toLowerCase()}-${index}`;

            if (!(key in state.inputs)) {
                return;
            }

            if (
                input.type === 'checkbox' ||
                input.type === 'radio'
            ) {
                input.checked =
                    Boolean(state.inputs[key]);
            } else {
                input.value = state.inputs[key];
            }
        });

        $$('.lang-tag').forEach(item => {
            item.classList.toggle(
                'selected',
                state.languages?.includes(
                    item.textContent.trim()
                )
            );
        });

        $$('.spick').forEach(item => {
            item.classList.toggle(
                'selected',
                state.subjects?.includes(
                    item.textContent.trim()
                )
            );
        });

        $$('.style-opt').forEach(item => {
            const radio = $('input', item);

            const selected =
                radio?.value ===
                state.teachingStyle;

            item.classList.toggle(
                'selected',
                selected
            );

            if (radio) {
                radio.checked = selected;
            }
        });

        $$('.slen-opt').forEach(
            (item, index) => {
                const selected =
                    Boolean(
                        state.sessionLengths?.[index]
                    );

                item.classList.toggle(
                    'selected',
                    selected
                );

                const checkbox =
                    $('input[type="checkbox"]', item);

                if (checkbox) {
                    checkbox.checked = selected;
                }
            }
        );

        const visibility = $('#vis-toggle');

        if (visibility) {
            visibility.checked =
                state.visible !== false;
        }

        buildAvailability(state.availability);

        if (state.savedAt) {
            const saved =
                new Date(state.savedAt);

            const label = $('.save-bar-sub');

            if (
                label &&
                !Number.isNaN(saved.getTime())
            ) {
                label.textContent =
                    `Last saved: ` +
                    `${saved.toLocaleDateString()} at ` +
                    `${saved.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}`;
            }
        }
    }

    window.saveProfile = function saveProfile() {
        const first =
            $('#fname-input')?.value.trim();

        const last =
            $('#lname-input')?.value.trim();

        if (!first || !last) {
            window.toggleSection('basic', true);

            showToast(
                'Please enter both your first and last name.',
                'error'
            );

            return;
        }

        if ($$('.spick.selected').length === 0) {
            window.toggleSection(
                'subjects',
                true
            );

            showToast(
                'Please select at least one subject.',
                'error'
            );

            return;
        }

        try {
            const state = collectState();

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state)
            );

            const saved =
                new Date(state.savedAt);

            const label =
                $('.save-bar-sub');

            if (label) {
                label.textContent =
                    `Last saved: Today at ` +
                    `${saved.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}`;
            }

            setDirty(false);

            showToast(
                'Profile changes saved successfully.',
                'success'
            );
        } catch (error) {
            showToast(
                'Your browser could not save these changes.',
                'error'
            );
        }
    };

    /* ========================================================
       PUBLIC PROFILE PREVIEW
    ======================================================== */

    window.previewPublicProfile =
        function previewPublicProfile() {
            closePreviewModal();

            const overlay =
                document.createElement('div');

            overlay.className =
                'public-preview-overlay';

            overlay.id =
                'public-preview-overlay';

            const card =
                $('.preview-card')?.cloneNode(true);

            overlay.innerHTML = `
                <div
                    class="public-preview-dialog"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="public-preview-title"
                >
                    <div class="public-preview-head">
                        <div>
                            <p class="public-preview-kicker">
                                Student view
                            </p>

                            <h2 id="public-preview-title">
                                Public tutor profile preview
                            </h2>
                        </div>

                        <button
                            type="button"
                            class="public-preview-close"
                            aria-label="Close preview"
                        >
                            <i class="ti ti-x"></i>
                        </button>
                    </div>

                    <div class="public-preview-content">
                    </div>
                </div>
            `;

            if (card) {
                $('.public-preview-content', overlay)
                    .appendChild(card);
            }

            document.body.appendChild(overlay);
            document.body.classList.add('modal-open');

            const closeButton =
                $('.public-preview-close', overlay);

            if (closeButton) {
                closeButton.addEventListener(
                    'click',
                    closePreviewModal
                );

                closeButton.focus();
            }

            overlay.addEventListener(
                'click',
                event => {
                    if (event.target === overlay) {
                        closePreviewModal();
                    }
                }
            );
        };

    function closePreviewModal() {
        const overlay =
            $('#public-preview-overlay');

        if (overlay) {
            overlay.remove();
        }

        document.body.classList.remove(
            'modal-open'
        );
    }

    /* ========================================================
       USER DROPDOWN
    ======================================================== */

    window.toggleUserMenu =
        function toggleUserMenu(event) {
            if (event) {
                event.stopPropagation();
            }

            const dropdown =
                $('#user-dropdown');

            const chevron =
                $('#una-chevron');

            const isOpen =
                dropdown?.classList.toggle('show');

            if (chevron) {
                chevron.classList.toggle(
                    'rotate',
                    Boolean(isOpen)
                );
            }

            const button =
                $('#user-nav-btn');

            if (button) {
                button.setAttribute(
                    'aria-expanded',
                    String(Boolean(isOpen))
                );
            }
        };

    window.switchSection =
        function switchSection(section) {
            if (section === 'privacy') {
                window.toggleSection(
                    'settings',
                    true
                );

                document
                    .getElementById('sec-settings')
                    ?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
            } else {
                showToast(
                    'Help & Support will open here.',
                    'info'
                );
            }

            $('#user-dropdown')
                ?.classList.remove('show');
        };

    window.showModal = function showModal(type) {
        if (type !== 'logout') {
            return;
        }

        const confirmed =
            window.confirm(
                'Are you sure you want to sign out?'
            );

        if (confirmed) {
            window.location.href = 'index.html';
        }
    };

    /* ========================================================
       NOTIFICATION TOAST
    ======================================================== */

    function showToast(
        message,
        type = 'success'
    ) {
        $$('.profile-toast').forEach(
            toast => toast.remove()
        );

        const toast =
            document.createElement('div');

        toast.className =
            `profile-toast ${type}`;

        toast.setAttribute('role', 'status');

        const icon =
            type === 'error'
                ? 'ti-alert-circle'
                : type === 'info'
                    ? 'ti-info-circle'
                    : 'ti-circle-check';

        toast.innerHTML = `
            <i class="ti ${icon}"></i>
            <span>${escapeHtml(message)}</span>
        `;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');

            setTimeout(() => {
                toast.remove();
            }, 250);
        }, 2800);
    }

    /* ========================================================
       INITIAL PREVIEW
    ======================================================== */

    function refreshPreview() {
        window.updateFullName();
        window.updateUni();

        const bioInput = $('#bio-input');

        if (bioInput) {
            window.updateBio(bioInput);
        }

        const rate =
            $('.rate-slider')?.value || 150;

        window.updateRate(rate);
        renderPreviewSubjects();
        window.toggleVisibility();
        updateCompletion();

        setDirty(false);
    }

    function bindDirtyTracking() {
        const controls = $$
            (
                '.psetup-edit-col input, ' +
                '.psetup-edit-col textarea, ' +
                '.psetup-edit-col select'
            );

        controls.forEach(control => {
            if (control.type === 'file') {
                return;
            }

            control.addEventListener(
                'change',
                () => setDirty()
            );

            control.addEventListener(
                'input',
                () => setDirty()
            );
        });
    }

    /* ========================================================
       INITIALIZE PAGE
    ======================================================== */

    function init() {
        prepareAccordions();
        restoreState();
        renderPortfolio();
        refreshPreview();
        bindDirtyTracking();

        document.addEventListener(
            'click',
            event => {
                const wrap =
                    $('#user-menu-wrap');

                if (
                    wrap &&
                    !wrap.contains(event.target)
                ) {
                    $('#user-dropdown')
                        ?.classList.remove('show');

                    $('#una-chevron')
                        ?.classList.remove('rotate');
                }
            }
        );

        document.addEventListener(
            'keydown',
            event => {
                if (event.key === 'Escape') {
                    closePreviewModal();

                    $('#user-dropdown')
                        ?.classList.remove('show');

                    $('#una-chevron')
                        ?.classList.remove('rotate');
                }
            }
        );

        window.addEventListener(
            'beforeunload',
            event => {
                if (!dirty) {
                    return;
                }

                event.preventDefault();
                event.returnValue = '';
            }
        );
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            init
        );
    } else {
        init();
    }
})();