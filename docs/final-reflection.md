# Final Reflection

## Project Information

- **Group Name:** TechTitans
- **Project Title:** PeerTutor – Student-to-Student Tutoring Marketplace
- **Target Users:** Rangsit University Students, Student Tutors, and Administrators
- **Platform:** Responsive web-based prototype

## 1. What We Built

We built **PeerTutor**, a responsive student-to-student tutoring marketplace designed for Rangsit University students.

The project addresses the problem of scattered tutor discovery across Facebook groups, LINE chats, friends, classmates, and seniors. PeerTutor brings tutor discovery, tutoring requests, status tracking, payment information, reviews, and platform management into one organized system.

The final prototype contains three role-based pathways.

### Student Pathway

Students can:

- Understand the purpose of PeerTutor from the homepage.
- Select the Student role and access the platform.
- Search tutors by name or subject.
- Filter tutors by major, rating, or hourly rate.
- View detailed tutor profiles.
- Submit tutoring requests.
- Receive submission confirmation.
- Track tutoring-request statuses.
- Complete a simulated payment after tutor approval.
- View payment history and transaction details.
- Leave a review and rating after a completed session.

### Student Tutor Pathway

Student Tutors can:

- Register as tutors.
- Submit tutor applications.
- Create profiles after Administrator approval.
- Manage subjects, availability, experience, and hourly rates.
- Review incoming tutoring requests.
- Approve or reject requests.
- View tutoring schedules and reviews.
- Monitor earnings, payment history, and payment statuses.

### Administrator Pathway

Administrators can:

- Review tutor applications.
- Approve or reject tutor applications.
- Manage user accounts.
- View platform records.
- Verify simulated student payments.
- Record platform commission.
- Transfer simulated tutor earnings.
- Update payment statuses.
- Review dashboard summaries, statistics, and charts.

The prototype was developed with HTML, CSS, and JavaScript. Local storage, JSON, JavaScript objects, and sample records were used to demonstrate data-management functions without requiring a production backend.

## 2. What We Learned About Users

Our problem-discovery activities showed that students need more than a simple list of tutor names. They need enough information to compare tutors confidently before submitting a request.

Important comparison information includes:

- Subjects taught
- Academic qualifications
- Teaching experience
- Availability
- Hourly rate
- Ratings
- Previous student reviews

We also learned that Students, Student Tutors, and Administrators have different goals.

Students need a fast and understandable tutor-discovery process. Student Tutors need tools for managing profiles, requests, schedules, reviews, and earnings. Administrators need oversight of tutor applications, users, transactions, and platform records.

The documented testing evidence indicated that users generally understood:

- The PeerTutor purpose.
- Tutor search and filtering.
- Tutor-profile information.
- Tutoring-request submission.
- Role-based dashboard information.

However, testing also showed that small interface details can affect whether a workflow is completed successfully. For example, if a payment button is difficult to notice, the entire payment workflow can appear incomplete even when the underlying screen is available.

We therefore learned that usability depends not only on whether a feature exists but also on whether users can find, understand, and complete it without assistance.

The Lab 13 updated-prototype dataset is **synthetic sample data prepared for coursework demonstration**. It helped us demonstrate quantitative analysis, but it must not be described as real participant research.

## 3. What We Learned About Requirements

At the beginning of the project, requirements mainly appeared to be a checklist of screens and functions. During implementation, we learned that requirements must remain connected to:

1. The original user problem.
2. A target user or stakeholder.
3. A user story.
4. Acceptance criteria.
5. An MVP feature.
6. A prototype screen or module.
7. Testing evidence.
8. Final implementation evidence.

We also learned that requirement numbering and meanings must remain consistent across all files. Using the wrong requirement meaning in the demo script, testing plan, feature status, or traceability matrix can create confusion even when the prototype itself is correct.

The Requirement Traceability Matrix helped us verify the relationship among:

- 19 functional requirements
- 16 approved user stories
- 19 MVP features
- Prototype screens and modules
- Final screenshots and documentation

