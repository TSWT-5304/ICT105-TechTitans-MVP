# Lab 10 - Feature Implementation Status

## Purpose
This document shows how the PeerTutor Sprint 1 prototype is connected to the approved functional requirements in `docs/system-requirements.md`.

The implementation status is based on:
- Functional Requirements FR-01 to FR-19 from Lab 04
- Product concept, wireframes, and feature mapping from Lab 05
- Technical architecture and data structure from Lab 06
- Experiment plan and testing criteria from Lab 07
- Customer validation findings from Lab 08
- Privacy, security, legal, ethical, and responsible-design checks from Lab 09
- The current PeerTutor HTML, CSS, and JavaScript prototype

The generic Lab 10 example has been adjusted to use PeerTutor's actual FR-01 to FR-19 definitions.

### Status Definitions

| Status | Meaning |
|---|---|
| **Not Started** | No related screen, module, or function has been created. |
| **In Progress** | Development has started, but the feature is not ready for demonstration. |
| **Working Draft** | The feature can be demonstrated using sample data or simulated interactions, but it is not production-ready. |
| **Needs Fix** | The feature exists, but an important function, usability issue, privacy requirement, or technical problem must be corrected. |

---

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| **FR-01** | Provide a homepage that introduces PeerTutor and helps users begin using the platform. | Homepage, role selection, sign-in, and sign-up | **Working Draft** | `html/index.html`; `html/role-select.html`; `html/sign-in.html`; `html/signup.html`; Issue #1; `screenshots/homepage.png` under Issue #8 | Confirm that all homepage buttons and navigation links open the correct pages. Add a clear statement that PeerTutor is an educational prototype. |
| **FR-02** | Provide complete primary pathways for Students, Student Tutors, and Administrators. | Role Selection, Student Dashboard, Tutor Dashboard, and Admin Dashboard | **Working Draft** | `html/role-select.html`; `html/stu-dashboard.html`; `html/tutor-dashboard.html`; `html/admin-dashboard.html`; Issue #1 | Test each role from role selection through its complete workflow. Fix broken or inconsistent navigation links between pages. |
| **FR-03** | Provide forms for tutoring requests, tutor applications, account registration, and other required user input. | Booking Form, Tutor Application, Sign Up, Contact Form, and Profile Forms | **Working Draft** | `html/book-session.html`; `html/tutor-apply.html`; `html/signup.html`; `html/contact-us.html`; `html/stu-profile.html`; `html/tutor-profile.html`; Issue #1; `screenshots/input-form.png` under Issue #9 | Mark required and optional fields clearly. Remove unnecessary personal-data fields and check every form against the Lab 09 data-minimization rules. |
| **FR-04** | Provide data storage or simulated record storage for users, applications, tutor profiles, tutoring requests, payments, earnings, and reviews. | Static sample records within prototype pages | **Needs Fix** | Sample tutor, request, session, payment, and dashboard records in the HTML files; Lab 06 Technical Architecture | The current prototype mainly uses static sample data. Add `localStorage`, Google Sheets integration, or another suitable simulated storage method so submitted and updated records remain available after page refresh. |
| **FR-05** | Allow users to view tutor listings, tutoring requests, user information, and other platform records. | Tutor Browse, Student Dashboard, Tutor Dashboard, and Admin Dashboard | **Working Draft** | `html/browse-tutors.html`; `html/stu-dashboard.html`; `html/stu-dashboard2.html`; `html/tutor-dashboard.html`; `html/admin-dashboard.html`; `screenshots/record-list.png` under Issue #10 | Check that record details remain consistent across the listing, profile, dashboard, and admin screens. Add empty-state and no-result messages where needed. |
| **FR-06** | Allow students to search and filter tutors by suitable criteria. | Tutor Search and Listing | **Needs Fix** | `html/browse-tutors.html`; `js/base.js` function `filterTutors()`; Issue #3; `screenshots/record-list.png` under Issue #10 | Basic keyword search works, but structured filters for subject, major, rating, and hourly rate should be completed and tested. Add a clear reset-filter function. |
| **FR-07** | Allow students to complete a simulated online payment process after request approval. | Payment Page | **Needs Fix** | `html/payment.html`; payment-related functions in `js/base.js` | Clearly label the payment process as a simulation. Do not request or store real card numbers, bank accounts, passwords, CVVs, or financial authentication information. Improve payment progress and confirmation messages based on Lab 08 feedback. |
| **FR-08** | Display detailed tutor and record information and allow approved tutors to manage their public profiles. | Tutor Introduction Profile, Tutor Profile Management, Booking Details, and Admin Details | **Needs Fix** | `html/tutor-intro-profile.html`; `html/tutor-profile.html`; `html/book-session.html`; `html/admin-dashboard.html`; `screenshots/detail-view.png` under Issue #11 | Add a tutor-profile preview before publishing changes. Separate public tutor information from private verification information. Confirm that qualifications, subjects, rate, availability, ratings, and reviews are clearly presented. |
| **FR-09** | Allow users to view payment history and allow tutors to monitor earnings-related records. | Student Dashboard, Tutor Dashboard, Payment, and Admin Dashboard | **Needs Fix** | `html/stu-dashboard.html`; `html/tutor-dashboard.html`; `html/payment.html`; `html/admin-dashboard.html` | Add a clearer payment-history section or page showing only reference number, amount, date, session, and payment status. Do not show confidential payment credentials. Add payment filtering if time permits. |
| **FR-10** | Display tutoring-request, tutor-application, payment, and payout statuses. | Student Dashboard, Tutor Dashboard, Admin Dashboard, Tutor Application, and Payment | **Needs Fix** | `html/stu-dashboard.html`; `html/tutor-dashboard.html`; `html/admin-dashboard.html`; `html/tutor-apply.html`; `html/payment.html`; JavaScript status actions in `js/base.js` | Standardize status labels and colors. Use clear progress indicators for Pending, Approved, Rejected, Completed, Cancelled, Verified, Failed, and Transferred. Restrict status changes to the correct role in the intended workflow. |
| **FR-11** | Allow administrators to manage tutor approvals, users, records, and platform activities. | Admin Dashboard and Tutor Application Management | **Working Draft** | `html/admin-dashboard.html`; `js/base.js` functions `approveApp()`, `rejectApp()`, `filterTable()`, and `switchTab()`; `screenshots/admin-view.png` under Issue #12 | Admin actions are currently simulated. Add stronger visual separation from Student and Tutor functions. Secure authentication, authorization, and activity logging will require a future backend. |
| **FR-12** | Allow administrators to verify simulated payments and manage tutor earnings, commissions, and payouts. | Admin Dashboard Payment and Payout Sections | **Working Draft** | `html/admin-dashboard.html`; Admin Dashboard tables and payout interface; Issue #1; `screenshots/admin-view.png` under Issue #12 | Separate payment verification, platform commission, tutor earnings, and payout transfer controls more clearly. Ensure only the intended Administrator workflow can change these records. |
| **FR-13** | Provide clear instructions, input validation, error prevention, and privacy explanations for forms. | Sign Up, Booking, Tutor Application, Contact, Profile, and Payment Forms | **Needs Fix** | Form fields in `html/signup.html`, `html/book-session.html`, `html/tutor-apply.html`, `html/contact-us.html`, and profile pages; validation functions in `js/base.js` | Apply consistent validation to every form. Add required-field indicators, valid email checks, date/time checks, suitable numeric limits, clear error messages, and explanations of why personal information is collected. |
| **FR-14** | Provide clear confirmation and feedback messages after user actions. | Booking Confirmation, Tutor Application Confirmation, Payment Confirmation, and Contact Confirmation | **Working Draft** | Confirmation sections in `html/book-session.html`, `html/tutor-apply.html`, `html/payment.html`, and `html/contact-us.html`; JavaScript confirmation behavior in `js/base.js` | Ensure every submission shows a clear success or failure message and explains what happens next. Improve payment and request confirmation based on Lab 08 feedback. |
| **FR-15** | Provide role-specific dashboards, summaries, and platform analytics. | Student Dashboard, Tutor Dashboard, and Admin Dashboard | **Working Draft** | `html/stu-dashboard.html`; `html/stu-dashboard2.html`; `html/tutor-dashboard.html`; `html/admin-dashboard.html` | Confirm that each dashboard displays only information needed by that role. Add clearer summary statistics, filters, and charts to the Admin Dashboard using aggregated or non-identifying data. |
| **FR-16** | Maintain a consistent and understandable user interface across the prototype. | Entire Prototype | **Working Draft** | Shared styles in `css/base.css` and `css/responsive.css`; page-specific CSS files; shared navigation logic in `js/base.js`; Issue #2 and Issue #3 | Standardize page titles, navigation menus, buttons, colors, spacing, typography, forms, and status labels. Add accessible links to the Privacy Notice, Terms of Use, prototype limitations, and third-party asset credits. |
| **FR-17** | Ensure that the prototype operates on suitable desktop and mobile screen sizes. | All Prototype Pages | **Working Draft** | `css/responsive.css`; responsive rules in page-specific stylesheets; mobile-navigation code in `js/base.js` | Test all pages at common desktop, tablet, and mobile widths. Correct overflow, crowded tables, forms, dashboards, and broken mobile navigation. Ensure privacy notices and warnings remain readable. |
| **FR-18** | Follow privacy, data-minimization, and responsible data-handling principles. | All Forms, Profiles, Dashboards, Payment, and Admin Modules | **Needs Fix** | Lab 09 Privacy Review and Risk Register; privacy acknowledgement in selected forms; sample data used in the prototype | Remove fields that could request real financial or unnecessary sensitive information. Add a Privacy Notice, Terms of Use, consent information, retention explanation, and clear simulated-payment warning. Use only fictional or approved sample data in screenshots. |
| **FR-19** | Keep prototype features and screens traceable to approved requirements, user stories, issues, files, and evidence. | Entire Prototype and Lab 10 Documentation | **Working Draft** | `docs/implementation-plan.md`; `docs/feature-implementation-status.md`; GitHub Issues #1-#13; Lab 05 Feature-Requirement Mapping | Add actual commit IDs, completed screenshot paths, and repository links. Link every responsible-design change from Lab 09 to an issue or commit before marking the requirement complete. |

