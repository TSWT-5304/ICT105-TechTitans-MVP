(function () {
    function ready(fn) {
        if (
            document.readyState !==
            'loading'
        ) {
            fn();
        } else {
            document.addEventListener(
                'DOMContentLoaded',
                fn
            );
        }
    }

    ready(function () {
        document
            .querySelectorAll(
                'nav.dash-nav, nav.nav'
            )
            .forEach(function (nav) {
                if (
                    nav.dataset.mobileReady ===
                    'true'
                ) {
                    return;
                }

                nav.dataset.mobileReady =
                    'true';

                var links =
                    nav.querySelector(
                        '.dash-nav-links, ' +
                        '.nav-links'
                    );

                var actions =
                    nav.querySelector(
                        '.dash-nav-right, ' +
                        '.dash-nav-right-fixed, ' +
                        '.nav-actions'
                    );

                if (!links && !actions) {
                    return;
                }

                var toggle =
                    document.createElement(
                        'button'
                    );

                toggle.type = 'button';
                toggle.className =
                    'mobile-nav-toggle';

                toggle.setAttribute(
                    'aria-label',
                    'Open menu'
                );

                toggle.setAttribute(
                    'aria-expanded',
                    'false'
                );

                toggle.innerHTML =
                    '<span></span>' +
                    '<span></span>' +
                    '<span></span>';

                var panel =
                    document.createElement(
                        'div'
                    );

                panel.className =
                    'mobile-nav-panel';

                var mobileLinks =
                    document.createElement(
                        'div'
                    );

                mobileLinks.className =
                    'mobile-nav-links';

                if (links) {
                    links
                        .querySelectorAll('a')
                        .forEach(function (a) {
                            mobileLinks
                                .appendChild(
                                    a.cloneNode(
                                        true
                                    )
                                );
                        });
                }

                var mobileActions =
                    document.createElement(
                        'div'
                    );

                mobileActions.className =
                    'mobile-nav-actions';

                if (actions) {
                    actions
                        .querySelectorAll(
                            'a, button'
                        )
                        .forEach(
                            function (item) {
                                mobileActions
                                    .appendChild(
                                        item.cloneNode(
                                            true
                                        )
                                    );
                            }
                        );
                }

                panel.appendChild(
                    mobileLinks
                );

                if (
                    mobileActions
                        .children.length
                ) {
                    panel.appendChild(
                        mobileActions
                    );
                }

                nav.appendChild(toggle);
                nav.appendChild(panel);

                toggle.addEventListener(
                    'click',
                    function () {
                        var isOpen =
                            nav.classList.toggle(
                                'mobile-menu-open'
                            );

                        toggle.setAttribute(
                            'aria-expanded',
                            String(isOpen)
                        );

                        toggle.setAttribute(
                            'aria-label',
                            isOpen
                                ? 'Close menu'
                                : 'Open menu'
                        );

                        document.body
                            .classList.toggle(
                                'mobile-nav-active',
                                isOpen
                            );
                    }
                );

                panel.addEventListener(
                    'click',
                    function (event) {
                        if (
                            event.target.closest(
                                'a'
                            )
                        ) {
                            nav.classList.remove(
                                'mobile-menu-open'
                            );

                            toggle.setAttribute(
                                'aria-expanded',
                                'false'
                            );

                            toggle.setAttribute(
                                'aria-label',
                                'Open menu'
                            );

                            document.body
                                .classList.remove(
                                    'mobile-nav-active'
                                );
                        }
                    }
                );
            });
    });
})();


/* ══════════════════════════════════════
   NEWSLETTER
══════════════════════════════════════ */

function handleSubscribe() {
    const emailInput =
        document.getElementById(
            'sub-email'
        );

    if (!emailInput) return;

    const email =
        emailInput.value;

    if (
        !email ||
        !email.includes('@')
    ) {
        emailInput.style.borderColor =
            '#f87171';

        return;
    }

    emailInput.value = '';
    emailInput.style.borderColor = '';

    const success =
        document.getElementById(
            'sub-success'
        );

    if (success) {
        success.style.display = 'block';
    }
}


/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */

function handleContact(btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML =
            '<i class="ti ' +
            'ti-circle-check" ' +
            'style="margin-right:6px;">' +
            '</i> Message Sent!';

        btn.style.background =
            '#22c55e';

        const success =
            document.getElementById(
                'form-success'
            );

        if (success) {
            success.style.display =
                'block';
        }
    }, 1000);
}