We also identified that some requirements are cross-cutting rather than connected to only one user story. These include:

- FR-13: Validation and error prevention
- FR-14: Confirmation and feedback
- FR-16: User-interface consistency
- FR-17: Responsive design
- FR-18: Privacy and responsible data handling
- FR-19: Final prototype traceability

These requirements affect several screens and workflows and therefore require evidence from multiple parts of the prototype.

The project also taught us the importance of controlling the MVP scope. US-17–US-20 were postponed because real-time chat, tutor video introductions, AI study planning, and video tutoring require additional technologies beyond the available time and resources.

## 4. What We Improved After Testing

Testing and prototype review resulted in several interface and workflow improvements.

### Homepage and Navigation

We improved:

- The explanation of the PeerTutor problem and value.
- The visibility of the main actions.
- Role-selection clarity.
- Navigation consistency across pages.
- Links among the homepage, role selection, dashboards, and supporting pages.

### Tutor Discovery

We improved:

- Tutor search by name or subject.
- Filtering by major, rating, and hourly rate.
- Tutor-profile information.
- Availability and price presentation.
- Rating and review visibility.

### Forms and Validation

We improved:

- Required-field indicators.
- Error messages for incomplete submissions.
- Email and password validation.
- Tutoring-request field labels.
- Tutor-application information.
- Submission confirmation messages.

### Status and Payment

We improved:

- Tutoring-request status labels.
- Payment-status labels.
- Confirmation messages after payment actions.
- Payment-history visibility.
- Administrator payment verification.
- Tutor-earnings presentation.

### Dashboards

We improved:

- Student request and session summaries.
- Tutor request, schedule, review, and earnings information.
- Administrator application, account, transaction, and analytics information.
- Dashboard organization and consistent styling.

### Final Testing Improvements

The final testing evidence identified additional improvements requiring final checking:

- Increase the visibility of the Confirm Payment button.
- Add a clearer payment-progress indicator.
- Improve mobile text and control sizes.
- Clarify price labels and optional fields.
- Group preferred date and time fields together.
- Add accepted file-type instructions.
- Distinguish Save, Preview, and Publish actions.
- Separate payment verification, commission, and payout stages.

## 5. What Was Difficult Technically

One of the main technical challenges was creating three connected role-based workflows without a production backend.

The prototype needed to demonstrate changes across the Student, Student Tutor, and Administrator roles. For example:

1. A Student submits a tutoring request.
2. A Student Tutor approves the request.
3. The Student completes a simulated payment.
4. An Administrator verifies the payment.
5. The payment and session statuses are updated.
6. The Tutor receives simulated earnings.
7. The Student leaves a review.

Implementing this complete journey using only frontend technologies and simulated storage required careful control of sample records, navigation, and statuses.

Other technical difficulties included:

- Maintaining consistent navigation across many HTML pages.
- Preventing broken links caused by different folder paths.
- Sharing CSS and JavaScript behavior across role-based screens.
- Creating realistic sample data for requests, users, payments, and reviews.
- Simulating authentication and role-based access.
- Updating request and payment statuses without a backend.
- Preserving locally stored records after navigation.
- Creating responsive forms, tables, and dashboards.
- Preventing tables from overflowing on mobile screens.
- Making buttons and form controls readable on smaller devices.
- Simulating payment verification and tutor payouts responsibly.
- Maintaining consistent requirement IDs across documents.
- Connecting screenshots and GitHub evidence to the correct requirements.

We also needed to communicate clearly that certain functions were simulations. A visual payment interface should not suggest that real money is being processed when no payment gateway is connected.

## 6. What We Would Improve Next

### Short-Term Improvements

Before or immediately after the final presentation, we would:

1. Complete another end-to-end check of all three role pathways.
2. Improve the Confirm Payment button and payment-progress indicator.
3. Retest all key forms on mobile-sized screens.
4. Improve optional-field and price labels.
5. Add clearer upload instructions.
6. Separate Save, Preview, and Publish actions.
7. Separate payment verification, commission, and tutor payout.
8. Improve status colors, explanations, and next-action guidance.
9. Check every prototype and documentation link.
10. Confirm that every screenshot filename matches the repository.

