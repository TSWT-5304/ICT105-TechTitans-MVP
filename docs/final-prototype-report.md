# Final Prototype Report

## 1. Project Title

**PeerTutor – Student-to-Student Tutoring Marketplace**

- **Group Name:** TechTitans
- **Target Institution:** Rangsit University
- **Initial MVP Scope:** Rangsit International College
- **Platform:** Responsive web-based prototype
- **GitHub Repository:** [ICT105-TechTitans-MVP](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/)
- **Final Prototype:** [Open PeerTutor Prototype](https://tswt-5304.github.io/ICT105-TechTitans-MVP/prototype/PeerTutor/html/index.html)
- **Landing Page:** [Open PeerTutor Landing Page](https://tswt-5304.github.io/ICT105-TechTitans-MVP/landing-page/html/index.html)

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| Thin Thiri Naing | Product Lead | Defined the product direction, sales scenario, business value, final improvement priorities, and final pitch structure. | `docs/sales-scenario.md`<br>`docs/final-improvement-list.md`<br>`pitch/demo-outline.md` |
| Shinn Thant Maung | Validation Lead | Prepared the testing plan, organized testing data, analyzed testing results, and documented validation evidence and metrics. | `docs/user-testing-plan.md`<br>`docs/user-testing-results.md`<br>`data/user-testing-results.csv` |
| Thae Su Win Thu | UX/UI Lead and Technical Lead | Designed and developed prototype screens, navigation, responsive layouts, user interactions, demonstration flow, and visual testing evidence. | `prototype/PeerTutor/`<br>`docs/demo-script.md`<br>`screenshots/demo-flow.png`<br>`screenshots/user-testing-evidence.png` |
| Yan Naing Kyaw | Documentation Lead and Technical Support | Maintained project documentation, README updates, weekly logbooks, final links, feature status, and requirement traceability. | `README.md`<br>`docs/weekly-logbook.md`<br>`prototype/final-demo-link.md`<br>`docs/requirement-traceability-matrix.md` |

## 3. Problem Background

The PeerTutor project began with the problem that Rangsit University students often search for academic tutors through scattered and informal channels such as Facebook groups, LINE chats, friends, classmates, and seniors.

Although these channels can connect students with tutors, the information is often incomplete, inconsistent, or difficult to compare. Students may not be able to confirm a tutor’s qualifications, subjects, teaching experience, availability, hourly rate, ratings, or previous student feedback before making contact.

The scattered process also makes it difficult to manage tutoring requests. Students may need to communicate separately with tutors to ask about schedules, prices, request status, payment, and session confirmation. Tutors must also manage requests manually, while no centralized administrator is available to approve tutors, verify payments, or oversee platform records.

During the problem-discovery and validation activities, the team identified the need for a centralized student-to-student tutoring marketplace. The proposed solution needed to make tutor discovery more organized, allow students to compare approved tutors, support structured tutoring requests, display progress statuses, and provide role-specific management functions.

PeerTutor was therefore developed to connect Students, Student Tutors, and Administrators through one structured platform.

## 4. Target Users

### Students

The primary users are Rangsit University students who need academic support. They require a simple way to:

- Search for tutors by name or subject.
- Filter tutors by major, price, or rating.
- Compare qualifications, availability, reviews, and hourly rates.
- Submit structured tutoring requests.
- Track request and payment statuses.
- View payment history.
- Leave reviews and ratings after completed sessions.

### Student Tutors

Student Tutors are qualified students who want to share their knowledge and earn income through tutoring. They require a way to:

- Register and submit a tutor application.
- Create a public tutor profile after approval.
- Manage subjects, experience, availability, and hourly rates.
- Review incoming tutoring requests.
- Approve or reject requests.
- Monitor schedules, reviews, earnings, and payment statuses.

### Administrators

Administrators are responsible for maintaining the safety, organization, and reliability of PeerTutor. They require tools to:

- Review and approve or reject tutor applications.
- Manage user accounts.
- View platform records.
- Verify student payments.
- Record platform commission.
- Transfer simulated tutor earnings.
- Monitor dashboard summaries, statistics, and overall platform activity.

## 5. Evidence Summary

### Problem-Discovery Evidence

The customer-problem-discovery activities identified that:

- Tutor information is scattered across Facebook, LINE, personal contacts, and student communities.
- Students find it difficult to compare tutor qualifications, subjects, availability, ratings, and prices.
- Users require clearer information before deciding to submit a tutoring request.
- Tutors require an organized method for managing profiles and incoming requests.
- Administrative approval can improve trust by preventing unapproved tutors from appearing publicly.
- A centralized platform can connect tutor discovery, requests, status tracking, payment information, and reviews.

### Lab 08 Validation Evidence

According to the documented Lab 08 validation dataset:

| Metric | Result |
|---|---:|
| Test-user profiles | 10 |
| Students | 5 |
| Student Tutors | 3 |
| Administrators | 2 |
| Completed tasks | 63 of 67 |
| Task-success rate | 94.0% |
| Average feedback score | 4.5 / 5 |
| Average interest level | 4.7 / 5 |
| Major usability issues | 4 |

The documented results indicated that users generally understood the main PeerTutor concept and workflows. Tutor search, tutor profiles, and tutoring requests were among the most useful features.

### Lab 13 Updated-Prototype Evidence

The Lab 13 dataset contains **synthetic sample data prepared for coursework demonstration**. It must not be represented as actual participant research.

| Metric | Synthetic Sample Result |
|---|---:|
| Sample testers | 10 |
| Task records | 125 |
| Fully completed tasks | 119 |
| Partially completed tasks | 5 |
| Not completed tasks | 1 |
| Full-completion rate | 95.2% |
| Average feedback score | 4.58 / 5 |

The synthetic results were used to demonstrate how the team would analyze the updated prototype and convert usability findings into an improvement plan.

## 6. Final Prototype Overview

The final PeerTutor prototype is a responsive student-to-student tutoring marketplace with three role-based pathways.

### Student Workflow

The Student pathway demonstrates:

1. Opening the PeerTutor homepage.
2. Selecting the Student role.
3. Searching and filtering tutors.
4. Opening and comparing tutor profiles.
5. Submitting a tutoring request.
6. Receiving a request confirmation.
7. Viewing request status.
8. Making a simulated payment after tutor approval.
9. Viewing payment status and payment history.
10. Attending the represented tutoring session.
11. Leaving a review and rating.

### Student Tutor Workflow

The Student Tutor pathway demonstrates:

1. Registering as a tutor.
2. Submitting a tutor application.
3. Receiving administrator approval.
4. Creating and managing a public tutor profile.
5. Viewing incoming tutoring requests.
6. Approving or rejecting requests.
7. Reviewing tutoring schedules.
8. Viewing reviews, earnings, payment history, and payment status.

### Administrator Workflow

The Administrator pathway demonstrates:

1. Reviewing tutor applications.
2. Approving or rejecting tutor applications.
3. Managing user accounts.
4. Viewing platform records.
5. Verifying simulated student payments.
6. Recording platform commission.
7. Transferring simulated tutor earnings.
8. Updating payment statuses.
9. Reviewing dashboard statistics and platform activity.

## 7. Requirement Traceability Summary

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Problem-specific Homepage and Landing Page | US-01 | `screenshots/homepage.png`<br>`screenshots/landing-page.png` | Completed |
| FR-02 | Student and Student Tutor end-to-end pathways | US-02, US-04–US-15 | `screenshots/demo-flow.png` | Completed |
| FR-03 | Tutoring Request Form, Tutor Application, and Review Form | US-04, US-08, US-09 | `screenshots/request-form.png`<br>`screenshots/tutor-registration.png` | Completed |
| FR-04 | Local storage, JSON, JavaScript data, and simulated records | US-09, US-10 | `prototype/PeerTutor/` | Completed — Simulated |
| FR-05 | Tutor Listing, request lists, user lists, and role dashboards | US-10, US-11, US-13 | `screenshots/record-list.png` | Completed |
| FR-06 | Tutor search and filtering by subject, name, major, rating, and price | US-02 | `screenshots/tutor-search.png` | Completed |
| FR-07 | Simulated online payment and payment confirmation | US-06 | `screenshots/student-payment.png` | Completed — Simulated |
| FR-08 | Tutor Profile, request details, reviews, applications, and payment details | US-03, US-08, US-10 | `screenshots/tutor-profile.png`<br>`screenshots/detail-view.png` | Completed |
| FR-09 | Student and Tutor Payment History | US-07, US-12 | `screenshots/payment-history.png` | Completed |
| FR-10 | Request and payment status tracking | US-05, US-11 | `screenshots/student-dashboard.png`<br>`screenshots/tutor-dashboard.png` | Completed |
| FR-11 | Tutor approval, user management, payment verification, and administration | US-13, US-14, US-15 | `screenshots/admin-dashboard.png`<br>`screenshots/admin-view.png` | Completed |
| FR-12 | Payment verification, commission, tutor earnings, and payouts | US-12, US-15 | `screenshots/admin-payment.png`<br>`screenshots/tutor-payment.png` | Completed — Simulated |
| FR-13 | Form validation, error prevention, and duplicate warnings | US-04, US-09 | `screenshots/input-form.png` | Completed |
| FR-14 | Request, application, payment, and verification confirmations | US-04, US-06, US-09, US-11, US-14, US-15 | `screenshots/payment-confirmation.png` | Completed |
| FR-15 | Student, Tutor, and Admin dashboards with summaries and analytics | US-05, US-12, US-16 | `screenshots/student-dashboard.png`<br>`screenshots/tutor-dashboard.png`<br>`screenshots/admin-dashboard.png` | Completed |
| FR-16 | Consistent navigation, layout, typography, colors, buttons, and forms | US-01–US-16 | `screenshots/homepage.png`<br>`screenshots/demo-flow.png` | Completed |
| FR-17 | Responsive laptop and mobile-sized layouts | US-01, US-02, US-04, US-09 | `screenshots/responsive-mobile.png` | Completed |
| FR-18 | Privacy notice, masked data, data minimization, and responsible handling | US-01–US-16 | `docs/privacy-and-data-protection-policy.md`<br>`screenshots/user-testing-evidence.png` | Completed |
| FR-19 | Traceability among requirements, stories, features, screens, and evidence | US-01–US-16 | `docs/requirement-traceability-matrix.md`<br>`screenshots/demo-flow.png` | Completed |

### Traceability Result

| Item | Result |
|---|---:|
| Functional requirements implemented | 19 of 19 |
| Approved user stories represented | 16 of 16 |
| Future user stories excluded from MVP | 4 |
| Requirements with prototype evidence | 19 of 19 |
| Final traceability status | Complete |

## 8. Data Handling

PeerTutor collects and displays only the information required to demonstrate the tutoring marketplace workflows.

### User Information

The prototype may contain:

- User ID
- Name
- Email address
- User role
- Account status

### Tutor Application Information

The tutor-application process may contain:

- Educational background
- Teaching experience
- Subjects and skills
- Supporting information
- Application status
- Administrator decision

### Tutor Profile Information

Tutor profiles may display:

- Tutor name
- Subjects
- Major
- Qualifications
- Teaching experience
- Availability
- Hourly rate
- Rating
- Student reviews

### Tutoring Request Information

Tutoring requests may contain:

- Student and tutor identifiers
- Subject
- Preferred date and time
- Optional note
- Request status
- Session information

### Payment Information

Simulated payment records may contain:

- Transaction ID
- Tutoring-session details
- Payment amount
- Payment method
- Payment date
- Payment status
- Platform commission
- Tutor earnings

### Data Operations

The prototype demonstrates the following operations:

- Creating tutor applications and tutoring requests.
- Storing records using local storage, JavaScript objects, JSON, or simulated data.
- Displaying tutor, request, user, payment, and review records.
- Searching tutors by name or subject.
- Filtering tutors by major, price, and rating.
- Updating application, request, and payment statuses.
- Deleting or restricting invalid records through administrator actions.
- Displaying role-specific dashboard summaries.

### Responsible Data Handling

- Only necessary sample or masked information is used.
- No real passwords or sensitive financial information is displayed.
- Payment functions do not process real transactions.
- Personal information is displayed only where appropriate for the selected role.
- Synthetic testing records are clearly identified as coursework sample data.
- Clearing browser data may remove locally stored demonstration records.

## 9. Validation and User Testing Results

The user-testing activities covered the three main user roles.

### Student Testing

Student tasks included:

- Understanding the homepage.
- Selecting a role and entering the platform.
- Searching and filtering tutors.
- Viewing tutor profiles.
- Submitting tutoring requests.
- Viewing request statuses.
- Completing the simulated payment process.
- Viewing payment history.
- Leaving reviews and ratings.

### Student Tutor Testing

Student Tutor tasks included:

- Registering as a tutor.
- Submitting a tutor application.
- Creating and updating a tutor profile.
- Viewing incoming tutoring requests.
- Approving or rejecting requests.
- Viewing schedules, reviews, earnings, and payment statuses.

### Administrator Testing

Administrator tasks included:

- Reviewing tutor applications.
- Approving or rejecting applicants.
- Managing user accounts.
- Verifying simulated payments.
- Recording platform commission.
- Updating tutor payouts.
- Reviewing dashboard analytics.

### Main Lessons

The documented evidence indicated that:

- The PeerTutor purpose and main role pathways were generally understandable.
- Tutor search, filters, and tutor profiles supported tutor comparison.
- Structured tutoring requests improved the organization of the Student workflow.
- Role-specific dashboards helped users understand requests, payments, and activities.
- Payment actions required stronger visual guidance.
- Mobile readability required final checking.
- Optional fields and price labels needed clearer wording.
- Upload instructions needed to identify accepted file types.
- Save, Preview, and Publish actions needed clearer separation.
- Payment verification, platform commission, and tutor payout should appear as separate stages.

### Evidence-Based Decision

**Decision: Ready for final improvement and Lab 14 demonstration.**

The main workflows can be demonstrated successfully. The identified usability improvements affect clarity and presentation quality but do not prevent the team from demonstrating the PeerTutor concept and intended value.

## 10. Startup/Product Metrics

The team used prototype and validation metrics to evaluate whether the product concept and workflows were understandable.

| Metric | Purpose | Documented Result |
|---|---|---:|
| Test-user profiles | Measure role coverage | 10 |
| Student coverage | Validate the primary user workflow | 5 |
| Student Tutor coverage | Validate tutor registration and request management | 3 |
| Administrator coverage | Validate approval and payment management | 2 |
| Lab 08 task-success rate | Evaluate earlier MVP usability | 94.0% |
| Lab 08 average feedback score | Measure overall usability | 4.5 / 5 |
| Lab 08 average interest level | Measure potential willingness to use PeerTutor | 4.7 / 5 |
| Lab 13 synthetic full-completion rate | Demonstrate updated-prototype analysis | 95.2% |
| Lab 13 synthetic average rating | Demonstrate quantitative feedback analysis | 4.58 / 5 |
| Requirement coverage | Measure implementation traceability | 19 of 19 |
| Approved user-story coverage | Measure user-story implementation | 16 of 16 |

Acquisition metrics can also include:

- Landing-page visits
- **Find a Tutor** clicks
- **Get Started Now** clicks
- Tutor-registration interest
- Feedback-form submissions
- Conversion rate
- Returning visitors

Only actual collected values should be reported as real acquisition results. Synthetic figures must not replace actual market or visitor evidence.

## 11. Business Value and Venture Direction

### Value Creation

PeerTutor creates value by:

- Centralizing tutor discovery.
- Making tutor information easier to compare.
- Improving trust through tutor-application approval.
- Providing structured tutoring requests.
- Supporting transparent requests and payment statuses.
- Allowing students to view reviews and ratings.
- Helping tutors organize requests, schedules, and earnings.
- Giving administrators oversight of platform activity.

### Value Delivery

PeerTutor delivers value through:

- A responsive website.
- Searchable tutor listings.
- Detailed tutor profiles.
- Student and Tutor dashboards.
- Structured request and payment workflows.
- Administrator approval and management tools.
- A landing page and digital promotion channels.
- Campus QR codes, class announcements, student clubs, and social media.

### Value Capture

A future production version could capture value through:

- A small commission from completed tutoring sessions.
- Featured tutor profiles.
- Optional premium tutor tools.
- University or faculty partnerships.
- Sponsored academic-support campaigns.

The current prototype does not process real payments or generate real revenue. The commission and tutor-payout functions are simulations designed to demonstrate the proposed business model.

### Venture Direction

The initial target market is Rangsit International College. After validating the platform and improving the technical infrastructure, PeerTutor could expand to:

1. Other Rangsit University programs.
2. Thai-language students and tutors.
3. Additional university campuses.
4. Other higher-education institutions.

## 12. Limitations and Future Improvements

### Current Limitations

- Authentication and role-based access may be simulated.
- Some records use local storage, JSON, or static JavaScript data.
- No production backend or cloud database is connected.
- Payment, verification, commission, and payout functions are simulated.
- No real financial transactions are processed.
- Email and in-app notifications may use prototype confirmation messages.
- Supporting-information uploads may not connect to external file storage.
- Clearing local browser data may reset demonstration records.
- Some dashboard metrics use sample data.
- The Lab 13 updated-prototype results are synthetic coursework data.
- The prototype has not been prepared for production-level security or large-scale deployment.

### Final Interface Improvements

The following improvements should be completed or checked before the final demonstration:

1. Increase the size and visibility of the Confirm Payment button.
2. Add a payment-progress indicator.
3. Improve mobile text and control sizes.
4. Clarify tutor price labels.
5. Clearly label optional form fields.
6. Group preferred date and time fields together.
7. Explain accepted tutor-application file types.
8. Separate Save, Preview, and Publish actions.
9. Separate payment verification, commission, and tutor payout stages.
10. Improve request and payment-status colors and explanations.

### Future User Stories

| Story ID | Future Feature | Reason for Postponing |
|---|---|---|
| US-17 | Real-time in-app chat | Requires backend services, real-time messaging, and notification management. |
| US-18 | Tutor video introductions | Requires media storage, video processing, streaming, and additional server resources. |
| US-19 | AI tutor with personalized study plans | Requires AI models, recommendation algorithms, sufficient learning data, and additional development time. |
| US-20 | Video tutoring sessions | Requires video-conferencing infrastructure and stable real-time communication. |

### Long-Term Technical Improvements

A future production version should include:

- Secure user authentication.
- Role-based access control.
- A production database.
- Secure password storage.
- Real payment-gateway integration.
- Automated payment verification.
- Secure tutor-document uploads.
- Email and in-app notifications.
- Audit logs for administrator actions.
- Improved privacy controls.
- Automated testing and security assessment.
- Scalable hosting and monitoring.

## Final Conclusion

PeerTutor demonstrates how a centralized student-to-student tutoring marketplace can address scattered tutor discovery at Rangsit University.

The final prototype connects Students, Student Tutors, and Administrators through tutor search, detailed profiles, structured tutoring requests, request tracking, simulated payment management, reviews, role-based dashboards, and administrative controls.

The prototype implements the 19 approved functional requirements and represents all 16 approved MVP user stories. The four postponed stories remain documented as future development opportunities.

Although some technical functions are simulated, the final prototype is sufficiently complete to demonstrate the problem, proposed solution, user value, business direction, and evidence-based development process during Lab 14.




