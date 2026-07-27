"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* =====================================
       PAGE ELEMENTS
    ===================================== */

    const searchInput =
        document.getElementById("search-input");

    const majorInput =
        document.getElementById("subject-filter");

    const performanceInput =
        document.getElementById("performance-filter");

    const responseTimeInput =
        document.getElementById("response-time-filter");

    const tutorsGrid =
        document.getElementById("tutors-grid");

    const resultsCount =
        document.getElementById("count");

    const noResults =
        document.getElementById("no-results");

    const clearAllButton =
        document.getElementById("clear-filters");

    /* Custom filter containers */

    const majorFilter =
        document.getElementById("major-filter");

    const performanceFilter =
        document.getElementById(
            "performance-filter-wrap"
        );

    const responseFilter =
        document.getElementById("response-filter");

    /* Price filter elements */

    const priceFilter =
        document.getElementById("price-filter");

    const priceToggle =
        document.getElementById(
            "price-filter-toggle"
        );

    const pricePanel =
        document.getElementById(
            "price-filter-panel"
        );

    const priceLabel =
        document.getElementById(
            "price-filter-label"
        );

    const priceCloseButton =
        document.getElementById(
            "price-panel-close"
        );

    const clearPriceButton =
        document.getElementById(
            "clear-price-filter"
        );

    const priceOptions =
        document.querySelectorAll(
            ".price-option"
        );

    /*
     * Stop the script if the required
     * Browse Tutors elements are missing.
     */
    if (
        !searchInput ||
        !majorInput ||
        !performanceInput ||
        !responseTimeInput ||
        !tutorsGrid ||
        !resultsCount
    ) {
        return;
    }

    /*
     * Store the tutor cards once so they can
     * be filtered and sorted repeatedly.
     */
    const tutorCards = Array.from(
        tutorsGrid.querySelectorAll(".browse-card")
    );

    /*
     * null means no price range is selected.
     */
    let minimumPrice = null;
    let maximumPrice = null;

    /* =====================================
       GENERAL HELPERS
    ===================================== */

    /*
     * Read a numeric data attribute.
     *
     * Examples:
     * getNumber(card, "price")
     * getNumber(card, "reviews")
     * getNumber(card, "responseMinutes")
     */
    function getNumber(card, propertyName) {
        return (
            Number(card.dataset[propertyName]) || 0
        );
    }

    /*
     * Close all dropdown panels except the
     * panel supplied as exceptPanel.
     */
    function closeAllPanels(exceptPanel = null) {
        document
            .querySelectorAll(
                ".custom-filter-panel"
            )
            .forEach(function (panel) {
                if (panel === exceptPanel) {
                    return;
                }

                panel.hidden = true;

                const container =
                    panel.closest(
                        ".custom-filter"
                    );

                const toggle =
                    container?.querySelector(
                        ".custom-filter-toggle"
                    );

                if (toggle) {
                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            });
    }

    /* =====================================
       CUSTOM PILL FILTER SETUP
    ===================================== */

    /*
     * This function controls both:
     * - Major filter
     * - Performance filter
     * - Response-time filter
     */
    function setupCustomFilter(
        container,
        hiddenInput,
        defaultValue
    ) {
        if (!container || !hiddenInput) {
            return;
        }

        const toggle =
            container.querySelector(
                ".custom-filter-toggle"
            );

        const label =
            container.querySelector(
                ".custom-filter-label"
            );

        const panel =
            container.querySelector(
                ".custom-filter-panel"
            );

        const closeButton =
            container.querySelector(
                ".custom-filter-close"
            );

        const options =
            container.querySelectorAll(
                ".custom-filter-option"
            );

        if (!toggle || !label || !panel) {
            return;
        }

        function openPanel() {
            closeAllPanels(panel);

            panel.hidden = false;

            toggle.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        function closePanel() {
            panel.hidden = true;

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        toggle.addEventListener(
            "click",
            function () {
                if (panel.hidden) {
                    openPanel();
                } else {
                    closePanel();
                }
            }
        );

        if (closeButton) {
            closeButton.addEventListener(
                "click",
                closePanel
            );
        }

        options.forEach(function (option) {
            option.addEventListener(
                "click",
                function () {
                    /*
                     * Save the option value inside
                     * the hidden input.
                     */
                    hiddenInput.value =
                        option.dataset.value;

                    /*
                     * Show the selected option on
                     * the main filter button.
                     */
                    label.textContent =
                        option.dataset.label ||
                        option.textContent.trim();

                    /*
                     * Remove the active style from
                     * all other pills.
                     */
                    options.forEach(
                        function (item) {
                            item.classList.remove(
                                "active"
                            );
                        }
                    );

                    option.classList.add("active");

                    /*
                     * Highlight the main filter button
                     * only when it is not using its
                     * default value.
                     */
                    toggle.classList.toggle(
                        "active",
                        hiddenInput.value !==
                        defaultValue
                    );

                    closePanel();
                    filterTutors();
                }
            );
        });
    }

    /*
     * Activate each custom filter.
     */
    setupCustomFilter(
        majorFilter,
        majorInput,
        ""
    );

    setupCustomFilter(
        performanceFilter,
        performanceInput,
        "rated"
    );

    setupCustomFilter(
        responseFilter,
        responseTimeInput,
        ""
    );

    /* =====================================
       PRICE FILTER
    ===================================== */

    function openPricePanel() {
        if (!pricePanel || !priceToggle) {
            return;
        }

        closeAllPanels(pricePanel);

        pricePanel.hidden = false;

        priceToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    function closePricePanel() {
        if (!pricePanel || !priceToggle) {
            return;
        }

        pricePanel.hidden = true;

        priceToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    function togglePricePanel() {
        if (!pricePanel) {
            return;
        }

        if (pricePanel.hidden) {
            openPricePanel();
        } else {
            closePricePanel();
        }
    }

    /*
     * Select one price range.
     */
    function selectPriceRange(option) {
        minimumPrice =
            Number(option.dataset.minPrice);

        maximumPrice =
            Number(option.dataset.maxPrice);

        priceOptions.forEach(
            function (button) {
                button.classList.remove("active");
            }
        );

        option.classList.add("active");

        if (priceLabel) {
            priceLabel.textContent =
                option.textContent.trim();
        }

        if (priceToggle) {
            priceToggle.classList.add("active");
        }

        closePricePanel();
        filterTutors();
    }

    /*
     * Remove the selected price range.
     */
    function clearPriceFilter() {
        minimumPrice = null;
        maximumPrice = null;

        priceOptions.forEach(
            function (option) {
                option.classList.remove("active");
            }
        );

        if (priceLabel) {
            priceLabel.textContent =
                "Price Range";
        }

        if (priceToggle) {
            priceToggle.classList.remove("active");
        }

        closePricePanel();
        filterTutors();
    }

    if (priceToggle) {
        priceToggle.addEventListener(
            "click",
            togglePricePanel
        );
    }

    if (priceCloseButton) {
        priceCloseButton.addEventListener(
            "click",
            closePricePanel
        );
    }

    if (clearPriceButton) {
        clearPriceButton.addEventListener(
            "click",
            clearPriceFilter
        );
    }

    priceOptions.forEach(function (option) {
        option.addEventListener(
            "click",
            function () {
                selectPriceRange(option);
            }
        );
    });

    /* =====================================
       PERFORMANCE SORTING
    ===================================== */

    function sortTutorCards(cards) {
        const selectedSort =
            performanceInput.value;

        return [...cards].sort(function (
            firstCard,
            secondCard
        ) {
            /*
             * Most Sessions
             */
            if (selectedSort === "sessions") {
                return (
                    getNumber(
                        secondCard,
                        "sessions"
                    ) -
                    getNumber(
                        firstCard,
                        "sessions"
                    )
                );
            }

            /*
             * Most Reviews
             */
            if (selectedSort === "reviews") {
                return (
                    getNumber(
                        secondCard,
                        "reviews"
                    ) -
                    getNumber(
                        firstCard,
                        "reviews"
                    )
                );
            }

            /*
             * Highest Rated
             *
             * When two tutors have the same
             * rating, use reviews as a tie-breaker.
             */
            return (
                getNumber(
                    secondCard,
                    "rating"
                ) -
                getNumber(
                    firstCard,
                    "rating"
                ) ||
                getNumber(
                    secondCard,
                    "reviews"
                ) -
                getNumber(
                    firstCard,
                    "reviews"
                )
            );
        });
    }

    /* =====================================
       RESPONSE-TIME FILTERING
    ===================================== */

    function matchesResponseTime(
        responseMinutes,
        selectedRange
    ) {
        /*
         * Empty means All Response Times.
         */
        if (selectedRange === "") {
            return true;
        }

        /*
         * 15–30 minutes includes both
         * 15 and 30.
         */
        if (selectedRange === "15-30") {
            return (
                responseMinutes >= 15 &&
                responseMinutes <= 30
            );
        }

        /*
         * Above 30 minutes up to and
         * including 45 minutes.
         */
        if (selectedRange === "30-45") {
            return (
                responseMinutes > 30 &&
                responseMinutes <= 45
            );
        }

        /*
         * Above 45 minutes up to and
         * including 60 minutes.
         */
        if (selectedRange === "45-60") {
            return (
                responseMinutes > 45 &&
                responseMinutes <= 60
            );
        }

        return true;
    }

    /* =====================================
       MAIN FILTERING FUNCTION
    ===================================== */

    function filterTutors() {
        const searchQuery =
            searchInput.value
                .trim()
                .toLowerCase();

        const selectedMajor =
            majorInput.value;

        const selectedResponseTime =
            responseTimeInput.value;

        const sortedCards =
            sortTutorCards(tutorCards);

        let visibleCount = 0;

        sortedCards.forEach(function (card) {
            const searchableText =
                card.textContent.toLowerCase();

            const tutorMajor =
                card.dataset.major || "";

            const tutorPrice =
                getNumber(card, "price");

            const tutorResponseMinutes =
                getNumber(
                    card,
                    "responseMinutes"
                );

            /*
             * Search by name, subject or
             * any other text in the card.
             */
            const matchesSearch =
                searchQuery === "" ||
                searchableText.includes(
                    searchQuery
                );

            /*
             * Major filtering.
             */
            const matchesMajor =
                selectedMajor === "" ||
                tutorMajor === selectedMajor;

            /*
             * Price-range filtering.
             */
            const noPriceSelected =
                minimumPrice === null ||
                maximumPrice === null;

            const matchesPrice =
                noPriceSelected ||
                (
                    tutorPrice >= minimumPrice &&
                    tutorPrice <= maximumPrice
                );

            /*
             * Response-time filtering.
             */
            const matchesResponse =
                matchesResponseTime(
                    tutorResponseMinutes,
                    selectedResponseTime
                );

            /*
             * A tutor must satisfy every
             * selected filter.
             */
            const shouldDisplay =
                matchesSearch &&
                matchesMajor &&
                matchesPrice &&
                matchesResponse;

            card.hidden = !shouldDisplay;

            /*
             * Appending each card places it
             * in its correct sorted position.
             */
            tutorsGrid.appendChild(card);

            if (shouldDisplay) {
                visibleCount += 1;
            }
        });

        /*
         * Update the results counter.
         */
        resultsCount.textContent =
            visibleCount;

        /*
         * Show the no-results message when
         * no tutors match the filters.
         */
        if (noResults) {
            noResults.hidden =
                visibleCount !== 0;
        }
    }

    /* =====================================
       RESET A CUSTOM FILTER
    ===================================== */

    function resetCustomFilter(
        container,
        hiddenInput,
        defaultValue,
        defaultLabel
    ) {
        if (!container || !hiddenInput) {
            return;
        }

        const label =
            container.querySelector(
                ".custom-filter-label"
            );

        const toggle =
            container.querySelector(
                ".custom-filter-toggle"
            );

        const options =
            container.querySelectorAll(
                ".custom-filter-option"
            );

        const panel =
            container.querySelector(
                ".custom-filter-panel"
            );

        hiddenInput.value = defaultValue;

        if (label) {
            label.textContent = defaultLabel;
        }

        if (toggle) {
            toggle.classList.remove("active");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        options.forEach(function (option) {
            option.classList.toggle(
                "active",
                option.dataset.value ===
                defaultValue
            );
        });

        if (panel) {
            panel.hidden = true;
        }
    }

    /* =====================================
       CLEAR ALL FILTERS
    ===================================== */

    function clearAllFilters() {
        /*
         * Clear search.
         */
        searchInput.value = "";

        /*
         * Reset major.
         */
        resetCustomFilter(
            majorFilter,
            majorInput,
            "",
            "All Majors"
        );

        /*
         * Reset sorting.
         */
        resetCustomFilter(
            performanceFilter,
            performanceInput,
            "rated",
            "Highest Rated"
        );

        /*
         * Reset response time.
         */
        resetCustomFilter(
            responseFilter,
            responseTimeInput,
            "",
            "Response Time"
        );

        /*
         * Reset price.
         */
        minimumPrice = null;
        maximumPrice = null;

        priceOptions.forEach(
            function (option) {
                option.classList.remove("active");
            }
        );

        if (priceLabel) {
            priceLabel.textContent =
                "Price Range";
        }

        if (priceToggle) {
            priceToggle.classList.remove(
                "active"
            );

            priceToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        if (pricePanel) {
            pricePanel.hidden = true;
        }

        filterTutors();
        searchInput.focus();
    }

    /* =====================================
       EVENT LISTENERS
    ===================================== */

    /*
     * Search immediately while the user types.
     */
    searchInput.addEventListener(
        "input",
        filterTutors
    );

    /*
     * Clear every filter.
     */
    if (clearAllButton) {
        clearAllButton.addEventListener(
            "click",
            clearAllFilters
        );
    }

    /*
     * Close all filter panels when clicking
     * outside a filter.
     */
    document.addEventListener(
        "click",
        function (event) {
            const clickedFilter =
                event.target.closest(
                    ".custom-filter"
                );

            if (!clickedFilter) {
                closeAllPanels();
            }
        }
    );

    /*
     * Close every filter with Escape.
     */
    document.addEventListener(
        "keydown",
        function (event) {
            if (event.key === "Escape") {
                closeAllPanels();
            }
        }
    );

    /*
     * Apply the default Highest Rated order
     * when the page first opens.
     */
    filterTutors();
});