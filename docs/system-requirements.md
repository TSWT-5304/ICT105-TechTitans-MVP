# System Requirements

## Minimum Final Prototype Functionalities

These requirements define the minimum prototype functionalities for the **PeerTutor – Student-to-Student Tutoring Marketplace**. The prototype aims to help university students easily find peer tutors while allowing student tutors to promote their tutoring services through a centralized platform.

| Req ID | Minimum Prototype Functionality | What Students Must Show in Final Prototype |
| --- | --- | --- |
| **FR-01** | **Clear problem-specific homepage or landing screen** | Homepage must show the **PeerTutor** name, the target user (Rangsit University students), the problem (scattered tutor discovery), and two primary actions: "Find a Tutor" and "Get Started Now". |
| **FR-02** | **Primary user pathway** | The prototype must demonstrate the complete workflows for both primary users. **Student workflow:** Homepage → Search Tutor → View Tutor Profile → Submit Tutoring Request → Receive Confirmation → View Request Status → Make Payment (after approval) → Admin Verifies Payment → Session Confirmed → Tutoring Session → Leave Review & Rating. **Tutor workflow:** Register as Tutor → Submit Tutor Application → Receive Approval → Create Tutor Profile → Receive Tutoring Requests → Approve or Reject Requests → Conduct Tutoring Session → Receive Payment → View Reviews & Payment Status. |
| **FR-03** | **User input or data submission feature** | Two forms required: (1) **Tutoring Request Form** — student submits subject, preferred date/time, and a note; (2) **Tutor Registration Form** — containing their educational background, teaching experience, skills, and supporting information. |
| **FR-04** | **Data storage or record management** |All tutor applications, tutoring requests, payment records, and platform records must be stored and retrievable. Acceptable: Google Forms + Google Sheets, JSON, or Local Storage. |
| **FR-05** | **View records / information list** | (1) Student View: Tutor Listing Page — all approved tutors visible, their request status, and payment history; (2) Tutor View: incoming student requests, student reviews and ratings, payment status, and earnings; (3) Admin View: tutor applications, user accounts, payment transactions, and platform records. |
| **FR-06** | **Search, filter, or category function** | Students must be able to search tutors by name or subject and apply filters such as major, price and rating. |
| **FR-07** | **Online payment** | Students must be able to make payment after a tutor approves a tutoring request. The payment page must display tutoring session details, payment amount, payment method, and a confirmation message after successful payment. |
| **FR-08** | **Detail view for each record** | Students can view tutor profiles, tutoring request details, and payment details. Tutors can view student request details, tutoring session details, and payment information. Admins can view tutor applications, user profiles, payment transactions, user activities, and overall platform records. |
| **FR-09** | **Payment history** | Students and tutors must be able to view their payment history and transaction details through their dashboards. |
| **FR-10** | **Status or progress tracking** | Students can track tutoring request statuses (Pending, Approved, Rejected, Completed, or Cancelled) and payment statuses (Pending, Paid, Verified, or Transferred). Tutors can monitor tutoring request statuses and payment statuses through their dashboard.|
| **FR-11** | **Admin or manager function** | Admin panel must allow administrators to approve or reject tutor applications, manage user accounts, verify student payments, record platform commission, transfer tutor earnings, delete invalid submissions, and oversee platform data. |
| **FR-12** | **Payment management** | Admins must be able to verify student payments, record the platform commission, transfer tutor earnings after the tutoring session is completed, and update payment statuses. Tutors can view their payment status through the Tutor Dashboard. |
| **FR-13** | **Basic validation and error prevention** | The system validates required fields, email format, password requirements and mandatory tutor application information. Duplicate tutor registration warning must be shown. Confirmation prompts and error messages are displayed for incomplete or invalid submissions. |
| **FR-14** | **Confirmation or feedback message** | After completing important actions, users must receive clear confirmation messages such as "Request submitted successfully", "Tutor application submitted successfully", "Payment completed successfully", or "Payment verified successfully". |
| **FR-15** | **Dashboard, summary, or simple analytics view** | Student Dashboard displays tutoring request status, upcoming sessions, past sessions, and payment history. Tutor Dashboard displays incoming requests, tutoring schedules, reviews, earnings, and payment status. Admin Dashboard displays tutor applications, user accounts, user distribution, payment transactions, pending tutor payouts, platform commission, summary statistics, and charts showing overall platform activity. |
| **FR-16** | **Basic user interface consistency** | All pages use a consistent layout, navigation bar, color scheme, typography, icons, buttons, and dashboard design to provide a unified user experience across the platform. |
| **FR-17** | **Mobile-friendly or responsive design consideration** | Prototype must be usable on both laptop and mobile screen. Key forms (request, registration) must work on a phone-sized viewport. |
| **FR-18** | **Basic privacy and responsible data handling** | Collect only necessary fields. Use sample/masked data in the demo. No sensitive personal data beyond name, email, subject, and availability. Sensitive information such as passwords is protected, and personal information is displayed only when appropriate. Only necessary transaction information should be stored in payment records. |
| **FR-19** | **Final prototype traceability** | Every major screen and feature—including the homepage, tutor application, tutor profile, tutor search, tutoring request, payment, dashboards, reviews, payment management, and admin functions—must be traceable to the project's user stories, functional requirements, and MVP feature list. |

---

## Minimum Technical Requirement

The final prototype must not be only a static idea or presentation. It must be an interactive web application where students can search for tutors, view tutor profiles, register as tutors, submit tutoring requests, simulate the complete tutoring process and payment process.

Acceptable platforms may include:

| Platform Type | Acceptable Prototype Form |
| --- | --- |
| Web app | HTML, CSS, JavaScript |
| UI/UX Prototype | Figma clickable prototype with tutor search, tutor profiles, tutor registration, tutoring request, and user flow |
| Backend Simulation | Google Forms for data collection, Google Sheets for data storage, JavaScript for processing and prototype interactions |
| Database | Google Sheets (primary data storage) |
| Version Control | GitHub Repository |
| Development Environment | Visual Studio Code |
| Responsive Design | Desktop and mobile web browsers | 

