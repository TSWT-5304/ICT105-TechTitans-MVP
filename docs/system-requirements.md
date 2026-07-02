# System Requirements

## Minimum Final Prototype Functionalities

These requirements define the minimum prototype functionalities for the **PeerTutor – Student-to-Student Tutoring Marketplace**. The prototype aims to help university students easily find peer tutors while allowing student tutors to promote their tutoring services through a centralized platform.

| Req ID | Minimum Prototype Functionality | What Students Must Show in Final Prototype |
| --- | --- | --- |
| **FR-01** | **Clear problem-specific homepage or landing screen** | Homepage must show the **PeerTutor** name, the target user (Rangsit University students), the problem (scattered tutor discovery), and two primary actions: "Find a Tutor" and "Get Started Now". |
| **FR-02** | **Primary user pathway** | Prototype must show the complete student journey: open homepage → search tutor by name or subject → browse tutor list → view tutor profile → submit request form → receive confirmation → check status → tutoring session completed → leaves a review and rating. |
| **FR-03** | **User input or data submission feature** | Two forms required: (1) **Tutoring Request Form** — student submits subject, preferred date/time, and a note; (2) **Tutor Registration Form** — containing their educational background, teaching experience, skills, and supporting information. |
| **FR-04** | **Data storage or record management** | All tutoring requests and tutor registrations must be stored and retrievable. Acceptable: Firebase, Airtable, Google Sheets, or database. |
| **FR-05** | **View records / information list** | (1) Student View: Tutor Listing Page — all approved tutors visible and their request status; (2) Tutor View: incoming student requests, student reviews and ratings; (3) Admin view: tutor applications, user accounts, and platform records. |
| **FR-06** | **Search, filter, or category function** | Students must be able to search tutors by name or subject and apply filters such as major, price and rating. |
| **FR-07** | **Detail view for each record** | Students can view tutor profiles and tutoring request details. Tutors can view student requests and booking details. Admins can view all user profiles, tutor applications, user activities, and request statuses. |
| **FR-08** | **Status or progress tracking** | Both student requests and Tutoring request forms must display a status: Pending, Confirmed, Completed, or Cancelled. Students can view their own request history and current status. Tutors can view their tutoring request forms status and student requests. |
| **FR-09** | **Admin or manager function** | Admin panel must allow: update request status, approve or reject tutor registrations,manage user accounts, delete invalid submissions and oversee platform data. |
| **FR-10** | **Basic validation and error prevention** | The system validates required fields, email format, password requirements and mandatory tutor application information. Duplicate tutor registration warning must be shown. Confirmation prompts and error messages are displayed for incomplete or invalid submissions. |
| **FR-11** | **Confirmation or feedback message** | After form submission, users must see a clear message: "Request submitted successfully" or "Tutor profile submitted for review." |
| **FR-12** | **Dashboard, summary, or simple analytics view** | Student Dashboard displays tutoring requests and request status. Tutor Dashboard displays tutoring requests, schedules, and profile information. Admin dashboard must show: summary statistics and charts showing platform usage, tutor applications, user distribution, and survey results. |
| **FR-13** | **Basic user interface consistency** | All pages use a consistent layout, navigation bar, color scheme, typography, icons, buttons, and dashboard design to provide a unified user experience across the platform. |
| **FR-14** | **Mobile-friendly or responsive design consideration** | Prototype must be usable on both laptop and mobile screen. Key forms (request, registration) must work on a phone-sized viewport. |
| **FR-15** | **Basic privacy and responsible data handling** | Collect only necessary fields. Use sample/masked data in the demo. No sensitive personal data beyond name, email, subject, and availability. Sensitive information such as passwords is protected, and personal information is displayed only when appropriate. |
| **FR-16** | **Final prototype traceability** | Every major screen and feature—including the homepage, authentication, tutor application, tutor profile, tutor search, tutoring request, dashboards, reviews, and admin management—can be traced back to the project's user stories, functional requirements, and MVP feature list. |

---

## Minimum Technical Requirement

The final prototype must not be only a static idea or presentation. It must be an interactive prototype where users can click, submit, view, search/filter, update, or simulate the main workflow.

Acceptable platforms may include:

| Platform Type | Acceptable Prototype Form |
| --- | --- |
| Web app | HTML/CSS/JavaScript, PHP/MySQL, React, Laravel, or similar |
| Mobile app prototype | Figma clickable prototype, Flutter, React Native, MIT App Inventor, or similar |
| Dashboard system | Power BI, Tableau, Google Looker Studio, Excel dashboard, or web dashboard |
| Low-code/no-code system | Google Forms + Sheets, Airtable, Notion, Glide, AppSheet, Bubble, or similar |
| Data-driven prototype | Spreadsheet/database-backed prototype with forms, views, filters, and dashboard |
| UI/UX prototype | Figma prototype, but it must include realistic user flow, data screens, status screens, and interaction logic |