## Summary

### Features Working Today
- Homepage and main landing-page content
- Role-selection interface
- Sign-in and sign-up interfaces
- Tutor browsing and basic keyword search
- Tutor profile and detail display
- Tutoring session booking interface
- Student Dashboard
- Tutor Dashboard
- Tutor application form
- Tutor profile-management interface
- Admin Dashboard
- Simulated tutor approval and rejection
- Simulated payment interface
- Dashboard summary information
- Mobile navigation
- Selected form-validation and confirmation messages
- About Us and Contact Us pages

### Features Partially Working
- Advanced tutor filtering by subject, major, rating, and price
- Persistent data storage
- Tutoring-request status updates
- Payment-history presentation
- Payment verification and tutor earnings management
- Form validation across all pages
- Role-based access control
- Dashboard analytics
- Responsive behavior across every screen size
- Privacy consent and responsible-data explanations
- Profile preview and separation of public/private tutor information
- Consistent confirmation and next-step messages

### Features Not Yet Fully Implemented
- Real user authentication and authorization
- Permanent database storage
- Real-time data synchronization
- Production-level security
- Server-side validation
- Real online payment processing
- Secure document upload
- Automated email or notification delivery
- Activity logging
- Multi-user concurrent access

### Features Requiring Instructor Feedback
- Whether static sample data is sufficient for Sprint 1 or `localStorage`/Google Sheets must be connected
- Whether the simulated payment page should retain any card or bank interface fields
- Whether payment history requires a separate HTML page in Sprint 1
- Whether tutor approval, payment verification, and tutor earnings must be separate admin pages
- Whether basic keyword search is sufficient or every planned filter must be functional
- Whether Privacy Notice and Terms of Use require separate pages during Sprint 1
- Whether the current dashboard summaries satisfy the minimum analytics requirement