/* ══════════════════════════════════════
   TUTOR SEARCH
══════════════════════════════════════ */

function filterTutors() {
    const searchInput =
        document.getElementById(
            'search-input'
        );

    if (!searchInput) return;

    const query =
        searchInput.value.toLowerCase();

    const cards =
        document.querySelectorAll(
            '.browse-card'
        );

    let visible = 0;

    cards.forEach(card => {
        const text =
            card.innerText.toLowerCase();

        const match =
            text.includes(query);

        card.style.display =
            match ? '' : 'none';

        if (match) visible++;
    });

    const count =
        document.getElementById(
            'count'
        );

    if (count) {
        count.textContent = visible;
    }
}


/* ══════════════════════════════════════
   CONTACT US PAGE
══════════════════════════════════════ */

function setTopic(btn) {
    document
        .querySelectorAll('.topic-tab')
        .forEach(button => {
            button.classList.remove(
                'active'
            );
        });

    btn.classList.add('active');
}


function updateChar(element) {
    const counter =
        document.getElementById(
            'char-count'
        );

    if (counter) {
        counter.textContent =
            element.value.length;
    }
}


function handleAttach(input) {
    if (!input.files.length) return;

    const area =
        document.getElementById(
            'attach-area'
        );

    const name =
        document.getElementById(
            'attach-name'
        );

    if (area) {
        area.classList.add(
            'has-file'
        );
    }

    if (name) {
        name.textContent =
            '✓ ' +
            input.files[0].name;

        name.style.display = 'block';
    }
}


function handleSend() {
    const fname =
        document
            .getElementById('fname')
            ?.value.trim();

    const email =
        document
            .getElementById('email')
            ?.value.trim();

    const subject =
        document
            .getElementById('subject')
            ?.value;

    const message =
        document
            .getElementById('message')
            ?.value.trim();

    const privacy =
        document
            .getElementById('privacy')
            ?.checked;

    if (
        !fname ||
        !email ||
        !subject ||
        !message
    ) {
        alert(
            'Please fill in all required fields.'
        );

        return;
    }

    if (!privacy) {
        alert(
            'Please agree to the Privacy Policy to continue.'
        );

        return;
    }

    const btn =
        document.getElementById(
            'btn-send'
        );

    if (!btn) return;

    btn.innerHTML =
        '<i class="ti ti-loader-2" ' +
        'style="animation:spin 1s ' +
        'linear infinite;"></i> ' +
        'Sending...';

    btn.disabled = true;

    setTimeout(() => {
        btn.style.display = 'none';

        const success =
            document.getElementById(
                'send-success'
            );

        if (success) {
            success.style.display =
                'flex';
        }
    }, 1200);
}


/* ══════════════════════════════════════
   PAYMENT COUNTDOWN
══════════════════════════════════════ */

let seconds = 600;

const timer =
    setInterval(() => {
        const element =
            document.getElementById(
                'countdown'
            );

        if (!element) {
            clearInterval(timer);
            return;
        }

        seconds--;

        const minutes =
            Math.floor(seconds / 60)
                .toString()
                .padStart(2, '0');

        const remainingSeconds =
            (seconds % 60)
                .toString()
                .padStart(2, '0');

        element.textContent =
            minutes +
            ':' +
            remainingSeconds;

        if (seconds <= 0) {
            clearInterval(timer);
            element.textContent =
                '00:00';
        }
    }, 1000);


/* ══════════════════════════════════════
   PAYMENT METHOD
══════════════════════════════════════ */

function selectMethod(method, btn) {
    document
        .querySelectorAll(
            '.pay-method-tab'
        )
        .forEach(button => {
            button.classList.remove(
                'active'
            );
        });

    document
        .querySelectorAll(
            '.pay-method-panel'
        )
        .forEach(panel => {
            panel.classList.remove(
                'active'
            );
        });

    btn.classList.add('active');

    const panel =
        document.getElementById(
            'panel-' + method
        );

    if (panel) {
        panel.classList.add('active');
    }
}


/* ══════════════════════════════════════
   CARD SELECTION AND FORMATTING
══════════════════════════════════════ */

function selectCard(element) {
    document
        .querySelectorAll('.saved-card')
        .forEach(card => {
            card.classList.remove(
                'selected'
            );
        });

    element.classList.add('selected');

    const form =
        document.getElementById(
            'new-card-form'
        );

    if (form) {
        form.style.display = 'none';
    }
}


