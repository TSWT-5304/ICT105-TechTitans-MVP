document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".policy-section");
    const navigationLinks = document.querySelectorAll(".policy-nav-link");
    const backToTopButton = document.getElementById("back-to-top");
    const subscribeForm = document.getElementById(
        "policy-subscribe-form"
    );
    const subscribeEmail = document.getElementById(
        "policy-subscribe-email"
    );
    const subscribeMessage = document.getElementById(
        "subscribe-message"
    );

    /*
     * Highlight the table-of-contents link for the section
     * currently visible on the page.
     */
    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                const currentSectionId = entry.target.id;

                navigationLinks.forEach(function (link) {
                    const linkedSection = link
                        .getAttribute("href")
                        .replace("#", "");

                    link.classList.toggle(
                        "active",
                        linkedSection === currentSectionId
                    );
                });
            });
        },
        {
            root: null,
            rootMargin: "-25% 0px -65% 0px",
            threshold: 0
        }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });

    /*
     * Smooth-scroll to a selected policy section.
     */
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);
        });
    });

    /*
     * Display or hide the back-to-top button.
     */
    function updateBackToTopButton() {
        if (!backToTopButton) {
            return;
        }

        backToTopButton.classList.toggle(
            "visible",
            window.scrollY > 500
        );
    }

    window.addEventListener("scroll", updateBackToTopButton, {
        passive: true
    });

    updateBackToTopButton();

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /*
     * Demonstration-only newsletter subscription.
     * No real email is transmitted or stored.
     */
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailValue = subscribeEmail.value.trim();

            if (!emailValue) {
                subscribeMessage.textContent =
                    "Please enter your email address.";

                subscribeMessage.style.color = "#dc2626";
                return;
            }

            if (!subscribeEmail.checkValidity()) {
                subscribeMessage.textContent =
                    "Please enter a valid email address.";

                subscribeMessage.style.color = "#dc2626";
                return;
            }

            subscribeMessage.textContent =
                "Thank you. Subscription is simulated for this MVP.";

            subscribeMessage.style.color = "#16a34a";
            subscribeForm.reset();
        });
    }

    /*
     * If the page opens with a section ID in the URL,
     * move to that section after the layout has loaded.
     */
    if (window.location.hash) {
        const linkedSection = document.querySelector(
            window.location.hash
        );

        if (linkedSection) {
            window.setTimeout(function () {
                linkedSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        }
    }
});