---

# Updated Feature Implementation Status for Lab 11

> Every prototype feature must connect to `system-requirements.md`.

| Req ID | Required Functionality | Screen/Module | Lab 10 Status | Lab 11 Status | Owner | Evidence Screenshot/Commit | Notes/Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Clear problem-specific homepage or landing screen | index.html | Working Draft | Completed | Thin Thiri Naing | Homepage screenshot | Homepage clearly presents PeerTutor, target users, project purpose, and navigation. |
| FR-02 | Primary user pathway | Student & Tutor Workflow | Working Draft | Completed | Thin Thiri Naing | Prototype pages, navigation flow | Student and Tutor workflows are connected through the prototype. Backend authentication and processing remain simulated for the MVP. |
| FR-03 | User input or data submission feature | request-form.html, tutor-application.html | Working Draft | Completed | Thae Su Win Thu | Input Form screenshot | Required tutoring requests and tutor application forms are implemented with basic validation. |
| FR-04 | Data storage or record management | script.js / Simulated Data | Needs Fix | Partially Completed | Thae Su Win Thu | script.js | Simulated data is used for prototype interactions. Persistent storage using localStorage or Google Sheets will be improved in future development. |
| FR-05 | View records / information list | tutor-search.html, payment-history.html, dashboards | Working Draft | Completed | Shinn Thant Maung, Yan Naing Kyaw | Record List screenshot | Tutor listings, payment history, and dashboard records are displayed correctly using sample data. |
| FR-06 | Search, filter, or category function | tutor-search.html | Needs Fix | Partially Completed | Shinn Thant Maung | Search page | Basic keyword search and filtering interface are implemented. Additional filtering logic and testing will continue in Sprint 2. |
| FR-07 | Online payment | payment.html | Needs Fix | Partially Completed | Thae Su Win Thu | Payment screenshot | Simulated payment workflow is available. No real payment gateway or financial transaction is connected. |
| FR-08 | Detail view for each record | tutor-profile.html | Needs Fix | Completed | Thae Su Win Thu | Detail View screenshot | Tutor profiles, tutoring request details, and payment details are displayed correctly. |
| FR-09 | Payment history | payment-history.html | Needs Fix | Partially Completed | Yan Naing Kyaw | Payment History screenshot | Payment history is displayed using simulated records. Filtering and persistent record management can be improved in future iterations. |
| FR-10 | Status or progress tracking | student-dashboard.html, tutor-dashboard.html | Needs Fix | Partially Completed | Thae Su Win Thu | Dashboard screenshot | Request, payment, and tutoring statuses are displayed through simulated data. Permanent status storage will be added later. |
| FR-11 | Admin or manager function | admin-dashboard.html, tutor-approval.html | Working Draft | Completed | Thae Su Win Thu | Admin View screenshot | Admin functions support tutor approval, payment verification, user management, and platform administration through simulation. |
| FR-12 | Payment management | payment-verification.html | Working Draft | Completed | Thae Su Win Thu | Payment Verification screenshot | Admin verifies student payments, records platform commission, transfers tutor earnings, and updates payment status through a simulated workflow. |
| FR-13 | Basic validation and error prevention | Forms | Needs Fix | Partially Completed | Thae Su Win Thu | Validation messages | HTML and JavaScript validation are implemented. Additional validation and data integrity improvements are planned. |
| FR-14 | Confirmation or feedback message | Request, Registration & Payment Flow | Working Draft | Completed | Thae Su Win Thu | Prototype interaction | Confirmation messages are displayed after request submission, tutor registration, payment, and verification actions. |
| FR-15 | Dashboard, summary, or simple analytics view | Student, Tutor & Admin Dashboards | Working Draft | Completed | Thae Su Win Thu | Dashboard screenshot | Dashboards display summaries for each user role. Startup metrics will be expanded during Lab 11. |
| FR-16 | Basic user interface consistency | All prototype pages | Working Draft | Completed | Thae Su Win Thu | style.css | Navigation, colours, typography, buttons, icons, and layouts remain consistent throughout the prototype. |
| FR-17 | Mobile-friendly or responsive design consideration | All prototype pages | Working Draft | Partially Completed | Thae Su Win Thu | Responsive testing | Responsive layouts have been implemented and tested. Additional optimization for different screen sizes will continue. |
| FR-18 | Basic privacy and responsible data handling | Forms & Data Collection | Needs Fix | Partially Completed | Thin Thiri Naing, Yan Naing Kyaw | Lab 09 documentation | Prototype follows data minimization and responsible data handling principles. Privacy Notice and Terms of Use will be further integrated into the prototype. |
| FR-19 | Final prototype traceability | Documentation | Working Draft | Completed | Yan Naing Kyaw | README, Weekly Logbook, Feature Status | Prototype remains traceable to system requirements, user stories, MVP feature list, GitHub issues, and repository documentation. |