function toggleNewCard() {
    document
        .querySelectorAll('.saved-card')
        .forEach(card => {
            card.classList.remove(
                'selected'
            );
        });

    const form =
        document.getElementById(
            'new-card-form'
        );

    if (!form) return;

    form.style.display =
        form.style.display === 'none'
            ? 'block'
            : 'none';
}


function formatCard(input) {
    let value =
        input.value
            .replace(/\D/g, '')
            .substring(0, 16);

    input.value =
        value
            .replace(/(.{4})/g, '$1 ')
            .trim();

    const icon =
        document.getElementById(
            'card-type-icon'
        );

    if (!icon) return;

    if (value.startsWith('4')) {
        icon.className =
            'ti ti-brand-visa card-icon';

    } else if (
        value.startsWith('5') ||
        value.startsWith('2')
    ) {
        icon.className =
            'ti ti-brand-mastercard ' +
            'card-icon';

    } else {
        icon.className =
            'ti ti-credit-card card-icon';
    }
}


function formatExpiry(input) {
    let value =
        input.value
            .replace(/\D/g, '')
            .substring(0, 4);

    if (value.length >= 2) {
        value =
            value.substring(0, 2) +
            ' / ' +
            value.substring(2);
    }

    input.value = value;
}


function toggleCvvTip() {
    const tip =
        document.getElementById(
            'cvv-tip'
        );

    if (!tip) return;

    tip.style.display =
        tip.style.display === 'none'
            ? 'block'
            : 'none';
}


/* ══════════════════════════════════════
   PHONE FORMATTING
══════════════════════════════════════ */

function formatPhone(input) {
    let value =
        input.value
            .replace(/\D/g, '')
            .substring(0, 10);

    if (
        value.length > 3 &&
        value.length <= 6
    ) {
        value =
            value.substring(0, 3) +
            '-' +
            value.substring(3);

    } else if (value.length > 6) {
        value =
            value.substring(0, 3) +
            '-' +
            value.substring(3, 6) +
            '-' +
            value.substring(6);
    }

    input.value = value;
}


/* ══════════════════════════════════════
   BANK AND PAYMENT SLIP
══════════════════════════════════════ */

function selectBank(element) {
    document
        .querySelectorAll(
            '.bank-account'
        )
        .forEach(account => {
            account.classList.remove(
                'selected'
            );
        });

    element.classList.add('selected');
}


function handleSlip(input) {
    if (!input.files.length) return;

    const area =
        document.getElementById(
            'slip-area'
        );

    const name =
        document.getElementById(
            'slip-name'
        );

    if (area) {
        area.classList.add(
            'has-file'
        );
    }

    if (name) {
        name.textContent =
            '✓ ' +
            input.files[0].name;

        name.style.display = 'block';
    }
}


/* ══════════════════════════════════════
   PROMO CODE
══════════════════════════════════════ */

const PROMO_CODES = {
    PEER10: 10,
    FIRST20: 20,
    STUDY15: 15
};

let discount = 0;

const BASE_PAYMENT = 1225;
const PAYMENT_VAT = 0.07;


function applyPromo() {
    const input =
        document.getElementById(
            'promo-input'
        );

    const result =
        document.getElementById(
            'promo-result'
        );

    if (!input || !result) return;

    const code =
        input.value
            .trim()
            .toUpperCase();

    const percentage =
        PROMO_CODES[code];

    if (percentage) {
        discount =
            BASE_PAYMENT *
            (percentage / 100);

        const subtotal =
            BASE_PAYMENT - discount;

        const vat =
            subtotal * PAYMENT_VAT;

        const total =
            subtotal + vat;

        const discountRow =
            document.getElementById(
                'discount-row'
            );

        if (discountRow) {
            discountRow.style.display =
                'flex';
        }

        const discountAmount =
            document.getElementById(
                'discount-amount'
            );

        const vatAmount =
            document.getElementById(
                'vat-amount'
            );

        const totalAmount =
            document.getElementById(
                'total-amount'
            );

        const payButton =
            document.getElementById(
                'btn-pay-now'
            );

        const paidAmount =
            document.getElementById(
                'psc-amount'
            );

        if (discountAmount) {
            discountAmount.textContent =
                '−฿' +
                discount.toFixed(2);
        }

        if (vatAmount) {
            vatAmount.textContent =
                '฿' +
                vat.toFixed(2);
        }

        if (totalAmount) {
            totalAmount.textContent =
                '฿' +
                total.toFixed(2);
        }

        if (payButton) {
            payButton.innerHTML =
                '<i class="ti ti-lock"></i> ' +
                'Pay ฿' +
                total.toFixed(2) +
                ' Securely';
        }

        if (paidAmount) {
            paidAmount.textContent =
                '฿' +
                total.toFixed(2) +
                ' paid';
        }

        result.className =
            'promo-result success';

        result.textContent =
            '✓ Code applied! ' +
            percentage +
            '% off — you save ฿' +
            discount.toFixed(2);

    } else if (code === '') {
        result.className =
            'promo-result error';

        result.textContent =
            'Please enter a promo code.';

    } else {
        result.className =
            'promo-result error';

        result.textContent =
            '✗ Invalid code. Try PEER10, ' +
            'FIRST20, or STUDY15.';
    }
}


