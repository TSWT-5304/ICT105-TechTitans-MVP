/* ── Admin tab switching ── */
function switchTab(name, btn) {
    document.querySelectorAll('.admin-tab, .tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    btn.classList.add('active');

    const panel = document.getElementById('tab-' + name);

    if (panel) {
        panel.classList.add('active');
    }
}


/* ── Admin table search ── */
function filterTable(input, tableId) {
    const query = input.value.toLowerCase();

    document
        .querySelectorAll('#' + tableId + ' tbody tr')
        .forEach(row => {
            row.style.display =
                row.innerText.toLowerCase().includes(query)
                    ? ''
                    : 'none';
        });
}


/* ── Tutor application actions ── */
function approveApp(btn) {
    const card = btn.closest('.app-card');

    if (!card) return;

    card.style.opacity = '0.4';
    card.style.pointerEvents = 'none';

    btn.textContent = '✓ Approved';
    btn.style.background = '#dcfce7';
    btn.style.color = '#16a34a';

    updateApplicationBadge(-1);
}


function rejectApp(btn) {
    const card = btn.closest('.app-card');

    if (!card) return;

    card.style.opacity = '0.4';
    card.style.pointerEvents = 'none';

    btn.textContent = '✗ Rejected';

    updateApplicationBadge(-1);
}


function updateApplicationBadge(delta) {
    const applicationsTab =
        document.querySelector(
            '.admin-tab[onclick*="applications"]'
        );

    if (!applicationsTab) return;

    const badge =
        applicationsTab.querySelector('.tab-badge');

    if (!badge) return;

    const currentNumber =
        parseInt(badge.textContent, 10) || 0;

    badge.textContent =
        Math.max(0, currentNumber + delta);
}


/* ══════════════════════════════════════
   PAYOUT TAB SWITCHING
══════════════════════════════════════ */

function switchPayoutTab(name, button) {
    document
        .querySelectorAll('.payout-subtab')
        .forEach(tab => {
            tab.classList.remove('active');
        });

    document
        .querySelectorAll('.payout-subpanel')
        .forEach(panel => {
            panel.classList.remove('active');
        });

    if (button) {
        button.classList.add('active');
    }

    const selectedPanel =
        document.getElementById(
            'subpanel-' + name
        );

    if (selectedPanel) {
        selectedPanel.classList.add('active');
    }
}


/* ══════════════════════════════════════
   OPEN AND CLOSE PAYOUT FORM
══════════════════════════════════════ */

function openPayoutForm(
    name,
    earnings,
    commission,
    payout,
    key
) {
    const payoutForm =
        document.getElementById(
            'initiate-payout-card'
        );

    const tutorSelect =
        document.getElementById('ip-tutor');

    if (!payoutForm || !tutorSelect) return;

    tutorSelect.value = key;

    document.getElementById('ip-earnings').value =
        Number(earnings).toLocaleString();

    document.getElementById('ip-commission').value =
        Number(commission).toLocaleString();

    document.getElementById('ip-payout').value =
        Number(payout).toLocaleString();

    payoutForm.style.display = 'block';

    payoutForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


function closePayoutForm() {
    const payoutForm =
        document.getElementById(
            'initiate-payout-card'
        );

    if (payoutForm) {
        payoutForm.style.display = 'none';
    }
}


function cancelPayout() {
    closePayoutForm();
}


/* ── Update tutor payout amounts ── */
function updatePayoutForm() {
    const tutorSelect =
        document.getElementById('ip-tutor');

    if (!tutorSelect) return;

    const selectedTutor =
        tutorSelect.options[
        tutorSelect.selectedIndex
        ];

    if (!selectedTutor) return;

    document.getElementById('ip-earnings').value =
        Number(
            selectedTutor.dataset.earnings
        ).toLocaleString();

    document.getElementById('ip-commission').value =
        Number(
            selectedTutor.dataset.commission
        ).toLocaleString();

    document.getElementById('ip-payout').value =
        Number(
            selectedTutor.dataset.payout
        ).toLocaleString();
}


/* ── Change payout destination field ── */
function updateMethodFields() {
    const methodInput =
        document.getElementById('ip-method');

    const label =
        document.getElementById(
            'ip-method-label'
        );

    const input =
        document.getElementById(
            'ip-method-value'
        );

    if (!methodInput || !label || !input) {
        return;
    }

    const method = methodInput.value;

    if (method === 'PromptPay') {
        label.textContent =
            'PromptPay ID / Phone';

        input.placeholder =
            '081-234-5678';

    } else if (method === 'Bank Transfer') {
        label.textContent =
            'Bank Account Number';

        input.placeholder =
            'xxx-x-12345-x';

    } else {
        label.textContent =
            'TrueMoney Phone';

        input.placeholder =
            '081-234-5678';
    }

    input.value = '';
}


/* ══════════════════════════════════════
   PAYOUT DATA
══════════════════════════════════════ */

const PAYOUT_STORAGE_KEY =
    'peerTutorProcessingPayouts';

/*
 * Only two dynamic processing records are kept.
 * Therefore, after refresh, at least one of the
 * three tutors remains under Pending Payouts.
 */
const MAX_PROCESSING_PAYOUTS = 2;


/*
 * Default records are used when the page is opened
 * for the first time or when saved payout data is empty.
 */
const DEFAULT_PROCESSING_PAYOUTS = [
    {
        key: 'sarah',
        tutor: 'Sarah Lee',
        amount: '2,880',
        method: 'PromptPay',
        destination: '081-234-5678',
        reference: 'PT-PAY-0043',
        initiated: '2026-07-12T09:30:00.000Z',
        status: 'processing'
    },
    {
        key: 'kevin',
        tutor: 'Kevin Ong',
        amount: '2,475',
        method: 'Bank Transfer',
        destination: 'xxx-x-12345-x',
        reference: 'PT-PAY-0042',
        initiated: '2026-07-11T08:15:00.000Z',
        status: 'processing'
    }
];


const payoutData = {
    processing: []
};


/* ── Load payout records ── */
function loadPayoutData() {
    try {
        const savedPayouts =
            localStorage.getItem(
                PAYOUT_STORAGE_KEY
            );

        const parsedPayouts =
            savedPayouts
                ? JSON.parse(savedPayouts)
                : DEFAULT_PROCESSING_PAYOUTS;

        if (
            Array.isArray(parsedPayouts) &&
            parsedPayouts.length > 0
        ) {
            payoutData.processing =
                parsedPayouts.slice(
                    0,
                    MAX_PROCESSING_PAYOUTS
                );
        } else {
            payoutData.processing =
                DEFAULT_PROCESSING_PAYOUTS.map(
                    payout => ({ ...payout })
                );
        }

    } catch (error) {
        console.warn(
            'Saved payout data could not be loaded.',
            error
        );

        payoutData.processing =
            DEFAULT_PROCESSING_PAYOUTS.map(
                payout => ({ ...payout })
            );
    }
}


loadPayoutData();


/* ── Find next payout reference ── */
let payoutRefCounter =
    payoutData.processing.reduce(
        (highest, payout) => {
            const referenceNumber =
                Number(
                    String(
                        payout.reference || ''
                    ).replace(/\D/g, '')
                );

            return Math.max(
                highest,
                referenceNumber + 1
            );
        },
        44
    );


/* ── Save payout records ── */
function savePayoutData() {
    try {
        localStorage.setItem(
            PAYOUT_STORAGE_KEY,
            JSON.stringify(
                payoutData.processing
            )
        );

    } catch (error) {
        console.warn(
            'Payout data could not be saved.',
            error
        );
    }
}


/* ══════════════════════════════════════
   CONFIRM PAYOUT
══════════════════════════════════════ */

function confirmPayout() {
    const tutorSelect =
        document.getElementById('ip-tutor');

    if (!tutorSelect) return;

    const selectedTutor =
        tutorSelect.options[
        tutorSelect.selectedIndex
        ];

    if (!selectedTutor) return;

    const tutor =
        selectedTutor.text.trim();

    const tutorKey =
        tutorSelect.value;

    const amountInput =
        document.getElementById('ip-payout');

    const methodInput =
        document.getElementById('ip-method');

    const destinationInput =
        document.getElementById(
            'ip-method-value'
        );

    const confirmButton =
        document.querySelector(
            '#initiate-payout-card ' +
            '.btn-ip-confirm'
        );

    if (
        !amountInput ||
        !methodInput ||
        !destinationInput ||
        !confirmButton
    ) {
        return;
    }

    const amount =
        amountInput.value;

    const method =
        methodInput.value;

    const destination =
        destinationInput.value.trim();


    /* Check payment destination */
    if (!destination) {
        alert(
            'Please enter the tutor payment destination.'
        );

        destinationInput.focus();

        return;
    }


    /* Prevent duplicate processing payout */
    const alreadyProcessing =
        payoutData.processing.some(
            payout =>
                payout.key === tutorKey
        );

    if (alreadyProcessing) {
        alert(
            tutor +
            ' already has a payout in the Processing tab.'
        );

        return;
    }


    const reference =
        'PT-PAY-' +
        String(payoutRefCounter++)
            .padStart(4, '0');


    confirmButton.disabled = true;

    confirmButton.innerHTML =
        '<i class="ti ti-loader-2 ' +
        'payout-spinner"></i> Processing...';


    setTimeout(() => {
        const newPayout = {
            key: tutorKey,
            tutor: tutor,
            amount: amount,
            method: method,
            destination: destination,
            reference: reference,
            initiated:
                new Date().toISOString(),
            status: 'processing'
        };


        /*
         * Add the newest record and keep only
         * the two most recent processing payouts.
         */
        payoutData.processing.unshift(
            newPayout
        );

        payoutData.processing =
            payoutData.processing.slice(
                0,
                MAX_PROCESSING_PAYOUTS
            );


        savePayoutData();


        /*
         * Rebuild the payout tables so a tutor
         * removed by the two-record limit returns
         * to Pending Payouts immediately.
         */
        restoreProcessingPayouts();


        const modalTitle =
            document.getElementById(
                'pm-title'
            );

        const modalMessage =
            document.getElementById(
                'pm-message'
            );

        const modalReference =
            document.getElementById(
                'pm-ref'
            );


        if (modalTitle) {
            modalTitle.textContent =
                'Transfer Initiated!';
        }

        if (modalMessage) {
            modalMessage.textContent =
                '฿' +
                amount +
                ' for ' +
                tutor +
                ' was submitted via ' +
                method +
                '. It will remain in Processing ' +
                'until completion.';
        }

        if (modalReference) {
            modalReference.textContent =
                reference;
        }


        const modal =
            document.getElementById(
                'payout-modal-overlay'
            );

        if (modal) {
            modal.classList.add('active');
        }


        closePayoutForm();

        confirmButton.disabled = false;

        confirmButton.innerHTML =
            '<i class="ti ti-send"></i> ' +
            'Confirm Transfer';

    }, 700);
}


/* ══════════════════════════════════════
   PROCESSING PAYOUT TABLE
══════════════════════════════════════ */

function addProcessingPayout(payout) {
    const pendingRow =
        document.getElementById(
            'prow-' + payout.key
        );

    if (pendingRow) {
        pendingRow.style.display = 'none';
    }


    const tutorOption =
        document.querySelector(
            '#ip-tutor option[value="' +
            payout.key +
            '"]'
        );

    if (tutorOption) {
        tutorOption.disabled = true;
    }


    const processingTable =
        document.getElementById(
            'processing-tbody'
        );

    if (!processingTable) return;


    const existingRecord =
        processingTable.querySelector(
            '[data-reference="' +
            payout.reference +
            '"]'
        );

    if (existingRecord) return;


    const initials =
        payout.tutor
            .split(/\s+/)
            .map(part =>
                part.charAt(0)
            )
            .join('')
            .slice(0, 2)
            .toUpperCase();


    const initiatedDate =
        new Date(
            payout.initiated
        ).toLocaleDateString(
            'en-US',
            {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }
        );


    const row =
        document.createElement('tr');

    row.dataset.dynamicPayout = 'true';
    row.dataset.reference =
        payout.reference;


    row.innerHTML = `
        <td class="pt-tutor-cell">
            <div class="pt-avatar pt-avatar-processing">
                ${initials}
            </div>
            ${payout.tutor}
        </td>

        <td class="pt-amount">
            ฿${payout.amount}
        </td>

        <td>
            ${payout.method}
        </td>

        <td>
            ${initiatedDate}
        </td>

        <td>
            <span class="pt-status processing">
                Processing
            </span>

            <div class="processing-ref">
                ${payout.reference}
            </div>
        </td>
    `;


    processingTable.prepend(row);
}


/* ══════════════════════════════════════
   PENDING PAYOUT BADGE AND TOTALS
══════════════════════════════════════ */

function updatePendingPayoutInformation() {
    const pendingRows =
        Array.from(
            document.querySelectorAll(
                '#pending-tbody ' +
                'tr[id^="prow-"]'
            )
        ).filter(
            row =>
                row.style.display !== 'none'
        );


    const badge =
        document.getElementById(
            'payout-pending-badge'
        );

    if (badge) {
        badge.textContent =
            pendingRows.length;
    }


    const totals = {
        earnings: 0,
        commission: 0,
        payout: 0
    };


    pendingRows.forEach(row => {
        totals.earnings +=
            Number(
                row.cells[1]
                    .textContent
                    .replace(
                        /[^0-9.]/g,
                        ''
                    )
            ) || 0;

        totals.commission +=
            Number(
                row.cells[2]
                    .textContent
                    .replace(
                        /[^0-9.]/g,
                        ''
                    )
            ) || 0;

        totals.payout +=
            Number(
                row.cells[3]
                    .textContent
                    .replace(
                        /[^0-9.]/g,
                        ''
                    )
            ) || 0;
    });


    const formatBaht =
        value =>
            '฿' +
            value.toLocaleString();


    const earningsElement =
        document.getElementById(
            'pending-total-earnings'
        );

    const commissionElement =
        document.getElementById(
            'pending-total-commission'
        );

    const payoutElement =
        document.getElementById(
            'pending-total-payout'
        );


    if (earningsElement) {
        earningsElement.textContent =
            formatBaht(
                totals.earnings
            );
    }

    if (commissionElement) {
        commissionElement.textContent =
            formatBaht(
                totals.commission
            );
    }

    if (payoutElement) {
        payoutElement.textContent =
            formatBaht(
                totals.payout
            );
    }
}


/* ══════════════════════════════════════
   RESTORE PAYOUTS AFTER REFRESH
══════════════════════════════════════ */

function restoreProcessingPayouts() {
    const processingTable =
        document.getElementById(
            'processing-tbody'
        );

    if (!processingTable) return;


    /*
     * Remove only records created by JavaScript.
     * The original sample HTML rows stay unchanged.
     */
    processingTable
        .querySelectorAll(
            '[data-dynamic-payout="true"]'
        )
        .forEach(row => {
            row.remove();
        });


    /*
     * First show every original pending tutor.
     */
    document
        .querySelectorAll(
            '#pending-tbody ' +
            'tr[id^="prow-"]'
        )
        .forEach(row => {
            row.style.display = '';
        });


    /*
     * Enable every tutor option before applying
     * the current processing records.
     */
    document
        .querySelectorAll(
            '#ip-tutor option'
        )
        .forEach(option => {
            option.disabled = false;
        });


    /*
     * Reverse temporarily because prepend()
     * puts each restored item at the top.
     */
    [...payoutData.processing]
        .reverse()
        .forEach(payout => {
            addProcessingPayout(
                payout
            );
        });


    updatePendingPayoutInformation();
}


/* ── Restore data when the page opens ── */
if (document.readyState === 'loading') {
    document.addEventListener(
        'DOMContentLoaded',
        restoreProcessingPayouts
    );
} else {
    restoreProcessingPayouts();
}


/* ══════════════════════════════════════
   PAYOUT SUCCESS MODAL
══════════════════════════════════════ */

function closePayoutModal() {
    const modal =
        document.getElementById(
            'payout-modal-overlay'
        );

    if (modal) {
        modal.classList.remove('active');
    }
}


function viewProcessingPayouts() {
    closePayoutModal();

    const processingButton =
        document.querySelector(
            '[onclick*="' +
            "switchPayoutTab('processing'" +
            '"]'
        );

    if (processingButton) {
        switchPayoutTab(
            'processing',
            processingButton
        );
    }

    const payoutTab =
        document.getElementById(
            'tab-payouts'
        );

    if (payoutTab) {
        payoutTab.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


/* ══════════════════════════════════════
   STUDENT PAYMENTS TAB
══════════════════════════════════════ */

function filterPayments(status, btn) {
    document
        .querySelectorAll(
            '.sp-filter-tab'
        )
        .forEach(button => {
            button.classList.remove(
                'active'
            );
        });

    if (btn) {
        btn.classList.add('active');
    }

    document
        .querySelectorAll('.sp-row')
        .forEach(row => {
            row.style.display =
                status === 'all' ||
                    row.dataset.status === status
                    ? ''
                    : 'none';
        });
}


/* ── Search student payments ── */
function searchPayments(value) {
    const query =
        value.toLowerCase();

    document
        .querySelectorAll('.sp-row')
        .forEach(row => {
            row.style.display =
                row.innerText
                    .toLowerCase()
                    .includes(query)
                    ? ''
                    : 'none';
        });
}


/* ── Filter payment method ── */
function filterByMethod(method) {
    document
        .querySelectorAll('.sp-row')
        .forEach(row => {
            row.style.display =
                method === 'all' ||
                    row.dataset.method === method
                    ? ''
                    : 'none';
        });
}


/* ── Update payment status ── */
function updatePaymentStatus(
    id,
    newStatus
) {
    const row =
        document.querySelector(
            `.sp-row[data-id="${id}"]`
        );

    if (!row) return;


    row.dataset.status =
        newStatus;

    const statusBadge =
        row.querySelector(
            '.sp-status-badge'
        );

    if (statusBadge) {
        statusBadge.className =
            'sp-status-badge ' +
            newStatus;

        statusBadge.textContent =
            newStatus
                .charAt(0)
                .toUpperCase() +
            newStatus.slice(1);
    }


    const actions =
        row.querySelector(
            '.sp-actions'
        );

    if (actions) {
        if (
            newStatus === 'confirmed'
        ) {
            actions.innerHTML =
                '<button class="sp-btn-view" ' +
                `onclick="viewSlip('${id}')">` +
                '<i class="ti ti-eye"></i> ' +
                'View</button>';

        } else if (
            newStatus === 'failed'
        ) {
            actions.innerHTML =
                '<span style="color:#dc2626;">' +
                'Payment rejected</span>';
        }
    }


    updatePendingPaymentBadge();

    closeSlipModal();

    showPaymentToast(
        'Payment status updated to ' +
        newStatus +
        '.',
        newStatus === 'failed'
            ? 'error'
            : 'success'
    );
}


/* ── Update pending payment badge ── */
function updatePendingPaymentBadge() {
    const pendingRows =
        document.querySelectorAll(
            '.sp-row[data-status="pending"]'
        );

    const paymentTab =
        document.querySelector(
            '.admin-tab[onclick*="payments"]'
        );

    if (!paymentTab) return;

    const badge =
        paymentTab.querySelector(
            '.tab-badge'
        );

    if (badge) {
        badge.textContent =
            pendingRows.length;
    }
}


/* ── View payment slip ── */
function viewSlip(
    id,
    student,
    amount,
    method
) {
    const modal =
        document.getElementById(
            'slip-modal'
        );

    const overlay =
        document.getElementById(
            'slip-modal-overlay'
        );

    if (!modal || !overlay) return;


    const studentElement =
        document.getElementById(
            'sm-student'
        );

    const amountElement =
        document.getElementById(
            'sm-amount'
        );

    const methodElement =
        document.getElementById(
            'sm-method'
        );


    if (studentElement && student) {
        studentElement.textContent =
            student;
    }

    if (amountElement && amount) {
        amountElement.textContent =
            amount;
    }

    if (methodElement && method) {
        methodElement.textContent =
            method;
    }


    const confirmButton =
        document.getElementById(
            'btn-sm-confirm'
        );

    const rejectButton =
        document.getElementById(
            'btn-sm-reject'
        );


    if (confirmButton) {
        confirmButton.onclick =
            () =>
                updatePaymentStatus(
                    id,
                    'confirmed'
                );
    }

    if (rejectButton) {
        rejectButton.onclick =
            () =>
                updatePaymentStatus(
                    id,
                    'failed'
                );
    }


    overlay.classList.add('active');
    modal.classList.add('active');
}


/* ── Close payment slip modal ── */
function closeSlipModal() {
    const overlay =
        document.getElementById(
            'slip-modal-overlay'
        );

    const modal =
        document.getElementById(
            'slip-modal'
        );

    if (overlay) {
        overlay.classList.remove(
            'active'
        );
    }

    if (modal) {
        modal.classList.remove(
            'active'
        );
    }
}


/* ── Notify student ── */
function notifyStudent(id, name) {
    showPaymentToast(
        'Notification sent to ' +
        name +
        ' to resubmit payment.',
        'warn'
    );
}


/* ── Mock receipt download ── */
function downloadReceipt(id) {
    showPaymentToast(
        'Receipt downloaded successfully.',
        'success'
    );
}


/* ── Student payment toast ── */
function showPaymentToast(
    message,
    type = 'success'
) {
    const toast =
        document.getElementById(
            'sp-toast'
        );

    if (!toast) {
        alert(message);
        return;
    }

    const messageElement =
        document.getElementById(
            'sp-toast-msg'
        );

    const icons = {
        success: 'ti-circle-check',
        error: 'ti-circle-x',
        warn: 'ti-alert-circle'
    };

    toast.className =
        'sp-toast ' + type;

    const icon =
        toast.querySelector('.ti');

    if (icon) {
        icon.className =
            'ti ' +
            (
                icons[type] ||
                'ti-circle-check'
            );
    }

    if (messageElement) {
        messageElement.textContent =
            message;
    }

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}


/* ── Initialize payment badge ── */
if (document.readyState === 'loading') {
    document.addEventListener(
        'DOMContentLoaded',
        updatePendingPaymentBadge
    );
} else {
    updatePendingPaymentBadge();
}