---

# Updated Feature Implementation Status for Lab 14

## Status Definition

- **Completed:** The required feature or workflow can be demonstrated.
- **Partial:** The feature is available, but an important part is limited.
- **Pending:** The feature has not been implemented.
- **Changed:** The original implementation was modified based on testing or project decisions.

## Feature Implementation Status

| Requirement ID | Requirement Summary | Prototype Screen/Module | Status | Evidence/Screenshot | Notes |
| --- | --- | --- | --- | --- | --- |
| FR-01 | Clear problem-specific homepage or landing screen | Homepage and Landing Page | Completed | `screenshots/homepage.png`<br>`screenshots/landing-page.png` | The homepage displays the PeerTutor name, identifies Rangsit University students as the target users, explains the scattered tutor-discovery problem, and includes **Find a Tutor** and **Get Started Now** actions. |
| FR-02 | Primary user pathway | Student Workflow, Tutor Workflow, and Role Selection | Completed | `screenshots/demo-flow.png`<br>`screenshots/role-select.png` | The prototype demonstrates the main Student and Student Tutor pathways, including tutor discovery, requests, approval, payment, sessions, reviews, tutor registration, profile creation, request management, and earnings. |
| FR-03 | User input or data submission feature | Tutoring Request Form, Tutor Registration Form, and Review Form | Completed | `screenshots/input-form.png`<br>`screenshots/request-form.png` | Students can submit a tutoring request containing a subject, preferred date/time, and note. Student Tutors can submit educational background, experience, skills, and supporting information. |
| FR-04 | Data storage or record management | Local Storage, JavaScript Data, JSON, and Sample Records | Completed | `prototype/PeerTutor/`<br>`data/user-testing-results.csv` | Tutor applications, tutoring requests, payment records, reviews, and platform records use local storage, JSON, or simulated sample data. No production database is connected. |
| FR-05 | View records or information list | Tutor Listing, Student Dashboard, Tutor Dashboard, and Admin Dashboard | Completed | `screenshots/record-list.png`<br>`screenshots/tutor-search.png` | Students can view approved tutors, requests, and payment history. Tutors can view incoming requests, reviews, ratings, and earnings. Administrators can view applications, users, transactions, and platform records. |
| FR-06 | Search, filter, or category function | Tutor Search and Filtering Module | Completed | `screenshots/tutor-search.png` | Students can search tutors by name or subject and apply filters such as major, hourly rate, and rating. |
| FR-07 | Online payment | Simulated Payment Page and Payment Confirmation | Completed | `screenshots/payment.png`<br>`screenshots/payment-confirmation.png` | Students can review tutoring-session details, payment amount, and payment method after tutor approval. Payment is simulated, and no real financial transaction is processed. |
| FR-08 | Detail view for each record | Tutor Profile, Request Detail, Payment Detail, Application Detail, and User Detail | Completed | `screenshots/detail-view.png`<br>`screenshots/tutor-profile.png` | Students, tutors, and administrators can open relevant records and review detailed information. Personal and transaction information uses sample or masked data. |
| FR-09 | Payment history | Student Payment History and Tutor Payment History | Completed | `screenshots/payment-history.png`<br>`screenshots/student-dashboard.png` | Students and Student Tutors can view simulated payment records, transaction details, amounts, and payment statuses through their dashboards. |
| FR-10 | Status or progress tracking | Student Dashboard, Tutor Dashboard, Request Status, and Payment Status | Completed | `screenshots/student-dashboard.png`<br>`screenshots/tutor-dashboard.png` | Request statuses include Pending, Approved, Rejected, Completed, and Cancelled. Payment statuses include Pending, Paid, Verified, and Transferred. |
| FR-11 | Admin or manager function | Admin Dashboard, Tutor Approval, User Management, Payment Verification, and Record Management | Completed | `screenshots/admin-dashboard.png`<br>`screenshots/admin-view.png` | Administrators can approve or reject tutor applications, manage user accounts, verify payments, record commission, update tutor payouts, delete invalid submissions, and oversee platform records. |
| FR-12 | Payment management | Admin Payment Management and Tutor Earnings | Completed | `screenshots/admin-dashboard.png`<br>`screenshots/tutor-dashboard.png` | Administrators can verify simulated student payments, record platform commission, transfer simulated tutor earnings, and update payment statuses. Tutors can view earnings and payment status. |
| FR-13 | Basic validation and error prevention | Form Validation, Error Messages, Duplicate Warning, and Confirmation Prompts | Completed | `screenshots/input-form.png`<br>`screenshots/request-form.png` | The prototype checks required fields, email format, password requirements, and mandatory tutor-application information. Invalid or incomplete submissions display feedback. |
| FR-14 | Confirmation or feedback message | Request, Application, Payment, and Admin Confirmation Messages | Completed | `screenshots/payment-confirmation.png`<br>`screenshots/input-form.png` | Users receive messages after important actions, including request submission, tutor-application submission, payment completion, and payment verification. |
| FR-15 | Dashboard, summary, or simple analytics view | Student Dashboard, Tutor Dashboard, Admin Dashboard, and Power BI Dashboard | Completed | `screenshots/student-dashboard.png`<br>`screenshots/tutor-dashboard.png`<br>`screenshots/admin-dashboard.png` | Each user role has a dashboard containing relevant requests, schedules, sessions, reviews, earnings, transactions, payouts, statistics, or charts. Some values use sample data. |
| FR-16 | Basic user-interface consistency | Shared Navigation, Layout, Typography, Buttons, Forms, and Dashboards | Completed | `screenshots/demo-flow.png`<br>`screenshots/homepage.png` | Pages use a consistent color scheme, navigation structure, typography, icons, buttons, cards, forms, and dashboard design. |
| FR-17 | Mobile-friendly or responsive design | Responsive Homepage, Forms, Listings, and Dashboards | Completed | `screenshots/responsive-mobile.png` | The prototype can be used on laptop and mobile-sized screens. Key request and registration forms are designed for phone-sized viewports. |
| FR-18 | Basic privacy and responsible data handling | Privacy Notice, Sample Data, Masked Records, and Role-Based Information | Completed | `docs/privacy-and-data-protection-policy.md`<br>`screenshots/user-testing-evidence.png` | Only necessary sample or masked data is displayed. No real passwords, sensitive personal data, or financial information is used in the demonstration. |
| FR-19 | Final prototype traceability | Requirements, User Stories, MVP Features, Demo Script, Testing Evidence, and GitHub Files | Completed | `docs/feature-implementation-status.md`<br>`docs/demo-script.md`<br>`screenshots/demo-flow.png` | Major screens and features are traceable to functional requirements, user stories, MVP features, implementation evidence, and final testing documentation. |

