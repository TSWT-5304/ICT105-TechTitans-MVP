"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const launcher =
        document.getElementById("chat-launcher");

    const chatWindow =
        document.getElementById("chat-window");

    const minimizeButton =
        document.getElementById("chat-minimize");

    const closeButton =
        document.getElementById("chat-close");

    const notification =
        document.getElementById("chat-notification");

    const chatForm =
        document.getElementById("chat-form");

    const chatInput =
        document.getElementById("chat-input");

    const sendButton =
        document.getElementById("chat-send");

    const messages =
        document.getElementById("chat-messages");

    const typingIndicator =
        document.getElementById("chat-typing");

    const suggestions =
        document.getElementById("chat-suggestions");

    if (
        !launcher ||
        !chatWindow ||
        !chatForm ||
        !chatInput ||
        !messages
    ) {
        return;
    }

    let supportReplyTimer = null;

    /* =====================================
       OPEN AND CLOSE
    ===================================== */

    function openChat() {
        chatWindow.hidden = false;
        launcher.hidden = true;

        launcher.setAttribute(
            "aria-expanded",
            "true"
        );

        if (notification) {
            notification.hidden = true;
        }

        window.setTimeout(function () {
            chatInput.focus();
            scrollToLatestMessage();
        }, 100);
    }

    function closeChat() {
        chatWindow.hidden = true;
        launcher.hidden = false;

        launcher.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    launcher.addEventListener(
        "click",
        openChat
    );

    if (minimizeButton) {
        minimizeButton.addEventListener(
            "click",
            closeChat
        );
    }

    if (closeButton) {
        closeButton.addEventListener(
            "click",
            closeChat
        );
    }

    /* =====================================
       INPUT VALIDATION
    ===================================== */

    function updateSendButton() {
        const hasMessage =
            chatInput.value.trim() !== "";

        if (sendButton) {
            sendButton.disabled = !hasMessage;
        }
    }

    chatInput.addEventListener(
        "input",
        updateSendButton
    );

    /* =====================================
       MESSAGE HELPERS
    ===================================== */

    function getCurrentTime() {
        return new Intl.DateTimeFormat(
            "en",
            {
                hour: "numeric",
                minute: "2-digit"
            }
        ).format(new Date());
    }

    function scrollToLatestMessage() {
        messages.scrollTop =
            messages.scrollHeight;
    }

    function createUserMessage(messageText) {
        const messageRow =
            document.createElement("div");

        messageRow.className =
            "chat-message user-message";

        const messageContent =
            document.createElement("div");

        const bubble =
            document.createElement("div");

        bubble.className = "message-bubble";
        bubble.textContent = messageText;

        const time =
            document.createElement("span");

        time.className = "message-time";
        time.textContent = getCurrentTime();

        messageContent.appendChild(bubble);
        messageContent.appendChild(time);
        messageRow.appendChild(messageContent);
        messages.appendChild(messageRow);
    }

    function createSupportMessage(messageText) {
        const messageRow =
            document.createElement("div");

        messageRow.className =
            "chat-message support-message";

        const avatar =
            document.createElement("div");

        avatar.className = "message-avatar";

        const avatarIcon =
            document.createElement("i");

        avatarIcon.className = "ti ti-headset";

        avatar.appendChild(avatarIcon);

        const messageContent =
            document.createElement("div");

        const bubble =
            document.createElement("div");

        bubble.className = "message-bubble";
        bubble.textContent = messageText;

        const time =
            document.createElement("span");

        time.className = "message-time";
        time.textContent = getCurrentTime();

        messageContent.appendChild(bubble);
        messageContent.appendChild(time);

        messageRow.appendChild(avatar);
        messageRow.appendChild(messageContent);

        messages.appendChild(messageRow);
    }

    /* =====================================
       AUTOMATIC RESPONSES
    ===================================== */

    function getSupportResponse(message) {
        const text = message.toLowerCase();

        if (
            text.includes("find") &&
            text.includes("tutor")
        ) {
            return "You can use the Browse Tutors page to search by major, rating, price range, and response time. Select a tutor and click View Profile.";
        }

        if (
            text.includes("become") &&
            text.includes("tutor")
        ) {
            return "To become a tutor, create an account, select the Student Tutor role, and submit your tutor application for administrator approval.";
        }

        if (
            text.includes("payment") ||
            text.includes("pay") ||
            text.includes("refund")
        ) {
            return "For payment assistance, please check your Payment & Billing page. You can also send us your transaction reference, but never share your password or full card information.";
        }

        if (
            text.includes("price") ||
            text.includes("cost") ||
            text.includes("rate")
        ) {
            return "Tutor prices are displayed on each tutor card as an hourly rate. You can also use the Price Range filter to find tutors within your budget.";
        }

        if (
            text.includes("request") ||
            text.includes("book") ||
            text.includes("session")
        ) {
            return "Open a tutor’s profile and select the tutoring request option. Complete the subject, date, time, and learning details before submitting.";
        }

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {
            return "Hello! How can we help you with PeerTutor today?";
        }

        if (
            text.includes("thank")
        ) {
            return "You’re welcome! Please let us know if you need anything else.";
        }

        return "Thanks for your message. This prototype uses simulated live-chat responses. A PeerTutor support team member would assist you in the full system.";
    }

    function showTypingIndicator() {
        if (!typingIndicator) {
            return;
        }

        typingIndicator.hidden = false;
        scrollToLatestMessage();
    }

    function hideTypingIndicator() {
        if (typingIndicator) {
            typingIndicator.hidden = true;
        }
    }

    function sendSupportReply(userMessage) {
        showTypingIndicator();

        if (supportReplyTimer) {
            window.clearTimeout(
                supportReplyTimer
            );
        }

        supportReplyTimer =
            window.setTimeout(function () {
                hideTypingIndicator();

                const response =
                    getSupportResponse(
                        userMessage
                    );

                createSupportMessage(response);
                scrollToLatestMessage();
            }, 900);
    }

    /* =====================================
       SEND MESSAGE
    ===================================== */

    function sendMessage(messageText) {
        const cleanMessage =
            messageText.trim();

        if (cleanMessage === "") {
            return;
        }

        createUserMessage(cleanMessage);

        chatInput.value = "";
        updateSendButton();

        if (suggestions) {
            suggestions.hidden = true;
        }

        scrollToLatestMessage();
        sendSupportReply(cleanMessage);
    }

    chatForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            sendMessage(chatInput.value);
        }
    );

    /* =====================================
       SUGGESTED QUESTIONS
    ===================================== */

    document
        .querySelectorAll(".chat-suggestion")
        .forEach(function (button) {
            button.addEventListener(
                "click",
                function () {
                    const suggestedMessage =
                        button.dataset.message;

                    sendMessage(
                        suggestedMessage
                    );
                }
            );
        });

    /* =====================================
       KEYBOARD
    ===================================== */

    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Escape" &&
                !chatWindow.hidden
            ) {
                closeChat();
            }
        }
    );

    updateSendButton();
});