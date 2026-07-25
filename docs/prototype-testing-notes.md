# Prototype Testing Notes

## Test Environment
- Prototype link or folder: [`/prototype/`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/tree/8d76b82857b505cdbca8b82584efe47d3f816b73/prototype)
- Browser/device used: Google Chrome (Desktop), Microsoft Edge (Desktop)
- Tester role: Student, Tutor, and Administrator
- Test date: 25 July 2026

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Homepage | Open `index.html` | Homepage displays PeerTutor title, target users, project purpose, and navigation menu. | Homepage loaded correctly with navigation and main actions. | Passed | None | No action required. |
| T-02 | Submit Tutoring Request | Open `request-form.html`, complete the form, and submit. | Request form accepts input, validates required fields, and displays a confirmation message. | Form validation and confirmation message worked correctly. Data submission is simulated. | Passed | Data is not permanently stored after refresh. | Connect the form to `localStorage` or Google Sheets in future development. |
| T-03 | View Tutor List | Open `tutor-search.html`. | Tutor list displays available tutors with sample information. | Tutor list displayed correctly with sample data. | Passed | Sample data is static. | Connect tutor data to a dynamic data source in future development. |
| T-04 | Search and Filter Tutors | Enter keywords or select search/filter options. | Relevant tutors are displayed based on search criteria. | Basic search and filtering interface worked as expected. | Passed | Filtering logic can be improved for multiple criteria. | Enhance JavaScript filtering and add advanced search options. |
| T-05 | View Tutor Profile | Select a tutor from the tutor list. | Detailed tutor profile is displayed, including subject, experience, availability, and pricing. | Tutor profile page displayed correctly. | Passed | None | No action required. |
| T-06 | Admin Management | Open `admin-dashboard.html`, approve tutors, verify payments, and update request status. | Administrator can manage tutor approvals, payment verification, and request status through simulated actions. | Admin workflow functions correctly using simulated frontend interactions. | Passed | Changes are not permanently stored. | Integrate a backend database for persistent updates. |
| T-07 | Dashboard Metrics | Open Power BI dashboard | Dashboard displays accurate metrics including Total Requests, Pending Requests, Completion Rate, Total Activity Events, Total Revenue, and Average Processing Time. | Dashboard metrics matched the imported CSV datasets and displayed correctly. | Passed | Dashboard updates only when the dataset is refreshed manually. | Connect the dashboard to a live data source for automatic updates. |

## Summary of Issues
The prototype successfully demonstrates the main PeerTutor workflow; however, several limitations remain due to the frontend-only implementation.

- Data is currently simulated and is not permanently stored after refreshing the browser.
- Search and filtering support only basic functionality and can be enhanced.
- Administrative updates are simulated and are not connected to a backend database.
- Authentication and authorization are not implemented; user roles are demonstrated through separate prototype pages.
- The Power BI dashboard requires manual dataset refresh because it is connected to static CSV files.

## Improvements Completed During Lab 11
- Updated the **Feature Implementation Status** to reflect Sprint 2 progress and requirement traceability.
- Created a **Power BI dashboard** to visualize startup and product metrics.
- Prepared prototype datasets ([`prototype-records.csv`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/8d76b82857b505cdbca8b82584efe47d3f816b73/data/lab11_prototype_records.csv), [`activity-log.csv`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/8d76b82857b505cdbca8b82584efe47d3f816b73/data/lab11_activity_log.csv), and [`data-dictionary.csv`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/8d76b82857b505cdbca8b82584efe47d3f816b73/data/lab11_data_dictionary.csv)) for analytics.
- Added startup metrics documentation ([`startup-metrics.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/8d76b82857b505cdbca8b82584efe47d3f816b73/docs/startup-metrics.md)).
- Improved project documentation, screenshots, and README for Sprint 2.
- Verified that prototype features remain aligned with the approved [`system-requirements.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/8d76b82857b505cdbca8b82584efe47d3f816b73/docs/system-requirements.md) and MVP scope.

> **GitHub Commit Reference:** Sprint 2 implementation commits (Lab 11).
