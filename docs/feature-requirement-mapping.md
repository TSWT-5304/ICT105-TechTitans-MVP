# Feature-Requirement Mapping

Use this file to prove that your wireframe and final prototype are not random screens. Every planned screen and feature must connect to `system-requirements.md`.

| Feature ID | Feature / Screen | Requirement ID | User Story ID | Purpose | Wireframe File | Final Prototype Module |
|---|---|---|---|---|---|---|
| **F-01** | Homepage / Landing Page | **FR-01, FR-02, FR-16, FR-17** | **US-01** | Introduce PeerTutor, explain the problem of scattered tutor discovery, and provide the primary **Find a Tutor** and **Get Started Now** actions. | `/wireframes/homepage.png` | `/prototype/index.html` |
| **F-02** | Tutor Search & Listing | **FR-05, FR-06, FR-08, FR-17** | **US-02** | Allow students to browse, search, and filter approved tutors by name, subject, major, rating, and price. | `/wireframes/tutor-search.png` | `/prototype/student/tutor-search.html` |
| **F-03** | Tutor Profile | **FR-08** | **US-03** | Display tutor qualifications, subjects, teaching experience, availability, price, ratings, and reviews so students can evaluate tutors before submitting a request. | `/wireframes/tutor-profile.png` | `/prototype/student/tutor-profile.html` |
| **F-04** | Tutoring Request Form | **FR-03, FR-04, FR-13, FR-14** | **US-04** | Allow students to submit a tutoring request containing the subject, preferred date and time, and additional notes. The system validates the form, stores the request, and displays a successful submission message. | `/wireframes/request-form.png` | `/prototype/student/request-form.html` |
| **F-05** | Student Dashboard & Request Status | **FR-05, FR-10, FR-14, FR-15** | **US-05** | Allow students to view submitted tutoring requests and track statuses such as Pending, Approved, Rejected, Completed, or Cancelled. | `/wireframes/student-dashboard.png` | `/prototype/student/dashboard.html` |
| **F-06** | Online Payment | **FR-07, FR-10, FR-13, FR-14** | **US-06** | Allow students to make a payment after a tutoring request has been approved. Display session details, payment amount, payment method, payment status, and a successful payment confirmation. | `/wireframes/student-payment.png` | `/prototype/student/payment.html` |
| **F-07** | Student Payment History | **FR-05, FR-09, FR-10, FR-15** | **US-07** | Allow students to view their payment history, transaction details, tutoring session information, and payment statuses through the Student Dashboard. | `/wireframes/student-payment-history.png` | `/prototype/student/payment-history.html` |
| **F-08** | Student Review & Rating | **FR-05, FR-08, FR-14** | **US-08** | Allow students to leave a star rating and written review after completing a tutoring session. The submitted review is displayed on the tutor’s profile. | `/wireframes/review-rating.png` | `/prototype/student/review.html` |
| **F-09** | Tutor Registration & Application | **FR-03, FR-04, FR-10, FR-13, FR-14** | **US-09** | Allow student tutors to register and submit an application containing their educational background, teaching experience, subjects, skills, availability, and supporting information for administrator review. | `/wireframes/tutor-registration.png` | `/prototype/tutor/register.html` |
| **F-10** | Tutor Profile Management | **FR-05, FR-08, FR-13** | **US-10** | Allow approved tutors to create, publish, and update their public tutor profiles, including subjects, qualifications, teaching experience, availability, hourly price, and profile information. | `/wireframes/tutor-profile-management.png` | `/prototype/tutor/profile.html` |
| **F-11** | Tutor Dashboard & Request Management | **FR-05, FR-08, FR-09, FR-10, FR-12, FR-15** | **US-11, US-12** | Allow tutors to view incoming tutoring requests, review request details, approve or reject requests, view tutoring schedules, monitor payment status and earnings, and view student ratings and reviews. | `/wireframes/tutor-dashboard.png` | `/prototype/tutor/dashboard.html` |
| **F-12** | Admin Dashboard & User Management | **FR-05, FR-08, FR-11, FR-15** | **US-13** | Allow administrators to view and manage student and tutor accounts, suspend inappropriate accounts, remove invalid records, and oversee general platform activities. | `/wireframes/admin-dashboard.png` | `/prototype/admin/dashboard.html` |
| **F-13** | Tutor Application Approval | **FR-08, FR-10, FR-11, FR-14** | **US-14** | Allow administrators to review tutor applications and approve or reject applicants. Only approved tutors are permitted to create public tutor profiles and appear in tutor listings. | `/wireframes/admin-tutor-approval.png` | `/prototype/admin/tutor-approval.html` |
| **F-14** | Student Payment Verification | **FR-08, FR-10, FR-11, FR-12, FR-14** | **US-15** | Allow administrators to review student payment records, verify successful payments, update payment statuses, and confirm tutoring sessions after payment verification. | `/wireframes/admin-payment-verification.png` | `/prototype/admin/payment-verification.html` |
| **F-15** | Tutor Earnings Management | **FR-09, FR-10, FR-11, FR-12** | **US-15** | Allow administrators to record the platform commission, calculate tutor earnings, transfer tutor payouts after completed sessions, and update payout statuses to Transferred. | `/wireframes/admin-tutor-earnings.png` | `/prototype/admin/tutor-earnings.html` |
| **F-16** | Dashboard Analytics | **FR-15** | **US-16** | Display summary cards, pie charts, and line graphs showing user distribution, tutor applications, tutoring requests, payment transactions, tutor payouts, platform commission, and overall platform activity. | `/wireframes/dashboard-analytics.png` | `/prototype/admin/analytics.html` |



## Group Case Mapping
All planned PeerTutor wireframes and final prototype modules are directly mapped to the user stories, MVP features, and functional requirements established in Lab 04. This traceability demonstrates that the prototype screens are not randomly selected but are designed to address the validated needs of students, student tutors, and platform administrators.

The Student module supports tutor discovery, tutor evaluation, tutoring request submission, request tracking, payment, payment history, and reviews. The Tutor module supports tutor application, profile management, tutoring request management, reviews, payment status, and earnings. The Admin module supports user management, tutor application approval, student payment verification, tutor earnings management, and dashboard analytics.

The mapping also supports the complete primary user pathways defined in **FR-02** and ensures that every major screen can be traced to the Lab 04 records, as required by **FR-19**.

## Traceability Summary

- **Student features:** F-01 to F-08
- **Tutor features:** F-09 to F-11
- **Administrator features:** F-12 to F-16
- **User stories covered:** US-01 to US-16
- **Functional requirements supported:** FR-01 to FR-19
- **Future features excluded:** Real-time chat, tutor video introduction, AI study planner, and built-in video tutoring sessions