### Production-Level Improvements

A production version would require:

- Secure user authentication.
- Role-based access control.
- A production database.
- Encrypted password storage.
- Real payment-gateway integration.
- Automated payment verification.
- Secure supporting-document storage.
- Email and in-app notifications.
- Administrator audit logs.
- Improved privacy settings.
- Automated testing.
- Security testing and vulnerability assessment.
- Scalable deployment and monitoring.

### Future Features

| Story ID | Future Feature | Improvement Direction |
|---|---|---|
| US-17 | Real-time in-app chat | Add secure Student-to-Tutor messaging after validating the core request workflow. |
| US-18 | Tutor video introductions | Add controlled video uploads after implementing secure media storage. |
| US-19 | AI tutor and personalized study plans | Develop after collecting sufficient learning data and validating demand. |
| US-20 | Video tutoring sessions | Integrate video-conferencing services after the marketplace has been successfully adopted. |

### Venture Expansion

The initial prototype focuses on Rangsit International College. A future version could expand to:

1. Other Rangsit University programs.
2. Thai-language students and tutors.
3. Additional university campuses.
4. Other higher-education institutions.


## 7. Individual Contributions

| Member | Contribution | Evidence Link/Commit/Issue |
|---|---|---|
| Thin Thiri Naing | Led product planning and venture direction; prepared the sales scenario, value proposition, business perspective, final improvement priorities, and pitch outline. | [`docs/sales-scenario.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/6a48fcf82bcbf498e1e465b73c1c1fe4fef6f9f3/docs/sales-scenario.md)<br>[`docs/final-demo-script.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/6a48fcf82bcbf498e1e465b73c1c1fe4fef6f9f3/docs/final-demo-script.md)<br>[`docs/final-improvement-list.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/6a48fcf82bcbf498e1e465b73c1c1fe4fef6f9f3/docs/final-improvement-list.md)<br>[`pitch/demo-outline.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/6a48fcf82bcbf498e1e465b73c1c1fe4fef6f9f3/pitch/demo-outline.md)<br>[`docs/requirement-traceability-matrix.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/6a48fcf82bcbf498e1e465b73c1c1fe4fef6f9f3/docs/requirement-traceability-matrix.md)|
| Shinn Thant Maung | Led validation activities; prepared the user-testing plan, testing structure, synthetic sample dataset, results analysis, usability findings, and evidence-based decision. | `docs/user-testing-plan.md`<br>`docs/user-testing-results.md`<br>`docs/feature-implementation-status.md`<br>`data/user-testing-results.csv` |
| Thae Su Win Thu | Led UX/UI and technical implementation; designed and developed prototype screens, navigation, responsive layouts, interactions, demo flow, and user-testing evidence image. | `prototype/PeerTutor/`<br>`prototype/final-demo-link.md`<br>`screenshots/demo-flow.png`<br>`screenshots/user-testing-evidence.png` |
| Yan Naing Kyaw | Led documentation and technical support; maintained the README, weekly logbooks, final prototype links, implementation status, requirement traceability, and final project documentation. | `README.md`<br>`docs/weekly-logbook.md`<br>`docs/final-prototype-report.md` |


## Final Team Reflection

The PeerTutor project helped us understand that building a technology venture requires more than creating an attractive interface. A successful prototype must begin with a real user problem, translate that problem into testable requirements, implement the most important workflows, collect evidence, and improve based on what the evidence shows.

We also learned the importance of teamwork. Product planning, validation, interface design, implementation, testing, and documentation depended on one another. A change to one requirement could affect the user stories, prototype screens, testing tasks, screenshots, and final demonstration.

Although PeerTutor is still an academic prototype, it successfully communicates the proposed solution and demonstrates the main value for Students, Student Tutors, and Administrators. The final prototype provides a strong foundation for future development into a secure and scalable tutoring marketplace.