/* ══════════════════════════════════════
   PAYMENT PROCESSING
══════════════════════════════════════ */

function processPayment() {
    const btn =
        document.getElementById(
            'btn-pay-now'
        );

    if (!btn) return;

    btn.innerHTML =
        '<i class="ti ti-loader-2" ' +
        'style="animation:spin 1s ' +
        'linear infinite;"></i> ' +
        'Processing...';

    btn.disabled = true;

    setTimeout(() => {
        launchConfetti();

        const overlay =
            document.getElementById(
                'pay-success-overlay'
            );

        if (overlay) {
            overlay.classList.add(
                'active'
            );
        }
    }, 2000);
}


/* ── Payment confetti ── */
function launchConfetti() {
    const wrapper =
        document.getElementById(
            'confetti-wrap'
        );

    if (!wrapper) return;

    const colors = [
        '#0077B6',
        '#22c55e',
        '#f59e0b',
        '#ef4444',
        '#7c3aed',
        '#ffffff'
    ];

    for (let index = 0; index < 60; index++) {
        const dot =
            document.createElement(
                'div'
            );

        dot.className =
            'confetti-dot';

        dot.style.cssText = `
            left:${Math.random() * 100}%;
            background:${colors[
            Math.floor(
                Math.random() *
                colors.length
            )
            ]
            };
            animation-delay:${Math.random() * 0.8
            }s;
            animation-duration:${0.8 +
            Math.random() * 0.8
            }s;
            width:${6 +
            Math.random() * 6
            }px;
            height:${6 +
            Math.random() * 6
            }px;
            border-radius:${Math.random() > 0.5
                ? '50%'
                : '2px'
            };
        `;

        wrapper.appendChild(dot);
    }
}


/* ══════════════════════════════════════
   USER MENU
══════════════════════════════════════ */

function toggleUserMenu() {
    const dropdown =
        document.getElementById(
            'user-dropdown'
        );

    const chevron =
        document.getElementById(
            'una-chevron'
        );

    if (!dropdown) return;

    const open =
        dropdown.classList.toggle(
            'open'
        );

    if (chevron) {
        chevron.style.transform =
            open
                ? 'rotate(180deg)'
                : '';
    }
}


document.addEventListener(
    'click',
    event => {
        const menuWrapper =
            document.getElementById(
                'user-menu-wrap'
            );

        if (
            menuWrapper &&
            !menuWrapper.contains(
                event.target
            )
        ) {
            const dropdown =
                document.getElementById(
                    'user-dropdown'
                );

            const chevron =
                document.getElementById(
                    'una-chevron'
                );

            if (dropdown) {
                dropdown.classList.remove(
                    'open'
                );
            }

            if (chevron) {
                chevron.style.transform =
                    '';
            }
        }
    }
);


/* ══════════════════════════════════════
   PROFILE SECTION SWITCHING
══════════════════════════════════════ */

function switchSection(name, btn) {
    document
        .querySelectorAll('.sp-panel')
        .forEach(panel => {
            panel.classList.remove(
                'active'
            );
        });

    document
        .querySelectorAll(
            '.sp-nav-item'
        )
        .forEach(button => {
            button.classList.remove(
                'active'
            );
        });

    const panel =
        document.getElementById(
            'section-' + name
        );

    if (panel) {
        panel.classList.add('active');
    }

    if (btn) {
        btn.classList.add('active');
    }
}


function previewProfilePhoto(input) {
    if (!input.files.length) return;

    const reader =
        new FileReader();

    reader.onload = event => {
        const preview =
            document.getElementById(
                'profile-photo-preview'
            );

        if (preview) {
            preview.src =
                event.target.result;
        }
    };

    reader.readAsDataURL(
        input.files[0]
    );
}


