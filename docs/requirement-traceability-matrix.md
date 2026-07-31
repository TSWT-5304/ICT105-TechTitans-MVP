# Requirement Traceability Matrix

| Evidence ID | Problem Pattern | Requirement ID | User Story ID | MVP Feature | Prototype Screen/Module | Final Screenshot | Status |
|---|---|---|---|---|---|---|---|
| E01 | Students cannot immediately understand PeerTutor’s purpose or how to begin finding a tutor. | FR-01 | US-01 | F-01 Homepage | Homepage and Landing Page | `screenshots/homepage.png` | Completed |
| E02 | Students and tutors need complete and understandable pathways instead of disconnected actions. | FR-02 | US-02, US-04–US-15 | F-02–F-14, F-17–F-19 | Role Selection, Student Workflow, Tutor Workflow, Login, and Dashboards | `screenshots/demo-flow.png` | Completed |
| E03 | Students and tutors need structured forms to submit tutoring requests, applications, and reviews. | FR-03 | US-04, US-08, US-09 | F-04 Tutoring Request Form, F-08 Tutor Application, F-10 Reviews | Tutoring Request Form, Tutor Registration Form, and Review Form | `screenshots/request-form.png`<br>`screenshots/tutor-registration.png` | Completed |
| E04 | Tutor applications, tutoring requests, payments, and platform records must be stored and retrievable. | FR-04 | US-09, US-10 | F-04 Tutoring Request, F-08 Tutor Application, F-11 Payment | Local Storage, JSON, JavaScript Sample Data, and Record Management | `screenshots/record-list.png` | Completed |
| E05 | Users need organized lists instead of scattered tutor, request, user, and payment information. | FR-05 | US-10, US-11, US-13 | F-02 Tutor Listing, F-05 Student Dashboard, F-06 Tutor Dashboard, F-07 Admin Dashboard | Tutor Listing, Incoming Requests, User List, and Platform Records | `screenshots/tutor-search.png`<br>`screenshots/record-list.png` | Completed |
| E06 | Students have difficulty finding tutors who match their subject, major, rating, and preferred price. | FR-06 | US-02 | F-02 Tutor Search and Listing | Tutor Search and Filter Module | `screenshots/tutor-search.png` | Completed |
| E07 | Students need a clear payment process after their tutoring requests are approved. | FR-07 | US-06 | F-11 Simulated Online Payment | Payment Details, Payment Method, Submission, and Confirmation | `screenshots/student-payment.png` | Completed |
| E08 | Users need sufficient details before selecting tutors, responding to requests, or managing records. | FR-08 | US-03, US-08, US-10 | F-03 Tutor Profile, F-06 Tutor Dashboard, F-07 Admin Dashboard, F-10 Reviews | Tutor Profile, Request Detail, Review Page, Application Detail, and Payment Detail | `screenshots/tutor-profile.png`<br>`screenshots/detail-view.png` | Completed |
| E09 | Students and tutors need accessible payment histories and transaction details. | FR-09 | US-07, US-12 | F-12 Payment History, F-14 Tutor Earnings | Student Payment History and Tutor Payment History | `screenshots/payment-history.png` | Completed |
| E10 | Students and tutors may not understand the current request or payment progress. | FR-10 | US-05, US-11 | F-05 Student Dashboard, F-06 Tutor Dashboard, F-15 Notifications | Request Status, Payment Status, and Tutor Request Management | `screenshots/student-dashboard.png`<br>`screenshots/tutor-dashboard.png` | Completed |
| E11 | The platform requires administrative control over tutor applications, users, payments, and records. | FR-11 | US-13, US-14, US-15 | F-07 Admin Dashboard, F-09 Tutor Approval, F-13 Payment Verification | User Management, Tutor Approval, Payment Verification, and Record Management | `screenshots/admin-dashboard.png`<br>`screenshots/admin-view.png` | Completed |
| E12 | Student payments, platform commission, and tutor earnings must be managed correctly. | FR-12 | US-12, US-15 | F-13 Payment Verification, F-14 Tutor Earnings | Admin Payment Management, Commission Recording, Tutor Payout, and Tutor Earnings | `screenshots/admin-payment.png`<br>`screenshots/tutor-payment.png` | Completed |
| E13 | Incomplete forms, invalid inputs, and duplicate registrations may create inaccurate records. | FR-13 | US-04, US-09 | F-04 Tutoring Request Form, F-08 Tutor Application, F-17 Login, F-18 Signup | Required-Field Validation, Error Messages, Password Validation, and Duplicate Warning | `screenshots/input-form.png`<br>`screenshots/tutor-registration.png` | Completed |
| E14 | Users may not know whether requests, applications, payments, or administrative actions were successful. | FR-14 | US-04, US-06, US-09, US-11, US-14, US-15 | F-15 Notifications and Confirmation Messages | Request, Application, Payment, Status Update, and Verification Confirmations | `screenshots/payment-confirmation.png`<br>`screenshots/request-form.png` | Completed |
| E15 | Students, tutors, and administrators require different summaries and platform metrics. | FR-15 | US-05, US-12, US-16 | F-05 Student Dashboard, F-06 Tutor Dashboard, F-07 Admin Dashboard, F-14 Tutor Earnings | Student Dashboard, Tutor Dashboard, Admin Dashboard, Summary Cards, and Charts | `screenshots/student-dashboard.png`<br>`screenshots/tutor-dashboard.png`<br>`screenshots/admin-dashboard.png` | Completed |
| E16 | Inconsistent navigation, colors, typography, buttons, and layouts may confuse users. | FR-16 | US-01–US-16 | F-01–F-19 | Shared Navigation, Forms, Buttons, Cards, and Dashboard Components | `screenshots/homepage.png`<br>`screenshots/demo-flow.png` | Completed |
| E17 | Students may access PeerTutor from laptops, tablets, and mobile-sized screens. | FR-17 | US-01, US-02, US-04, US-09 | F-01–F-19 | Responsive Homepage, Tutor Listing, Forms, and Dashboards | `screenshots/responsive-mobile.png` | Completed |
| E18 | Personal and transaction information must not expose unnecessary or sensitive data. | FR-18 | US-01–US-16 | All data-related MVP features | Privacy Notice, Masked Data, Sample Records, and Responsible Data Handling | `screenshots/user-testing-evidence.png` | Completed |
| E19 | Final prototype screens must be traceable to requirements, user stories, MVP features, and evidence. | FR-19 | US-01–US-16 | F-01–F-19 | Requirements, User Stories, Feature Status, Demo Script, Testing Evidence, and GitHub Repository | `screenshots/demo-flow.png`<br>`screenshots/user-testing-evidence.png` | Completed |

## Traceability Summary

| Traceability Item | Result |
|---|---:|
| Functional requirements traced | 19 of 19 |
| Approved user stories represented | 16 of 16 |
| MVP features represented | 19 of 19 |
| Requirements connected to prototype modules | 19 of 19 |
| Requirements with final evidence | 19 of 19 |
| Completed requirements | 19 |
| Partial requirements | 0 |
| Pending requirements | 0 |

## Future User Stories

The following user stories are outside the current MVP scope and are not included in the completed implementation count:

| Story ID | Future Feature | Status |
|---|---|---|
| US-17 | Real-time in-app chat | Future |
| US-18 | Tutor video introductions | Future |
| US-19 | AI tutor and personalized study plans | Future |
| US-20 | Video tutoring sessions | Future |

## Final Traceability Decision

**Traceability status: Complete for the Lab 14 final demonstration.**

All 19 functional requirements are connected to approved user stories, MVP features, prototype screens or modules, and final evidence. US-17–US-20 are correctly documented as future features and are excluded from the current MVP implementation.

Before submission, the team must confirm that every screenshot filename in this matrix matches the actual filename in the GitHub repository.



