# Lab 04 - User Stories and Acceptance Criteria
## User Story Format
As a [user role], I want to [goal/action], so that [benefit/value].
## User Stories
| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to access a homepage that clearly explains PeerTutor and lets me start searching for tutors easily. | FR-01 | Must | Given the user opens the website, when the homepage loads, then the project title, description, and "Find a Tutor" and "Get Started Now" buttons are displayed. | Homepage |
| US-02 | Student | As a student, I want to search and filter tutors by subject, name, major, rating, and price so that I can quickly find a suitable tutor. | FR-02, FR-06 | Must | Given I enter search keywords or filters, when I click Search, then only matching tutors are displayed. | Tutor Search Page |
| US-03 | Student | As a student, I want to view a tutor's profile so that I can evaluate whether the tutor matches my learning needs. | FR-07 | Must | Given I select a tutor, when the profile opens, then the tutor's subjects, experience, availability, rating, reviews, and price are displayed. | Tutor Profile |
| US-04 | Student | As a student, I want to submit a tutoring request form so that I can request help for my subject. | FR-03 | Must | Given I complete all required fields, when I submit the form, then my tutoring request is saved successfully. | Request Form |
| US-05 | Student | As a student, I want to receive a confirmation message and track my tutoring request status so that I know whether my request is pending, confirmed, completed, or cancelled. | FR-08, FR-11 | Must | Given I submit a request, when the process finishes, then a success message appears and the request status is visible. | Confirmation & Status Page |
| US-06 | Student | As a student, I want to leave a rating and review after my tutoring session so that I can help future students choose reliable tutors. | FR-02 | Should | Given a tutoring session is completed, when I submit a review, then the rating and review appear on the tutor's profile. | Review Page | 
| **US-07** | Tutor | As a tutor, I want to register as a tutor and submit my tutor application, so that the admin can review my application before I am allowed to create my public tutor profile. | FR-03, FR-08 | Must | **Given** I have created a tutor account, **when** I submit my tutor application form, **then** the system saves my application and displays its status as **Pending** until the admin reviews it. | Tutor Registration Page & Tutor Dashboard |
| **US-08** | Tutor | As a tutor, I want to check the status of my tutor application, so that I know whether my application has been **Pending**, **Approved**, or **Rejected**. | FR-08 | Must | **Given** I have submitted my tutor application, **when** I open my dashboard, **then** I can view my current application status (Pending, Approved, or Rejected). | Tutor Dashboard |
| **US-09** | Tutor | As a tutor, I want to create and publish my tutor profile after my application is approved, so that students can find me and request tutoring sessions. | FR-05, FR-07 | Must | **Given** my tutor application has been approved, **when** I complete and save my tutor profile, **then** my profile is displayed in the Student Tutor Listing page. | Tutor Profile Page & Tutor Listing |
| **US-10** | Tutor | As a tutor, I want to manage incoming tutoring requests and monitor their status, so that I can organize my tutoring sessions efficiently. | FR-05, FR-08 | Must | **Given** students have submitted tutoring requests, **when** I open my Tutor Dashboard, **then** I can view all incoming requests and their current statuses (Pending, Confirmed, Completed, or Cancelled). | Tutor Dashboard |
| **US-11** | Admin | As an administrator, I want to manage user accounts so that I can maintain a safe and trustworthy PeerTutor platform. | FR-05, FR-07, FR-09 | Must | **Given** I access the Admin Dashboard, **when** I view user accounts or suspend an account that violates platform rules, **then** the account is restricted from using the platform until further review. | Admin User Management Page |
| **US-12** | Admin | As an administrator, I want to approve or reject tutor registration applications so that only qualified tutors appear in the tutor listing. | FR-09 | Must | **Given** a tutor application has been submitted, **when** I approve or reject the application, **then** its status is updated accordingly and only approved tutors become visible in the Tutor Listing page. | Admin Approval Page |
| **US-13** | Admin | As an administrator, I want to view dashboard summaries and analytics so that I can monitor tutor registrations, tutoring requests, platform usage, and overall system activity. | FR-12 | Should | **Given** platform data exists, **when** I open the Admin Dashboard, **then** I can view summary cards, pie charts, and line graphs showing tutor registrations, tutoring requests, and platform statistics. | Admin Dashboard |
## Acceptance Criteria Checklist
A good acceptance criterion should be:
- testable;
- observable in the final prototype;
- connected to a requirement;
- connected to user evidence;
- not too vague.
## Rejected / Future User Stories
| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-14 | Real-time in-app chat requires additional backend services, real-time messaging technology, and notification management, making it too complex for the first MVP. | Implement after the core tutoring request and approval workflow has been validated. |
| US-15 | Online payment requires payment gateway integration, transaction security, and financial management, which are outside the scope of the course prototype. | Add when the platform supports paid tutoring sessions in a production version. |
| US-16 | Tutor video introduction uploads require media storage, video streaming, and increased server resources. | Include after basic tutor profiles have been successfully adopted by users. |
| US-17 | AI Tutor with personalized study plans requires AI models, recommendation algorithms, and significantly more development time than available for the MVP. | Develop after collecting sufficient student learning data and validating demand for personalized recommendations. |
| US-18 | Video tutoring sessions require video conferencing infrastructure and stable real-time communication, which exceeds the scope of the semester project. | Add in a future version after the tutoring marketplace has been successfully validated and adopted. | 