function removePhoto() {
    const preview =
        document.getElementById(
            'profile-photo-preview'
        );

    const input =
        document.getElementById(
            'profile-photo-input'
        );

    if (preview) {
        preview.src =
            'https://via.placeholder.com/120';
    }

    if (input) {
        input.value = '';
    }
}


function updateBioCount(element) {
    const counter =
        document.getElementById(
            'bio-count'
        );

    if (counter) {
        counter.textContent =
            element.value.length;
    }
}


function toggleLang(element) {
    element.classList.toggle(
        'selected'
    );
}


/* ══════════════════════════════════════
   PASSWORD AND SECURITY
══════════════════════════════════════ */

function togglePwd(id, btn) {
    const input =
        document.getElementById(id);

    if (!input) return;

    const visible =
        input.type === 'text';

    input.type =
        visible
            ? 'password'
            : 'text';

    const icon =
        btn.querySelector('.ti');

    if (icon) {
        icon.className =
            visible
                ? 'ti ti-eye'
                : 'ti ti-eye-off';
    }
}


function checkPwdStrength(value) {
    const strength =
        document.getElementById(
            'pwd-strength'
        );

    if (!strength) return;

    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }

    strength.className =
        'pwd-strength strength-' +
        score;
}


function changePassword() {
    const currentPassword =
        document.getElementById(
            'current-password'
        )?.value;

    const newPassword =
        document.getElementById(
            'new-password'
        )?.value;

    const confirmPassword =
        document.getElementById(
            'confirm-password'
        )?.value;

    if (
        !currentPassword ||
        !newPassword ||
        !confirmPassword
    ) {
        alert(
            'Please complete all password fields.'
        );

        return;
    }

    if (
        newPassword !==
        confirmPassword
    ) {
        alert(
            'New passwords do not match.'
        );

        return;
    }

    showToast(
        'Password changed successfully!'
    );
}


function toggle2FA(input) {
    showToast(
        input.checked
            ? 'Two-factor authentication enabled.'
            : 'Two-factor authentication disabled.'
    );
}


function revokeSession(btn) {
    const session =
        btn.closest('.session-item');

    if (session) {
        session.remove();
    }

    showToast(
        'Session revoked successfully.'
    );
}


function revokeAllSessions() {
    document
        .querySelectorAll(
            '.session-item'
        )
        .forEach(session => {
            session.remove();
        });

    showToast(
        'All other sessions were revoked.'
    );
}


/* ══════════════════════════════════════
   PROFILE MODALS AND TOAST
══════════════════════════════════════ */

function showModal(name) {
    const modal =
        document.getElementById(
            name + '-modal'
        );

    if (modal) {
        modal.classList.add('active');
    }
}


function closeModal() {
    document
        .querySelectorAll(
            '.modal-overlay, .modal'
        )
        .forEach(modal => {
            modal.classList.remove(
                'active'
            );
        });
}


function checkDeleteConfirm(value) {
    const button =
        document.getElementById(
            'btn-delete-account'
        );

    if (button) {
        button.disabled =
            value !== 'DELETE';
    }
}


function saveSection(name) {
    showToast(
        'Profile updated successfully!'
    );
}


function showToast(message) {
    const toast =
        document.getElementById(
            'toast'
        );

    if (!toast) {
        alert(message);
        return;
    }

    const messageElement =
        toast.querySelector(
            '.toast-message'
        );

    if (messageElement) {
        messageElement.textContent =
            message;
    } else {
        toast.textContent = message;
    }

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove(
            'show'
        );
    }, 3000);
}


/* ══════════════════════════════════════
   BOOKING CALENDAR
══════════════════════════════════════ */

let selectedDate = '';
let selectedTime = '';


function buildDates() {
    const grid =
        document.getElementById(
            'date-grid'
        );

    if (!grid) return;

    grid.innerHTML = '';

    const today = new Date();

    for (let index = 0; index < 7; index++) {
        const date = new Date(today);

        date.setDate(
            today.getDate() + index
        );

        const button =
            document.createElement(
                'button'
            );

        button.type = 'button';
        button.className =
            'date-option';

        const dayName =
            date.toLocaleDateString(
                'en-US',
                { weekday: 'short' }
            );

        const dayNumber =
            date.getDate();

        const month =
            date.toLocaleDateString(
                'en-US',
                { month: 'short' }
            );

        const label =
            dayName +
            ', ' +
            month +
            ' ' +
            dayNumber;

        button.innerHTML =
            '<span>' +
            dayName +
            '</span>' +
            '<strong>' +
            dayNumber +
            '</strong>';

        button.onclick =
            () =>
                selectDate(
                    button,
                    label
                );

        grid.appendChild(button);
    }
}


