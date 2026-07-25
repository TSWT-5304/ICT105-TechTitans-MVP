# Prototype Testing Notes

## Test Environment
- Prototype link or folder: `/prototype/`
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
| T-07 | Dashboard Metrics | Open the Power BI dashboard. | Dashboard displays accurate metrics including Total Requests, Pending Requests, Completion Rate, Total Activity Events, Total Revenue, and Average Processing Time. | Dashboard metrics matched the imported CSV datasets and displayed correctly. | Passed | Dashboard updates only when the dataset is refreshed manually. | Connect the dashboard to a live data source for automatic updates. |

## Summary of Issues
List the main issues found during testing.

## Improvements Completed During Lab 11
List improvements completed and GitHub commit references.
