# Lab 10 - Implementation Plan

## 1. Project Information
- **Group name:** TechTitans
- **Project title:** PeerTutor - Student-to-Student Tutoring Marketplace
- **Repository link:** [`https://github.com/TSWT-5304/ICT105-TechTitans-MVP`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP)
- **Selected platform/tools:** HTML5, CSS3, JavaScript, Visual Studio Code, GitHub, and realistic sample data
- **Backend status:** Simulated backend

The Sprint 1 implementation transforms the approved Functional Requirements, wireframes, technical architecture, and responsible design review from previous labs into an interactive web-based prototype. 

The Sprint 1 prototype uses HTML, CSS, and JavaScript. Backend functions such as authentication, authorization, database synchronization, and real payment processing are simulated using predefined records and client-side interactions.

Google Sheets was proposed in Lab 06 as the prototype storage solution. However, the current Sprint 1 package primarily demonstrates the workflow using static sample data. Google Sheets integration can be added in a later implementation sprint.

---

## 2. Prototype Scope for Sprint 1

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage and landing screen | FR-01, FR-02, FR-16, FR-17 | US-01 | `index.html` | Working Draft |
| Role selection and platform access | FR-02, FR-13 | US-01 | `role-select.html`, `sign-in.html`, `signup.html` | Working Draft |
| Tutor search and record listing | FR-05, FR-06, FR-08, FR-17 | US-02 | `browse-tutors.html` | Working Draft |
| Search and filter function | FR-05, FR-06 | US-02 | Tutor Browse/Search module | Working Draft |
| Tutor profile and detail view | FR-08 | US-03 | `tutor-intro-profile.html` | Working Draft |
| Tutoring request and booking form | FR-03, FR-04, FR-13, FR-14 | US-04 | `book-session.html` | Working Draft |
| Student Dashboard and request status | FR-05, FR-10, FR-14, FR-15 | US-05 | `stu-dashboard.html`, `stu-dashboard2.html` | Working Draft |
| Simulated payment process | FR-07, FR-10, FR-13, FR-14 | US-06 | `payment.html` | Working Draft |
| Tutor registration and application | FR-03, FR-04, FR-10, FR-13, FR-14 | US-09 | `tutor-apply.html` | Working Draft |
| Tutor profile management | FR-05, FR-08, FR-13 | US-10 | `tutor-profile.html` | Working Draft |
| Tutor Dashboard and request management | FR-05, FR-08, FR-09, FR-10, FR-12, FR-15 | US-11, US-12 | `tutor-dashboard.html` | Working Draft |
| Admin Dashboard and user management | FR-05, FR-08, FR-11, FR-15 | US-13 | `admin-dashboard.html` | Working Draft |
| Tutor application approval and status update | FR-08, FR-10, FR-11, FR-14 | US-14 | Admin Dashboard module | Working Draft |
| Payment verification and earnings management | FR-09, FR-10, FR-11, FR-12, FR-14 | US-15 | Admin Dashboard module | Working Draft |
| Dashboard summary and platform statistics | FR-15 | US-16 | Admin Dashboard summary cards | Working Draft |
| Student profile management | FR-03, FR-08, FR-13 | Supporting module | `stu-profile.html` | Working Draft |
| Messages interface | Supporting feature | Supporting module | `messages.html` | Working Draft |
| About and Contact pages | FR-01, FR-16 | US-01 | `about-us.html`, `contact-us.html` | Working Draft |
| Privacy, responsible data handling, and traceability | FR-16, FR-17, FR-18, FR-19 | All relevant stories | All forms and modules | Needs Review |

### Sprint 1 Boundaries
Sprint 1 focuses on demonstrating a realistic, clickable workflow rather than delivering a production-ready system.

The following functions are simulated during this sprint:
- User authentication and role authorization
- Database storage and real-time record synchronization
- Online payment processing
- Payment verification, platform commission recording, and tutor payouts
- Email and in-app notification delivery
- Secure file uploads
- Multi-user access and concurrent record updates
- Production-level security and activity logging

Future development will integrate a secure backend, real user authentication, database connectivity, and enhanced security mechanisms.

---

## 3. Implementation Approach

### 3.1 Frontend