function selectDate(btn, label) {
    document
        .querySelectorAll(
            '.date-option'
        )
        .forEach(button => {
            button.classList.remove(
                'selected'
            );
        });

    btn.classList.add('selected');

    selectedDate = label;

    updateSummary();
}


function selectTime(btn, time) {
    document
        .querySelectorAll(
            '.time-option'
        )
        .forEach(button => {
            button.classList.remove(
                'selected'
            );
        });

    btn.classList.add('selected');

    selectedTime = time;

    updateSummary();
}


function updateSummary() {
    const dateElement =
        document.getElementById(
            'summary-date'
        );

    const timeElement =
        document.getElementById(
            'summary-time'
        );

    if (dateElement) {
        dateElement.textContent =
            selectedDate || 'Not selected';
    }

    if (timeElement) {
        timeElement.textContent =
            selectedTime || 'Not selected';
    }
}


/* ══════════════════════════════════════
   BOOKING STEPS
══════════════════════════════════════ */

function setDone(number) {
    const step =
        document.getElementById(
            'step-' + number
        );

    if (step) {
        step.className =
            'booking-step done';
    }
}


function setActive(number) {
    const step =
        document.getElementById(
            'step-' + number
        );

    if (step) {
        step.className =
            'booking-step active';
    }
}


function setIdle(number) {
    const step =
        document.getElementById(
            'step-' + number
        );

    if (step) {
        step.className =
            'booking-step';
    }
}


function goStep(number) {
    document
        .querySelectorAll(
            '.booking-panel'
        )
        .forEach(panel => {
            panel.classList.remove(
                'active'
            );
        });

    const panel =
        document.getElementById(
            'booking-panel-' + number
        );

    if (panel) {
        panel.classList.add('active');
    }

    for (
        let index = 1;
        index <= 3;
        index++
    ) {
        if (index < number) {
            setDone(index);
        } else if (index === number) {
            setActive(index);
        } else {
            setIdle(index);
        }
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function checkStep2() {
    const subjectSelect =
        document.getElementById(
            'subject-select'
        );

    const button =
        document.getElementById(
            'btn2'
        );

    if (!subjectSelect || !button) {
        return;
    }

    const completed =
        subjectSelect.value !== '';

    button.classList.toggle(
        'ready',
        completed
    );
}


if (
    document.getElementById(
        'date-grid'
    )
) {
    buildDates();
}


/* ══════════════════════════════════════
   TUTOR PROFILE TABS
══════════════════════════════════════ */

function switchProfileTab(name, btn) {
    document
        .querySelectorAll(
            '.profile-tab-btn'
        )
        .forEach(button => {
            button.classList.remove(
                'active'
            );
        });

    document
        .querySelectorAll(
            '.profile-panel'
        )
        .forEach(panel => {
            panel.classList.remove(
                'active'
            );
        });

    btn.classList.add('active');

    const panel =
        document.getElementById(
            'ptab-' + name
        );

    if (panel) {
        panel.classList.add('active');
    }
}

/* ========================================
   STUDENT DASHBOARD TAB SWITCHING
======================================== */

function switchTab(tabName, clickedButton) {
    // Remove active status from every tab button
    document
        .querySelectorAll(".dash-tabs .tab-btn")
        .forEach(function (button) {
            button.classList.remove("active");
            button.setAttribute("aria-selected", "false");
        });

    // Hide every dashboard tab panel
    document
        .querySelectorAll(".sessions-list .tab-panel")
        .forEach(function (panel) {
            panel.classList.remove("active");
            panel.hidden = true;
        });

    // Find the selected panel
    const selectedPanel = document.getElementById(
        "tab-" + tabName
    );

    if (!selectedPanel) {
        console.error(
            "Dashboard panel not found: tab-" + tabName
        );
        return;
    }

    // Activate the clicked button
    if (clickedButton) {
        clickedButton.classList.add("active");
        clickedButton.setAttribute(
            "aria-selected",
            "true"
        );
    }

    // Display the selected panel
    selectedPanel.hidden = false;
    selectedPanel.classList.add("active");
}