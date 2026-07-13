# Screen Inventory Checklist
| Screen ID | Screen Name | Required? | Related Feature(s) | Requirement IDs | Has Wireframe? | Has Screenshot? | Notes |
|---|---|---|---|---|---|---|---|
| S-01 | Homepage / Landing Page | Yes | F-01 | FR-01, FR-02, FR-16, FR-17 | Yes | Yes | Introduces PeerTutor and provides "Find a Tutor" and "Get Started Now" actions. |
| S-02 | Role Selection | Yes | F-01 | FR-02 | Yes | Yes | Allows users to choose Student, Tutor, or Administrator before proceeding. |
| S-03 | Login Page | Yes | F-01 | FR-02, FR-13 | Yes | Yes | Allows registered users to log in securely. |
| S-04 | Student Sign Up | Yes | F-01 | FR-13 | Yes | Yes | Allows new students to create an account before using the platform. |
| S-05 | Tutor Sign Up | Yes | F-09 | FR-13 | Yes | Yes | Allows student tutors to create an account before submitting a tutor application. |
| S-06 | Tutor Search & Listing | Yes | F-02 | FR-05, FR-06, FR-08 | Yes | Yes | Students browse, search, and filter tutors by subject, name, major, rating, and price. |
| S-07 | Tutor Profile (Student View) | Yes | F-03 | FR-08 | Yes | Yes | Displays tutor qualifications, teaching experience, availability, hourly rate, ratings, and reviews. |
| S-08 | Tutoring Request Form | Yes | F-04 | FR-03, FR-04, FR-13, FR-14 | Yes | Yes | Students submit tutoring requests with validation and receive confirmation. |
| S-09 | Student Dashboard & Request Status | Yes | F-05 | FR-05, FR-10, FR-15 | Yes | Yes | Students monitor tutoring request status, tutoring history, and upcoming sessions. |
| S-10 | Online Payment | Yes | F-06 | FR-07, FR-10, FR-14 | Yes | Yes | Students complete payment after tutor approval and receive payment confirmation. |
| S-11 | Student Payment History | Yes | F-07 | FR-09, FR-10, FR-15 | Yes | Yes | Students view payment history, transaction details, and payment status. |
| S-12 | Review & Rating Page | Yes | F-08 | FR-08, FR-14 | Yes | Yes | Students leave ratings and reviews after completed tutoring sessions. |
| S-13 | Tutor Registration & Application | Yes | F-09 | FR-03, FR-04, FR-13, FR-14 | Yes | Yes | Student tutors submit tutor applications for administrator approval. |
| S-14 | Tutor Profile Management | Yes | F-10 | FR-05, FR-08 | Yes | Yes | Approved tutors create and manage tutor profiles with subjects, availability, pricing, and experience. |
| S-15 | Tutor Dashboard | Yes | F-11 | FR-05, FR-09, FR-10, FR-12, FR-15 | Yes | Yes | Tutors manage tutoring requests, approve/reject requests, monitor payment status, earnings, and student reviews. |
| S-16 | Admin Login | Yes | F-12 | FR-13 | Yes | Yes | Allows administrators to securely access the Admin Dashboard. |
| S-17 | Admin Dashboard & User Management | Yes | F-12 | FR-05, FR-11, FR-15 | Yes | Yes | Administrators manage users and monitor overall platform activities. |
| S-18 | Tutor Application Approval | Yes | F-13 | FR-11, FR-14 | Yes | Yes | Administrators review tutor applications and approve or reject applicants. |
| S-19 | Student Payment Verification | Yes | F-14 | FR-11, FR-12, FR-14 | Yes | Yes | Administrators verify student payments and confirm tutoring sessions. |
| S-20 | Tutor Earnings Management | Yes | F-15 | FR-09, FR-11, FR-12 | Yes | Yes | Administrators calculate platform commissions, transfer tutor earnings, and manage payout status. |
| S-21 | Dashboard Analytics | Yes | F-16 | FR-15 | Yes | Yes | Displays summary cards, pie charts, and line graphs showing tutor registrations, tutoring requests, payments, tutor earnings, and platform activity. |

## Inventory Summary
### Guest Screens
- Homepage / Landing Page
- Role Selection
- Login Page
- Student Sign Up
- Tutor Sign Up

### Student Screens
- Tutor Search & Listing
- Tutor Profile
- Tutoring Request Form
- Student Dashboard & Request Status
- Online Payment
- Student Payment History
- Review & Rating Page

### Tutor Screens
- Tutor Registration & Application
- Tutor Profile Management
- Tutor Dashboard

### Administrator Screens
- Admin Login
- Admin Dashboard & User Management
- Tutor Application Approval
- Student Payment Verification
- Tutor Earnings Management
- Dashboard Analytics

---

## Screen Statistics

| Category | Number of Screens |
|---|---:|
| Guest | 5 |
| Student | 7 |
| Tutor | 3 |
| Administrator | 6 |
| **Total** | **21 Screens** |

## Traceability

Every screen in the PeerTutor prototype is directly mapped to the User Stories, MVP Feature List, and Functional Requirements established in Lab 04. The authentication screens (Role Selection, Login, Student Sign Up, Tutor Sign Up, and Admin Login) support secure access to the system, while the remaining screens implement the core MVP features for students, tutors, and administrators. This traceability ensures that every screen contributes to the validated user needs and supports the complete workflows defined in the project requirements.

## Rule
A screen that is required in Lab 05 must be carried forward into the final prototype unless the team documents an approved change in GitHub issues and weekly logbook.
