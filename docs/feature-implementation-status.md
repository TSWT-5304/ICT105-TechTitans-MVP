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

| FR-09 | Admin or manager function | | | | |
| FR-10 | Validation and error prevention | | | | |
| FR-11 | Confirmation or feedback message | | | | |
| FR-12 | Dashboard or summary view | | | | |
| FR-13 | UI consistency | | | | |
| FR-14 | Mobile-friendly/responsive design | | | | |
| FR-15 | Privacy and responsible data handling | | | | |
| FR-16 | Final prototype traceability | | | | |

## Summary
- Features working today:
- Features partially working:
- Features not yet started:
- Features requiring instructor feedback:
