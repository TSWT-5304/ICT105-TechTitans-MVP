(() => {
    'use strict';

    const STORAGE_KEY = 'peertutorTutorDashboardV2';

    let pendingAction = null;
    let toastTimer = null;

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

    function loadState() {
        try {
            return JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            ) || {
                processedRequests: {},
                customUpcoming: [],
                removedUpcoming: [],
                completedSessions: [],
                helpfulReviews: {},
                reviewReplies: {},
                privacy: {
                    email: true,
                    profile: true,
                    analytics: false
                }
            };
        } catch (error) {
            return {
                processedRequests: {},
                customUpcoming: [],
                removedUpcoming: [],
                completedSessions: [],
                helpfulReviews: {},
                reviewReplies: {},
                privacy: {
                    email: true,
                    profile: true,
                    analytics: false
                }
            };
        }
    }

    let state = loadState();

    /*
     * Session-request responses are temporary in this prototype.
     *
     * A browser refresh should reload the three sample requests in their
     * original "New" state so the tutor can test Confirm Session, Suggest New
     * Time, and Decline again. Other dashboard settings remain persistent.
     */
    state.processedRequests = {};
    state.customUpcoming = [];

    function saveState() {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(
            /[&<>'"]/g,
            character => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            })[character]
        );
    }

    function showToast(message, type = 'success') {
        const toast = $('#td-toast');

        if (!toast) {
            console.log(message);
            return;
        }

        clearTimeout(toastTimer);

        toast.className = `td-toast ${type}`;

        const icon = $('.ti', toast);

        if (icon) {
            if (type === 'error') {
                icon.className = 'ti ti-circle-x';
            } else if (type === 'warning') {
                icon.className = 'ti ti-alert-circle';
            } else {
                icon.className = 'ti ti-circle-check';
            }
        }

        const messageElement = $('#td-toast-message');

        if (messageElement) {
            messageElement.textContent = message;
        }

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3300);
    }

    function showInfoModal({
        title,
        icon = 'ti-info-circle',
        html = '',
        actions = ''
    }) {
        const titleElement = $('#td-info-title');
        const iconElement = $('#td-info-icon');
        const contentElement = $('#td-info-content');
        const actionsElement = $('#td-info-actions');
        const overlay = $('#td-info-overlay');
        const modal = $('#td-info-modal');

        if (
            !titleElement ||
            !iconElement ||
            !contentElement ||
            !actionsElement ||
            !overlay ||
            !modal
        ) {
            return;
        }

        titleElement.textContent = title;

        iconElement.innerHTML = `
            <i class="ti ${icon}"></i>
        `;

        contentElement.innerHTML = html;

        actionsElement.innerHTML =
            actions ||
            `
                <button
                    class="btn-modal-confirm"
                    type="button"
                    data-close-info
                >
                    Close
                </button>
            `;

        overlay.classList.add('active');
        modal.classList.add('active');

        overlay.setAttribute(
            'aria-hidden',
            'false'
        );
    }

    function closeInfoModal() {
        const overlay = $('#td-info-overlay');
        const modal = $('#td-info-modal');

        if (overlay) {
            overlay.classList.remove('active');

            overlay.setAttribute(
                'aria-hidden',
                'true'
            );
        }

        if (modal) {
            modal.classList.remove('active');
        }
    }

    window.tdCloseModal = function tdCloseModal() {
        const overlay = $('#modal-overlay');
        const modal = $('#action-modal');

        if (overlay) {
            overlay.classList.remove('active');
        }

        if (modal) {
            modal.classList.remove('active');
        }

        pendingAction = null;
    };

    function showConfirm({
        title,
        message,
        confirmText = 'Confirm',
        tone = 'confirm',
        onConfirm
    }) {
        const icon = $('#modal-icon');
        const titleElement = $('#modal-title');
        const messageElement = $('#modal-message');
        const confirmButton =
            $('#btn-modal-confirm');
        const overlay = $('#modal-overlay');
        const modal = $('#action-modal');

        if (
            !icon ||
            !titleElement ||
            !messageElement ||
            !confirmButton ||
            !overlay ||
            !modal
        ) {
            const accepted =
                window.confirm(message);

            if (
                accepted &&
                typeof onConfirm === 'function'
            ) {
                onConfirm();
            }

            return;
        }

        icon.className =
            tone === 'danger'
                ? 'modal-icon reject'
                : 'modal-icon confirm';

        icon.innerHTML = `
            <i class="ti ${tone === 'danger'
                ? 'ti-alert-triangle'
                : 'ti-circle-check'
            }"></i>
        `;

        titleElement.textContent = title;
        messageElement.textContent = message;

        confirmButton.textContent =
            confirmText;

        confirmButton.className =
            tone === 'danger'
                ? 'btn-modal-confirm danger'
                : 'btn-modal-confirm';

        pendingAction = onConfirm;

        confirmButton.onclick = () => {
            const action = pendingAction;

            window.tdCloseModal();

            if (
                typeof action === 'function'
            ) {
                action();
            }
        };

        overlay.classList.add('active');
        modal.classList.add('active');
    }

    function switchTab(name) {
        $$('.tutor-tab').forEach(button => {
            const onclick =
                button.getAttribute('onclick');

            button.classList.toggle(
                'active',
                onclick?.includes(`'${name}'`)
            );
        });

        $$('.tpanel').forEach(panel => {
            panel.classList.toggle(
                'active',
                panel.id === `tpanel-${name}`
            );
        });

        const tabs = $('.tutor-tabs');

        if (tabs) {
            window.scrollTo({
                top: tabs.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    window.switchTTab =
        function switchTTab(name, button) {
            $$('.tutor-tab').forEach(item => {
                item.classList.remove('active');
            });

            $$('.tpanel').forEach(panel => {
                panel.classList.remove('active');
            });

            if (button) {
                button.classList.add('active');
            }

            const selectedPanel =
                $(`#tpanel-${name}`);

            if (selectedPanel) {
                selectedPanel.classList.add(
                    'active'
                );
            }
        };

    function requestData(card) {
        const values = $$('.rdv', card).map(
            item => item.textContent.trim()
        );

        const name =
            $('.req-name', card)
                ?.textContent.trim() ||
            'Student';

        const initials =
            $('.req-avatar', card)
                ?.textContent.trim() ||
            name
                .split(/\s+/)
                .map(part => part[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

        return {
            id: card.id,
            name: name,
            initials: initials,

            avatarStyle:
                $('.req-avatar', card)
                    ?.getAttribute('style') ||
                '',

            subject:
                values[0] ||
                'Tutoring Session',

            date: values[1] || '',
            time: values[2] || '',
            duration: values[3] || '',
            rate: values[4] || '',
            format: values[5] || '',

            note:
                $('.req-focus-text', card)
                    ?.textContent.trim()
                    .replace(/^"|"$/g, '') ||
                ''
        };
    }

    function updatePendingCount() {
        const count =
            $$('.request-card').filter(
                card =>
                    !card.classList.contains(
                        'is-processed'
                    )
            ).length;

        const pendingCount =
            $('#pending-count');

        const requestBadge =
            $('#req-badge');

        const emptyState =
            $('#empty-requests');

        const requestsList =
            $('#requests-list');

        if (pendingCount) {
            pendingCount.textContent = count;
        }

        if (requestBadge) {
            requestBadge.textContent = count;

            requestBadge.style.display =
                count > 0 ? '' : 'none';
        }

        if (emptyState) {
            emptyState.style.display =
                count > 0
                    ? 'none'
                    : 'flex';
        }

        if (requestsList) {
            requestsList.style.display =
                count > 0
                    ? 'flex'
                    : 'none';
        }
    }

    function markRequest(
        card,
        status,
        label,
        icon
    ) {
        const badge =
            $('.req-status-badge', card);

        if (badge) {
            badge.className =
                `req-status-badge req-${status}`;

            badge.innerHTML = `
                <i class="ti ${icon}"></i>
                ${label}
            `;
        }

        card.classList.add(
            'is-processed'
        );

        $$(
            `
                .req-actions button,
                .reschedule-panel button,
                .reschedule-panel input,
                .reschedule-panel textarea
            `,
            card
        ).forEach(control => {
            control.disabled = true;
        });

        const reschedulePanel =
            $('.reschedule-panel', card);

        if (reschedulePanel) {
            reschedulePanel.style.display =
                'none';
        }
    }

    function renderUpcomingSession(
        data,
        dynamic = true
    ) {
        const list =
            $('#upcoming-sessions-list');

        if (!list) {
            return;
        }

        const existingSession = $(
            `[data-session-id="${data.id}"]`,
            list
        );

        if (existingSession) {
            return;
        }

        const row =
            document.createElement('div');

        row.className =
            'tutor-session-row';

        row.dataset.sessionId = data.id;

        row.dataset.dynamic =
            dynamic ? 'true' : 'false';

        row.innerHTML = `
            <div class="tsr-left">
                <div
                    class="tsr-avatar"
                    style="${escapeHtml(
            data.avatarStyle
        )}"
                >
                    ${escapeHtml(
            data.initials
        )}
                </div>

                <div>
                    <div class="tsr-title-row">
                        <h3>
                            ${escapeHtml(
            data.subject
        )}
                        </h3>

                        <span
                            class="tstatus confirmed"
                        >
                            <i
                                class="ti ti-circle-check"
                            ></i>
                            Confirmed
                        </span>
                    </div>

                    <p class="tsr-student">
                        with ${escapeHtml(
            data.name
        )}
                    </p>

                    <div class="tsr-meta">
                        <span>
                            <i
                                class="ti ti-calendar"
                            ></i>
                            ${escapeHtml(
            data.date
        )}
                        </span>

                        <span>
                            <i
                                class="ti ti-clock"
                            ></i>
                            ${escapeHtml(
            data.time
        )}
                            (${escapeHtml(
            data.duration
        )})
                        </span>

                        <span>
                            <i
                                class="ti ti-currency-dollar"
                            ></i>
                            ${escapeHtml(
            data.rate
        )}
                        </span>
                    </div>
                </div>
            </div>

            <div class="tsr-actions">
                <button
                    class="btn-join-session"
                    type="button"
                >
                    <i
                        class="ti ti-video"
                    ></i>
                    Start Meeting
                </button>

                <button
                    class="btn-message-stu"
                    type="button"
                >
                    <i
                        class="ti ti-message"
                    ></i>
                    Message
                </button>

                <button
                    class="btn-cancel-stu"
                    type="button"
                >
                    Cancel
                </button>
            </div>
        `;

        list.prepend(row);
    }

    function confirmRequest(card) {
        const data =
            requestData(card);

        markRequest(
            card,
            'confirmed',
            'Confirmed',
            'ti-circle-check'
        );

        state.processedRequests[
            data.id
        ] = 'confirmed';

        const alreadyAdded =
            state.customUpcoming.some(
                item => item.id === data.id
            );

        if (!alreadyAdded) {
            state.customUpcoming.push(
                data
            );
        }

        saveState();

        renderUpcomingSession(data);

        updatePendingCount();

        showToast(
            'Session confirmed successfully. The student has been notified.'
        );
    }

    function rejectRequest(card) {
        const data =
            requestData(card);

        markRequest(
            card,
            'rejected',
            'Declined',
            'ti-circle-x'
        );

        state.processedRequests[
            data.id
        ] = 'rejected';

        saveState();

        updatePendingCount();

        showToast(
            `Request from ${data.name} was declined.`,
            'warning'
        );
    }

    window.handleRequest =
        function handleRequest(
            id,
            action
        ) {
            const card =
                document.getElementById(id);

            if (
                !card ||
                card.classList.contains(
                    'is-processed'
                )
            ) {
                return;
            }

            const data =
                requestData(card);

            if (action === 'confirmed') {
                showConfirm({
                    title:
                        'Confirm this session?',

                    message:
                        `Confirm ${data.subject} ` +
                        `with ${data.name} on ` +
                        `${data.date} at ` +
                        `${data.time}?`,

                    confirmText:
                        'Yes, Confirm',

                    onConfirm: () => {
                        confirmRequest(card);
                    }
                });
            } else {
                showConfirm({
                    title:
                        'Decline this request?',

                    message:
                        `This will decline ` +
                        `${data.name}'s ` +
                        `tutoring request.`,

                    confirmText:
                        'Yes, Decline',

                    tone: 'danger',

                    onConfirm: () => {
                        rejectRequest(card);
                    }
                });
            }
        };

    window.openReschedule =
        function openReschedule(id) {
            const card =
                document.getElementById(id);

            if (
                !card ||
                card.classList.contains(
                    'is-processed'
                )
            ) {
                return;
            }

            $$('.reschedule-panel').forEach(
                panel => {
                    if (
                        panel.id !==
                        `reschedule-${id}`
                    ) {
                        panel.style.display =
                            'none';
                    }
                }
            );

            const panel =
                $(`#reschedule-${id}`);

            if (panel) {
                panel.style.display =
                    'block';
            }

            const dateInput =
                $(`#rdate-${id}`);

            if (dateInput) {
                dateInput.focus();
            }
        };

    window.closeReschedule =
        function closeReschedule(id) {
            const panel =
                $(`#reschedule-${id}`);

            if (panel) {
                panel.style.display =
                    'none';
            }
        };

    window.sendReschedule =
        function sendReschedule(id) {
            const card =
                document.getElementById(id);

            const dateInput =
                $(`#rdate-${id}`);

            const timeInput =
                $(`#rtime-${id}`);

            if (
                !card ||
                !dateInput ||
                !timeInput
            ) {
                return;
            }

            if (
                !dateInput.value ||
                !timeInput.value
            ) {
                showToast(
                    'Please select both a new date and time.',
                    'error'
                );

                return;
            }

            const formattedDate =
                new Date(
                    `${dateInput.value}T00:00:00`
                ).toLocaleDateString(
                    'en-US',
                    {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    }
                );

            const formattedTime =
                new Date(
                    `2000-01-01T${timeInput.value}`
                ).toLocaleTimeString(
                    'en-US',
                    {
                        hour: 'numeric',
                        minute: '2-digit'
                    }
                );

            showConfirm({
                title:
                    'Send schedule suggestion?',

                message:
                    `Suggest ${formattedDate} ` +
                    `at ${formattedTime} ` +
                    `to the student?`,

                confirmText:
                    'Send Suggestion',

                onConfirm: () => {
                    markRequest(
                        card,
                        'rescheduled',
                        'New Time Sent',
                        'ti-calendar-event'
                    );

                    state.processedRequests[
                        id
                    ] = 'rescheduled';

                    saveState();

                    updatePendingCount();

                    showToast(
                        'New schedule suggestion sent to the student.'
                    );
                }
            });
        };

    function sessionData(row) {
        return {
            id:
                row.dataset.sessionId ||
                `session-${Date.now()}`,

            subject:
                $('h3', row)
                    ?.textContent.trim() ||
                'Tutoring Session',

            student:
                $('.tsr-student', row)
                    ?.textContent
                    .replace(/^with\s+/i, '')
                    .trim() ||
                'Student',

            meta:
                $$('.tsr-meta span', row).map(
                    item =>
                        item.textContent.trim()
                ),

            initials:
                $('.tsr-avatar', row)
                    ?.textContent.trim() ||
                'ST',

            avatarStyle:
                $('.tsr-avatar', row)
                    ?.getAttribute('style') ||
                ''
        };
    }

    function moveSessionToHistory(
        row,
        status = 'completed'
    ) {
        const data =
            sessionData(row);

        const history =
            $('#history-sessions-list');

        const historyRow =
            document.createElement('div');

        historyRow.className =
            'tutor-session-row';

        historyRow.dataset.sessionId =
            data.id;

        historyRow.innerHTML = `
            <div class="tsr-left">
                <div
                    class="tsr-avatar"
                    style="${escapeHtml(
            data.avatarStyle
        )}"
                >
                    ${escapeHtml(
            data.initials
        )}
                </div>

                <div>
                    <div class="tsr-title-row">
                        <h3>
                            ${escapeHtml(
            data.subject
        )}
                        </h3>

                        <span
                            class="tstatus ${status}"
                        >
                            <i
                                class="ti ${status ===
                'completed'
                ? 'ti-check'
                : 'ti-x'
            }"
                            ></i>

                            ${status ===
                'completed'
                ? 'Completed'
                : 'Cancelled'
            }
                        </span>
                    </div>

                    <p class="tsr-student">
                        with ${escapeHtml(
                data.student
            )}
                    </p>

                    <div class="tsr-meta">
                        ${data.meta
                .map(
                    (
                        text,
                        index
                    ) => `
                                    <span>
                                        <i
                                            class="ti ${index ===
                            0
                            ? 'ti-calendar'
                            : index ===
                                1
                                ? 'ti-clock'
                                : 'ti-currency-dollar'
                        }"
                                        ></i>

                                        ${escapeHtml(
                            text
                        )}
                                    </span>
                                `
                )
                .join('')}
                    </div>
                </div>
            </div>

            <div class="tsr-actions">
                ${status === 'completed'
                ? `
                            <button
                                class="btn-view-notes"
                                type="button"
                            >
                                <i
                                    class="ti ti-notes"
                                ></i>
                                Session Notes
                            </button>
                        `
                : `
                            <span
                                style="
                                    font-size:13px;
                                    color:#aaa;
                                "
                            >
                                Cancelled by tutor
                            </span>
                        `
            }
            </div>
        `;

        if (history) {
            history.prepend(
                historyRow
            );
        }

        row.remove();

        if (
            !state.removedUpcoming.includes(
                data.id
            )
        ) {
            state.removedUpcoming.push(
                data.id
            );
        }

        state.completedSessions.push({
            ...data,
            status: status
        });

        saveState();
    }

    function startOrCompleteMeeting(
        button
    ) {
        const row =
            button.closest(
                '.tutor-session-row'
            );

        if (!row) {
            return;
        }

        if (
            !row.classList.contains(
                'session-in-progress'
            )
        ) {
            row.classList.add(
                'session-in-progress'
            );

            button.className =
                'btn-complete-session';

            button.innerHTML = `
                <i
                    class="ti ti-circle-check"
                ></i>
                Complete Session
            `;

            const statusBadge =
                $('.tstatus', row);

            if (statusBadge) {
                statusBadge.className =
                    'tstatus confirmed';

                statusBadge.innerHTML = `
                    <i
                        class="ti ti-video"
                    ></i>
                    In Session
                `;
            }

            showToast(
                'Meeting started. The student has been notified.'
            );

            return;
        }

        showConfirm({
            title:
                'Complete this session?',

            message:
                'The session will move to Session History.',

            confirmText:
                'Complete Session',

            onConfirm: () => {
                moveSessionToHistory(
                    row,
                    'completed'
                );

                showToast(
                    'Session completed and moved to history.'
                );
            }
        });
    }

    function openMessage(row) {
        const student =
            sessionData(row).student;

        showInfoModal({
            title:
                `Message ${student}`,

            icon:
                'ti-message',

            html: `
                <p>
                    Send a prototype message
                    to ${escapeHtml(student)}.
                </p>

                <textarea
                    id="td-message-text"
                    rows="4"
                    placeholder="Type your message..."
                ></textarea>
            `,

            actions: `
                <button
                    class="btn-secondary"
                    type="button"
                    data-close-info
                >
                    Cancel
                </button>

                <button
                    class="btn-modal-confirm"
                    type="button"
                    id="td-send-message"
                >
                    Send Message
                </button>
            `
        });

        const sendButton =
            $('#td-send-message');

        if (sendButton) {
            sendButton.onclick = () => {
                const messageInput =
                    $('#td-message-text');

                const message =
                    messageInput
                        ?.value.trim();

                if (!message) {
                    showToast(
                        'Please type a message first.',
                        'error'
                    );

                    return;
                }

                closeInfoModal();

                showToast(
                    `Message sent to ${student}.`
                );
            };
        }
    }

    function cancelUpcoming(row) {
        const data =
            sessionData(row);

        showConfirm({
            title:
                'Cancel this session?',

            message:
                `Cancel ${data.subject} ` +
                `with ${data.student}? ` +
                `The student will be notified.`,

            confirmText:
                'Yes, Cancel',

            tone:
                'danger',

            onConfirm: () => {
                moveSessionToHistory(
                    row,
                    'cancelled'
                );

                showToast(
                    'Session cancelled. The student has been notified.',
                    'warning'
                );
            }
        });
    }

    function viewNotes(row) {
        const data =
            sessionData(row);

        showInfoModal({
            title:
                'Session Notes',

            icon:
                'ti-notes',

            html: `
                <p>
                    <strong>Student:</strong>
                    ${escapeHtml(
                data.student
            )}
                </p>

                <p>
                    <strong>Subject:</strong>
                    ${escapeHtml(
                data.subject
            )}
                </p>

                <p>
                    <strong>
                        Session summary:
                    </strong>
                    Reviewed the requested
                    topic, completed guided
                    examples, and discussed
                    next practice steps.
                </p>

                <p>
                    <strong>
                        Follow-up:
                    </strong>
                    The student should review
                    the shared exercises before
                    the next session.
                </p>
            `
        });
    }

    function exportEarnings() {
        const rows =
            $$('.earnings-table tbody tr')
                .map(row =>
                    $$('td', row).map(
                        cell =>
                            cell.textContent.trim()
                    )
                );

        const csv = [
            [
                'Student',
                'Subject',
                'Date',
                'Duration',
                'Amount',
                'Status'
            ],
            ...rows
        ]
            .map(row =>
                row
                    .map(value =>
                        `"${String(value)
                            .replace(
                                /"/g,
                                '""'
                            )}"`
                    )
                    .join(',')
            )
            .join('\n');

        const blob =
            new Blob(
                [csv],
                {
                    type:
                        'text/csv;charset=utf-8'
                }
            );

        const link =
            document.createElement('a');

        const url =
            URL.createObjectURL(blob);

        link.href = url;

        link.download =
            'peertutor-tutor-earnings.csv';

        document.body.appendChild(
            link
        );

        link.click();

        link.remove();

        URL.revokeObjectURL(url);

        showToast(
            'Earnings CSV downloaded.'
        );
    }

    function initializeReviewActions() {
        $$('.review-card').forEach(
            (card, index) => {
                card.dataset.reviewId =
                    `review-${index + 1}`;

                if (
                    !$('.review-actions', card)
                ) {
                    card.insertAdjacentHTML(
                        'beforeend',
                        `
                            <div
                                class="review-actions"
                            >
                                <button
                                    type="button"
                                    class="btn-review-helpful"
                                >
                                    <i
                                        class="ti ti-thumb-up"
                                    ></i>
                                    Helpful
                                    <span>
                                        ${state
                            .helpfulReviews[
                        card
                            .dataset
                            .reviewId
                        ] ||
                        0
                        }
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    class="btn-review-reply"
                                >
                                    <i
                                        class="ti ti-message-reply"
                                    ></i>
                                    Reply
                                </button>
                            </div>
                        `
                    );
                }

                const savedReply =
                    state.reviewReplies[
                    card.dataset.reviewId
                    ];

                if (
                    savedReply &&
                    !$('.review-reply', card)
                ) {
                    card.insertAdjacentHTML(
                        'beforeend',
                        `
                            <div
                                class="review-reply"
                            >
                                <strong>
                                    Your reply:
                                </strong>
                                ${escapeHtml(
                            savedReply
                        )}
                            </div>
                        `
                    );
                }
            }
        );
    }

    function replyToReview(card) {
        const id =
            card.dataset.reviewId;

        showInfoModal({
            title:
                'Reply to Review',

            icon:
                'ti-message-reply',

            html: `
                <p>
                    Your reply will appear
                    below this review in the
                    prototype.
                </p>

                <textarea
                    id="td-review-reply"
                    rows="4"
                    placeholder="Write a professional reply..."
                >${escapeHtml(
                state.reviewReplies[id] ||
                ''
            )}</textarea>
            `,

            actions: `
                <button
                    class="btn-secondary"
                    type="button"
                    data-close-info
                >
                    Cancel
                </button>

                <button
                    class="btn-modal-confirm"
                    type="button"
                    id="td-save-reply"
                >
                    Save Reply
                </button>
            `
        });

        const saveButton =
            $('#td-save-reply');

        if (saveButton) {
            saveButton.onclick = () => {
                const replyInput =
                    $('#td-review-reply');

                const reply =
                    replyInput
                        ?.value.trim();

                if (!reply) {
                    showToast(
                        'Please enter a reply.',
                        'error'
                    );

                    return;
                }

                state.reviewReplies[
                    id
                ] = reply;

                saveState();

                const existingReply =
                    $('.review-reply', card);

                if (existingReply) {
                    existingReply.remove();
                }

                card.insertAdjacentHTML(
                    'beforeend',
                    `
                        <div
                            class="review-reply"
                        >
                            <strong>
                                Your reply:
                            </strong>
                            ${escapeHtml(reply)}
                        </div>
                    `
                );

                closeInfoModal();

                showToast(
                    'Reply saved.'
                );
            };
        }
    }

    function openDashboardAction(
        action
    ) {
        if (
            action === 'notifications'
        ) {
            showInfoModal({
                title:
                    'Notifications',

                icon:
                    'ti-bell',

                html: `
                    <ul>
                        <li>
                            New tutoring request
                            received.
                        </li>

                        <li>
                            Your latest session
                            was confirmed.
                        </li>

                        <li>
                            Monthly earnings
                            summary is available.
                        </li>
                    </ul>
                `
            });
        } else if (
            action === 'privacy'
        ) {
            const privacy =
                state.privacy;

            showInfoModal({
                title:
                    'Privacy Settings',

                icon:
                    'ti-shield-lock',

                html: `
                    <label>
                        <input
                            type="checkbox"
                            id="privacy-email"
                            ${privacy.email
                        ? 'checked'
                        : ''
                    }
                        >
                        Receive email
                        notifications
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="privacy-profile"
                            ${privacy.profile
                        ? 'checked'
                        : ''
                    }
                        >
                        Show tutor profile
                        to students
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            id="privacy-analytics"
                            ${privacy.analytics
                        ? 'checked'
                        : ''
                    }
                        >
                        Allow anonymous
                        usability analytics
                    </label>
                `,

                actions: `
                    <button
                        class="btn-secondary"
                        type="button"
                        data-close-info
                    >
                        Cancel
                    </button>

                    <button
                        class="btn-modal-confirm"
                        type="button"
                        id="td-save-privacy"
                    >
                        Save Settings
                    </button>
                `
            });

            const savePrivacyButton =
                $('#td-save-privacy');

            if (savePrivacyButton) {
                savePrivacyButton.onclick =
                    () => {
                        const emailInput =
                            $('#privacy-email');

                        const profileInput =
                            $('#privacy-profile');

                        const analyticsInput =
                            $('#privacy-analytics');

                        state.privacy = {
                            email:
                                emailInput
                                    ?.checked ??
                                true,

                            profile:
                                profileInput
                                    ?.checked ??
                                true,

                            analytics:
                                analyticsInput
                                    ?.checked ??
                                false
                        };

                        saveState();

                        closeInfoModal();

                        showToast(
                            'Privacy settings saved.'
                        );
                    };
            }
        } else if (
            action === 'help'
        ) {
            showInfoModal({
                title:
                    'Help & Support',

                icon:
                    'ti-help-circle',

                html: `
                    <p>
                        <strong>
                            How do I confirm
                            a session?
                        </strong>
                        <br>
                        Select Confirm Session
                        and approve the
                        confirmation dialog.
                    </p>

                    <p>
                        <strong>
                            How do I contact
                            support?
                        </strong>
                        <br>
                        Email
                        hello@peertutor.co
                        or use the Contact Us
                        page.
                    </p>

                    <p>
                        <strong>
                            Important:
                        </strong>
                        This PeerTutor MVP uses
                        simulated authentication
                        and payment features.
                    </p>
                `
            });
        } else if (
            action === 'logout'
        ) {
            showConfirm({
                title:
                    'Sign out of PeerTutor?',

                message:
                    'You will return to the homepage.',

                confirmText:
                    'Sign Out',

                tone:
                    'danger',

                onConfirm: () => {
                    showToast(
                        'Signed out successfully.'
                    );

                    setTimeout(() => {
                        window.location.href =
                            'index.html';
                    }, 500);
                }
            });
        }
    }

    function restoreState() {
        Object.entries(
            state.processedRequests
        ).forEach(
            ([id, status]) => {
                const card =
                    document.getElementById(
                        id
                    );

                if (!card) {
                    return;
                }

                const config = {
                    confirmed: [
                        'confirmed',
                        'Confirmed',
                        'ti-circle-check'
                    ],

                    rejected: [
                        'rejected',
                        'Declined',
                        'ti-circle-x'
                    ],

                    rescheduled: [
                        'rescheduled',
                        'New Time Sent',
                        'ti-calendar-event'
                    ]
                }[status];

                if (config) {
                    markRequest(
                        card,
                        ...config
                    );
                }
            }
        );

        state.customUpcoming.forEach(
            item => {
                if (
                    !state.removedUpcoming.includes(
                        item.id
                    )
                ) {
                    renderUpcomingSession(
                        item
                    );
                }
            }
        );

        state.removedUpcoming.forEach(
            id => {
                const list =
                    $('#upcoming-sessions-list');

                const row =
                    list
                        ? $(
                            `[data-session-id="${id}"]`,
                            list
                        )
                        : null;

                if (row) {
                    row.remove();
                }
            }
        );

        state.completedSessions.forEach(
            item => {
                const historyList =
                    $('#history-sessions-list');

                if (
                    !historyList ||
                    $(
                        `[data-session-id="${item.id}"]`,
                        historyList
                    )
                ) {
                    return;
                }

                const historyRow =
                    document.createElement(
                        'div'
                    );

                historyRow.className =
                    'tutor-session-row';

                historyRow.dataset.sessionId =
                    item.id;

                historyRow.innerHTML = `
                    <div class="tsr-left">
                        <div
                            class="tsr-avatar"
                            style="${escapeHtml(
                    item.avatarStyle
                )}"
                        >
                            ${escapeHtml(
                    item.initials
                )}
                        </div>

                        <div>
                            <div
                                class="tsr-title-row"
                            >
                                <h3>
                                    ${escapeHtml(
                    item.subject
                )}
                                </h3>

                                <span
                                    class="tstatus ${item.status
                    }"
                                >
                                    <i
                                        class="ti ${item.status ===
                        'completed'
                        ? 'ti-check'
                        : 'ti-x'
                    }"
                                    ></i>

                                    ${item.status ===
                        'completed'
                        ? 'Completed'
                        : 'Cancelled'
                    }
                                </span>
                            </div>

                            <p
                                class="tsr-student"
                            >
                                with
                                ${escapeHtml(
                        item.student
                    )}
                            </p>

                            <div
                                class="tsr-meta"
                            >
                                ${item.meta
                        .map(
                            (
                                text,
                                index
                            ) => `
                                            <span>
                                                <i
                                                    class="ti ${index ===
                                    0
                                    ? 'ti-calendar'
                                    : index ===
                                        1
                                        ? 'ti-clock'
                                        : 'ti-currency-dollar'
                                }"
                                                ></i>

                                                ${escapeHtml(
                                    text
                                )}
                                            </span>
                                        `
                        )
                        .join('')}
                            </div>
                        </div>
                    </div>

                    <div class="tsr-actions">
                        ${item.status ===
                        'completed'
                        ? `
                                    <button
                                        class="btn-view-notes"
                                        type="button"
                                    >
                                        <i
                                            class="ti ti-notes"
                                        ></i>
                                        Session Notes
                                    </button>
                                `
                        : `
                                    <span
                                        style="
                                            font-size:13px;
                                            color:#aaa;
                                        "
                                    >
                                        Cancelled by tutor
                                    </span>
                                `
                    }
                    </div>
                `;

                historyList.prepend(
                    historyRow
                );
            }
        );

        updatePendingCount();
    }

    function assignExistingSessionIds() {
        $$('#upcoming-sessions-list .tutor-session-row')
            .forEach(
                (row, index) => {
                    if (
                        !row.dataset.sessionId
                    ) {
                        row.dataset.sessionId =
                            `existing-upcoming-${index + 1
                            }`;
                    }

                    if (
                        state.removedUpcoming.includes(
                            row.dataset.sessionId
                        )
                    ) {
                        row.remove();
                    }
                }
            );

        $$('#history-sessions-list .tutor-session-row')
            .forEach(
                (row, index) => {
                    if (
                        !row.dataset.sessionId
                    ) {
                        row.dataset.sessionId =
                            `existing-history-${index + 1
                            }`;
                    }
                }
            );
    }

    function bindEvents() {
        document.addEventListener(
            'click',
            event => {
                const closeButton =
                    event.target.closest(
                        '[data-close-info]'
                    );

                if (closeButton) {
                    closeInfoModal();
                    return;
                }

                const tabLink =
                    event.target.closest(
                        '[data-dashboard-tab]'
                    );

                if (tabLink) {
                    event.preventDefault();

                    switchTab(
                        tabLink.dataset
                            .dashboardTab
                    );

                    const dropdown =
                        $('#user-dropdown');

                    if (dropdown) {
                        dropdown.classList.remove(
                            'open'
                        );
                    }

                    return;
                }

                const actionLink =
                    event.target.closest(
                        '[data-dashboard-action]'
                    );

                if (actionLink) {
                    event.preventDefault();

                    openDashboardAction(
                        actionLink.dataset
                            .dashboardAction
                    );

                    const dropdown =
                        $('#user-dropdown');

                    if (dropdown) {
                        dropdown.classList.remove(
                            'open'
                        );
                    }

                    return;
                }

                const startButton =
                    event.target.closest(
                        '.btn-join-session, .btn-complete-session'
                    );

                if (startButton) {
                    startOrCompleteMeeting(
                        startButton
                    );

                    return;
                }

                const messageButton =
                    event.target.closest(
                        '.btn-message-stu'
                    );

                if (messageButton) {
                    openMessage(
                        messageButton.closest(
                            '.tutor-session-row'
                        )
                    );

                    return;
                }

                const cancelButton =
                    event.target.closest(
                        '.btn-cancel-stu'
                    );

                if (cancelButton) {
                    cancelUpcoming(
                        cancelButton.closest(
                            '.tutor-session-row'
                        )
                    );

                    return;
                }

                const notesButton =
                    event.target.closest(
                        '.btn-view-notes'
                    );

                if (notesButton) {
                    viewNotes(
                        notesButton.closest(
                            '.tutor-session-row'
                        )
                    );

                    return;
                }

                const exportButton =
                    event.target.closest(
                        '.btn-export'
                    );

                if (exportButton) {
                    exportEarnings();
                    return;
                }

                const helpfulButton =
                    event.target.closest(
                        '.btn-review-helpful'
                    );

                if (helpfulButton) {
                    const card =
                        helpfulButton.closest(
                            '.review-card'
                        );

                    if (!card) {
                        return;
                    }

                    const id =
                        card.dataset.reviewId;

                    state.helpfulReviews[
                        id
                    ] =
                        (
                            state
                                .helpfulReviews[
                            id
                            ] || 0
                        ) + 1;

                    const countElement =
                        $('span', helpfulButton);

                    if (countElement) {
                        countElement.textContent =
                            state
                                .helpfulReviews[
                            id
                            ];
                    }

                    helpfulButton.disabled =
                        true;

                    saveState();

                    showToast(
                        'Marked as helpful.'
                    );

                    return;
                }

                const replyButton =
                    event.target.closest(
                        '.btn-review-reply'
                    );

                if (replyButton) {
                    replyToReview(
                        replyButton.closest(
                            '.review-card'
                        )
                    );
                }
            }
        );

        const infoOverlay =
            $('#td-info-overlay');

        if (infoOverlay) {
            infoOverlay.addEventListener(
                'click',
                event => {
                    if (
                        event.target ===
                        infoOverlay
                    ) {
                        closeInfoModal();
                    }
                }
            );
        }

        const modalOverlay =
            $('#modal-overlay');

        if (modalOverlay) {
            modalOverlay.addEventListener(
                'click',
                event => {
                    if (
                        event.target ===
                        modalOverlay
                    ) {
                        window.tdCloseModal();
                    }
                }
            );
        }

        document.addEventListener(
            'keydown',
            event => {
                if (
                    event.key === 'Escape'
                ) {
                    window.tdCloseModal();
                    closeInfoModal();
                }
            }
        );

        const footerForm =
            $('.footer-form');

        if (footerForm) {
            footerForm.addEventListener(
                'submit',
                event => {
                    event.preventDefault();

                    const input =
                        $(
                            'input[type="email"]',
                            footerForm
                        );

                    if (
                        !input ||
                        !input.value ||
                        !input.checkValidity()
                    ) {
                        showToast(
                            'Please enter a valid email address.',
                            'error'
                        );

                        return;
                    }

                    input.value = '';

                    showToast(
                        'Subscription confirmed.'
                    );
                }
            );
        }
    }

    document.addEventListener(
        'DOMContentLoaded',
        () => {
            assignExistingSessionIds();
            initializeReviewActions();
            restoreState();
            bindEvents();
        }
    );
})();