The PeerTutor prototype is developed using HTML5, CSS3, and JavaScript based on the approved wireframes from Lab 05. All pages follow a consistent user interface, navigation structure, typography, colour scheme, and responsive design to provide a unified user experience across Student, Tutor, and Administrator modules.

The prototype uses shared and page-specific stylesheets inside the `css/` directory. JavaScript provides mobile navigation, tutor searching, form interaction, confirmation messages, tab switching, and simulated administrative actions.

### 3.2 Data Source and Storage

Google Sheets serves as the planned prototype data storage for tutor applications, tutoring requests, payment records, tutor earnings records, and platform data. The current Sprint 1 prototype uses predefined sample tutor, session, request, payment, and dashboard information contained within the HTML pages. During Sprint 1, the workflow is demonstrated using simulated data and JavaScript interactions before integrating a production backend. This allows the group to demonstrate the workflow without a dedicated backend.

Lab 06 proposed Google Forms and Google Sheets for collecting and storing the following prototype records:
- Users
- Tutor applications
- Tutor profiles
- Tutoring requests
- Payments
- Tutor earnings
- Reviews and ratings

Google Sheets integration is not yet fully present in the submitted Sprint 1 prototype. It is treated as a planned improvement rather than a completed function.

### 3.3 Admin and Status Handling

The Admin Dashboard uses separate interface sections and JavaScript interactions to simulate administrative activities. Administrator functions simulate tutor application approval, student payment verification, platform commission recording, tutor earnings transfer after completed tutoring sessions, payment status updates, user management, and platform record management.

The prototype uses the following standardized status values:
- **Tutoring requests:** Pending, Approved, Rejected, Completed, or Cancelled
- **Tutor applications:** Pending, Approved, or Rejected
- **Payments:** Pending, Verified, or Failed
- **Tutor earnings:** Pending or Transferred

Status changes currently affect the displayed prototype state only. They are not permanently stored because the prototype does not have a real backend or database connection.

### 3.4 Search and Filter Approach

The tutor-browsing screen uses JavaScript to compare the entered search text with the information shown on each tutor card. Tutor cards that do not match the keyword are hidden, and the visible-result count is updated.

The prototype is designed to support searching or filtering by:
- Tutor name
- Subject
- Major
- Rating
- Hourly rate or price

Any filters that are not yet functional will be improved during the next sprint.

### 3.5 Validation Approach

The prototype uses HTML required fields and JavaScript validation for selected forms.

The planned validation checks include:
- Required fields cannot be empty
- Email addresses must use a valid format
- Password and confirmation fields should match
- Booking dates and times should be appropriate
- Numeric values should use valid ranges
- Privacy acknowledgement must be selected where required
- Confirmation messages should appear after successful submission

Because the prototype does not have a backend, validation is currently client-side only. Server-side validation and secure permission checks will be required before production deployment.

### 3.6 Screenshots and Evidence Approach

The group will run the prototype locally in a web browser and capture evidence after verifying each required workflow.

| Evidence | Required File |
|---|---|
| Homepage or landing screen | `screenshots/homepage.png` | 
| Tutoring request or input form | `screenshots/input-form.png` |
| Tutor record list and search/filter | `screenshots/record-list.png` | 
| Tutor profile or detail view | `screenshots/detail-view.png` | 
| Admin Dashboard and status function | `screenshots/admin-view.png` | 

### 3.7 Responsive Design Approach

The prototype uses shared responsive CSS and a JavaScript-controlled mobile navigation menu. Layouts, navigation links, cards, forms, tables, and dashboards will be checked on desktop and mobile screen sizes.

Important status information, privacy notices, and payment simulation warnings must remain visible and readable on smaller screens.

### 3.8 Privacy and Responsible-Design Approach

The Sprint 1 implementation follows the responsible-design decisions established in Lab 09:
- Collect only information required for tutoring services.
- Do not collect national ID, passport, health, bank account, or credit-card information.
- Use Student ID only for university verification.
- Separate public tutor-profile information from private verification information.
- Clearly label payments as simulations.
- Keep Student, Tutor, and Administrator functions separated.
- Use aggregated or non-identifying information in dashboard analytics where possible.
- Add accessible Privacy Notice, Terms of Use, and prototype limitation information.
- Use original or appropriately licensed images, icons, and design resources.