## Implementation Summary

| Status | Number of Requirements |
| --- | ---: |
| Completed | 19 |
| Partial | 0 |
| Pending | 0 |
| Changed | 0 |
| **Total** | **19** |

## Final Prototype Limitations

- PeerTutor is an academic web prototype rather than a production platform.
- Tutor profiles, tutoring requests, reviews, user accounts, and payment records use sample or masked data.
- Local storage, JavaScript objects, JSON, or other simulated storage may be used instead of a production database.
- Authentication and role-based access may be simulated.
- Payment processing, payment verification, platform commission, and tutor payouts are simulated.
- No real financial transactions are processed.
- Email notifications and supporting-information uploads may use prototype confirmation messages instead of external services.
- Refreshing the page or clearing browser data may reset locally stored records.
- The Lab 13 user-testing dataset and evidence image contain synthetic coursework sample data and must not be described as actual participant research.

## Final Readiness Decision

**Final status: Ready for the Lab 14 final demonstration.**

The PeerTutor final prototype demonstrates all nineteen project requirements. It covers the main Student, Student Tutor, and Administrator workflows, including tutor discovery, request submission, request management, payment, payment verification, dashboards, reviews, validation, privacy, responsive design, and final traceability.

Some backend, authentication, notification, file-upload, and financial operations are simulated because the project is an academic prototype. These limitations do not prevent the team from demonstrating the intended user workflows and product value.

## Final Verification Before Presentation

Before the Lab 14 presentation, the team should verify:

1. The prototype and landing-page links are working.
2. The Student workflow can be demonstrated from beginning to end.
3. The Student Tutor workflow can be demonstrated from registration to payment status.
4. Administrator approval and payment-management actions work correctly.
5. Required-field validation and confirmation messages appear.
6. Request and payment statuses update correctly.
7. The prototype works on laptop and mobile-sized screens.
8. Only sample or masked data is displayed.
9. Every screenshot path matches the actual GitHub filename.
10. Every major screen remains traceable to FR-01–FR-19.
