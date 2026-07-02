# System Requirements

## Minimum Final Prototype Functionalities

These requirements define the minimum prototype functionalities that each ICT105 student group must address in the final prototype. The requirements are designed to be platform-independent and can align with different project topics, such as booking systems, reporting systems, inventory systems, learning platforms, dashboards, marketplace concepts, reminder systems, service request systems, or other IT-based solutions.

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
| **FR-09** | **Admin or manager function** | The prototype must include at least one admin/manager-side function. Example: update status, approve request, edit record, delete invalid record, assign task, or manage submitted data. |
| **FR-10** | **Basic validation and error prevention** | The system must prevent incomplete or incorrect input. Example: required fields, valid email format, date selection, duplicate warning, confirmation message, or simple error message. |
| **FR-11** | **Confirmation or feedback message** | After a user submits or updates data, the prototype must show feedback. Example: “Submission successful,” “Request received,” “Status updated,” or “Please complete required fields.” |
| **FR-12** | **Dashboard, summary, or simple analytics view** | The prototype must include at least one summary screen. Example: total reports, pending requests, number of users, most common category, monthly submissions, inventory summary, or task status overview. |
| **FR-13** | **Basic user interface consistency** | Screens must use consistent layout, navigation, labels, buttons, and visual structure. The prototype should look like one complete system, not disconnected pages. |
| **FR-14** | **Mobile-friendly or responsive design consideration** | The prototype must show that the interface can reasonably work on a laptop or mobile screen, depending on the selected platform. |
| **FR-15** | **Basic privacy and responsible data handling** | Students must avoid unnecessary sensitive data. If user data is collected, the prototype must show basic privacy awareness, such as limited fields, masked sample data, or clear data-use explanation. |
| **FR-16** | **Final prototype traceability** | Every major prototype screen or feature must connect back to the Lab 04 requirements, user stories, and MVP feature list. Students must be able to explain why each feature exists. |

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

