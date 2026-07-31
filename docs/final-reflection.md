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

## 7. Individual Contributions

| Member | Contribution | Evidence Link/Commit/Issue |
|---|---|---|
| Thin Thiri Naing | Led product planning and venture direction; prepared the sales scenario, value proposition, business perspective, final improvement priorities, and pitch outline. | `docs/sales-scenario.md`<br>`docs/final-improvement-list.md`<br>`pitch/demo-outline.md`<br>Lab 13 Issues #1, #5, and #10 |
| Shinn Thant Maung | Led validation activities; prepared the user-testing plan, testing structure, synthetic sample dataset, results analysis, usability findings, and evidence-based decision. | `docs/user-testing-plan.md`<br>`docs/user-testing-results.md`<br>`data/user-testing-results.csv`<br>Lab 13 Issues #3, #4, and #11 |
| Thae Su Win Thu | Led UX/UI and technical implementation; designed and developed prototype screens, navigation, responsive layouts, interactions, demo flow, and user-testing evidence image. | `prototype/PeerTutor/`<br>`docs/demo-script.md`<br>`screenshots/demo-flow.png`<br>`screenshots/user-testing-evidence.png`<br>Lab 13 Issues #2, #7, and #8 |
| Yan Naing Kyaw | Led documentation and technical support; maintained the README, weekly logbooks, final prototype links, implementation status, requirement traceability, and final project documentation. | `README.md`<br>`docs/weekly-logbook.md`<br>`prototype/final-demo-link.md`<br>`docs/feature-implementation-status.md`<br>`docs/requirement-traceability-matrix.md`<br>Lab 13 Issues #6, #9, and #12 |

## Final Team Reflection

The PeerTutor project helped us understand that building a technology venture requires more than creating an attractive interface. A successful prototype must begin with a real user problem, translate that problem into testable requirements, implement the most important workflows, collect evidence, and improve based on what the evidence shows.

We also learned the importance of teamwork. Product planning, validation, interface design, implementation, testing, and documentation depended on one another. A change to one requirement could affect the user stories, prototype screens, testing tasks, screenshots, and final demonstration.

Although PeerTutor is still an academic prototype, it successfully communicates the proposed solution and demonstrates the main value for Students, Student Tutors, and Administrators. The final prototype provides a strong foundation for future development into a secure and scalable tutoring marketplace.