---

## 4. Member Responsibilities

| Member | Role and Responsibility | Evidence of Contribution |
|---|---|---|
| **Thin Thiri Naing** | **Product Lead:** Reviews the Sprint 1 scope and requirements; ensures that the prototype follows the PeerTutor value proposition and target-user needs; contributes to the homepage and role-selection interfaces; prepares the Implementation Plan; and captures homepage evidence. | supporting HTML; `docs/implementation-plan.md`; `screenshots/homepage.png` |
| **Shinn Thant Maung** | **Validation Lead:** Manages prototype testing instructions and repository workflow; reviews the tutor-search user flow; maintains feature-to-requirement traceability; tests search and filter functions; and captures record-list evidence. | supporting HTML; `prototype/prototype-link.md`; `docs/feature-implementation-status.md`; `screenshots/record-list.png` |
| **Thae Su Win Thu** | **UX/UI Lead and Technical Lead:** Develops and integrates most HTML interfaces; creates and maintains the stylesheets and responsive design; implements JavaScript interactions, validation, search/filter, and simulated status updates; and captures the input-form and detail-view evidence. | majority HTML contribution; CSS files; `js/base.js` and JavaScript functions; `screenshots/input-form.png`; `screenshots/detail-view.png` |
| **Yan Naing Kyaw** | **Documentation Lead and Technical Support:** Contributes supporting HTML interfaces; maintains the Lab 10 weekly logbook and README; organizes submission files and screenshots; supports testing and final repository checking; and captures admin-view evidence. | supporting HTML contribution; `docs/weekly-logbook.md`; `screenshots/admin-view.png`; `README.md`|

### Shared Responsibilities

All members must:
- Work in the same GitHub repository.
- Create identifiable commits using their own GitHub accounts.
- Link commits and pull requests to the appropriate GitHub issues.
- Test their assigned screens before marking issues as completed.
- Confirm that navigation links work between related pages.
- Check that implemented features remain traceable to the approved requirements.
- Review privacy, security, and payment-simulation messages.
- Participate in the final Sprint 1 demonstration and repository review.

---

## 5. Risks or Blockers

| Risk / Blocker | Impact | Planned Solution |
|---|---|---|
| No real backend or database connection | Submitted records are simulated and not permanently stored. | Use simulated data during Sprint 1 and integrate Google Sheets or a secure backend in future development. |
| Authentication and permissions are simulated | Users may access restricted pages directly because there is no production authentication system. | Clearly separate Student, Tutor, and Administrator workflows and implement secure authentication and authorization in future development. |
| Client-side validation only | Invalid or manipulated information cannot be completely prevented. | Use HTML and JavaScript validation during Sprint 1 and implement server-side validation in future development. |
| Search and filter functionality may be limited | Some search filters may not fully function with simulated data. | Improve JavaScript filtering using structured tutor data and test all required search and filter functions. |
| Simulated payment process | Users may misunderstand payment verification, platform commission recording, and tutor earnings transfer as real financial transactions. | Clearly indicate that all payment-related functions are simulated and avoid requesting real financial information. |
| Responsive layouts across devices | Some pages may display differently on mobile devices or smaller screens. | Test the prototype on desktop and mobile viewports and refine responsive layouts where necessary. |
| Multiple prototype pages require consistent implementation | Navigation, layouts, and page behaviour may become inconsistent because development is divided among team members. | Use shared CSS, common navigation components, coding standards, and integration testing before submission. |

---

##  Sprint 1 Completion Decision

The PeerTutor Sprint 1 prototype is currently a **Working Draft**. It contains the main multi-page interfaces and several functional JavaScript interactions, including responsive navigation, tutor searching, form handling, confirmation messages, and simulated administrative actions.

Before Lab 10 is marked complete, the group must:
1. Verify navigation across all prototype pages.
2. Test the forms and search/filter functions.
3. Confirm that the admin status simulation works.
4. Capture the five required screenshots.
5. Complete the Feature Implementation Status document.
6. Add the prototype path and testing instructions.
7. Update the README and weekly logbook.
8. Add payment-simulation and privacy notices where required.
9. Confirm that all four members have identifiable GitHub contributions.
