# Demo Outline for Final Pitch

## 1. Opening Problem

Rangsit University students often search for tutors through scattered channels such as Facebook groups, LINE chats, friends, and seniors. This makes it difficult to compare tutors, check qualifications and availability, understand prices, submit tutoring requests, and track tutoring progress in one place.
**Opening statement:**

> Finding a tutor should not require searching through several group chats and hoping the information is still accurate. PeerTutor gives Rangsit University students one organized place to find, compare, request, and pay student tutors.


## 2. Target User

- **Student:** A Rangsit University student who needs academic support and wants to find a suitable tutor by subject, major, price, and rating.
- **Student Tutor:** A qualified student who wants to offer tutoring, manage requests and schedules, and track reviews and earnings.
- **Administrator:** A platform manager who approves tutor applications, manages user accounts, verifies payments, records commission, and transfers tutor earnings.


## 3. Product Solution

**PeerTutor** is a student-to-student tutoring marketplace that centralizes tutor discovery and tutoring management.

Students can search and compare approved tutors, submit tutoring requests, track request statuses, make a simulated payment after tutor approval, and leave reviews and ratings.

Student tutors can submit tutor applications, create tutor profiles after approval, manage incoming tutoring requests, update request statuses, and monitor reviews, earnings, and payment statuses.

Administrators can approve tutor applications, manage user accounts and platform records, verify student payments, record platform commission, transfer tutor earnings, and monitor platform activity.

**Value message:**

> For Rangsit University students who experience scattered and unreliable tutor discovery, PeerTutor helps them find and manage suitable student tutors through searchable profiles, structured tutoring requests, status tracking, payment management, and role-based dashboards.


## 4. Demo Flow

| Step | Screen / Feature | What the Presenter Shows and Says | Related Requirement |
| --- | --- | --- | --- |
| 1 | Problem and Homepage | Introduce the tutor-discovery problem, target users, PeerTutor value message, and the **Find a Tutor** and **Get Started Now** actions. | FR-01, FR-16, FR-17 |
| 2 | Role Selection and Login | Select Student, Student Tutor, or Administrator and explain that each role has a different pathway and dashboard. | FR-02, FR-13 |
| 3 | Tutor Listing, Search, and Filters | Use the Student pathway to search by tutor name or subject and filter tutors by major, price, or rating. | FR-05, FR-06 |
| 4 | Tutor Profile | Open a tutor profile and review the tutor’s subjects, qualifications, teaching experience, availability, hourly rate, rating, and reviews. | FR-08 |
| 5 | Tutoring Request Form | Enter a subject, preferred date/time, and note. Demonstrate required-field validation, submission, data storage, and the confirmation message. | FR-03, FR-04, FR-13, FR-14 |
| 6 | Tutor Request Decision and Status | Switch to the Tutor Dashboard, open the incoming request, and approve or reject it. Return to the Student Dashboard and show the updated request status. | FR-02, FR-05, FR-08, FR-10, FR-14 |
| 7 | Simulated Payment and Payment History | After tutor approval, review the session and payment details, complete the simulated payment, show the confirmation message, and open the payment history. | FR-07, FR-09, FR-10, FR-14 |
| 8 | Administrator Update | Review a tutor application, verify the student payment, record the platform commission, transfer tutor earnings, and update the payment status. | FR-11, FR-12 |
| 9 | Role-Based Dashboards | Show the Student, Tutor, and Admin dashboards and explain requests, sessions, reviews, earnings, transactions, payouts, statistics, and charts. | FR-09, FR-10, FR-12, FR-15 |
| 10 | Review and Rating | Complete the tutoring journey by submitting a rating and comment after a completed tutoring session. | FR-02, FR-03, FR-14 |
| 11 | Testing Evidence and Improvement Plan | Present the usability-testing results, important issues, proposed fixes, and traceability between prototype screens, requirements, and GitHub evidence. | FR-18, FR-19 |

### Suggested Presenter Transition

> We have now completed the main PeerTutor journey: discovering a tutor, submitting and approving a request, completing payment, verifying the transaction, and reviewing the tutoring session. Next, we will show what our usability-testing data revealed and what we plan to improve before Lab 14.

## 5. Evidence

### Customer Discovery Evidence

- Students currently discover tutors through disconnected Facebook groups, LINE chats, friends, and seniors.
- Students may have difficulty confirming tutor qualifications, availability, ratings, and hourly rates.
- Users need a faster and more organized way to compare tutors before submitting a request.
- A centralized platform can connect tutor discovery, tutoring requests, status tracking, payment information, and reviews.
- The PeerTutor concept addresses the problem by creating one structured marketplace for Rangsit University students.

### Validation and Testing Evidence

The Lab 13 usability-testing dataset contains **synthetic sample data prepared for coursework demonstration**. It should not be presented as actual participant research.
- **Total sample testers:** 10
- **Students:** 5
- **Student Tutors:** 3
- **Administrators:** 2
- **Total task records:** 125
- **Fully completed tasks:** 119
- **Partially completed tasks:** 5
- **Not completed tasks:** 1
- **Full task-completion rate:** 95.2%
- **Average feedback score:** 4.58 out of 5

The sample results indicate that the strongest areas were:
- Homepage and platform-purpose clarity
- Tutor search and filtering
- Tutor-profile information
- Tutoring-request workflow
- Role-based dashboards

The main usability issues identified were:
- The Confirm Payment button was not visible enough.
- Some text was difficult to read on a mobile-sized screen.
- Tutor price labels required clearer wording.
- Supporting-information upload instructions were unclear.
- Save and Publish actions needed clearer separation.
- Payment verification, commission, and tutor payout needed to be shown as separate stages.

### Startup and Product Metrics

| Metric | Current Evidence | Meaning |
| --- | --- | --- |
| User-role coverage | Student, Student Tutor, and Administrator workflows were included. | The prototype covers the main users of the marketplace. |
| Sample task completion | 119 of 125 tasks were fully completed. | Most prototype tasks were understandable in the sample dataset. |
| Sample full-completion rate | 95.2% | The updated prototype demonstrated generally strong usability. |
| Sample usability score | 4.58 out of 5 | Users gave the prototype a positive average usability rating. |
| Requirements coverage | Major screens and demo steps are mapped to FR-01–FR-19. | The prototype provides traceability between requirements and implementation evidence. |
| Acquisition metrics | Landing-page visits, CTA clicks, and sign-ups should use actual collected values. | Synthetic figures should not replace real marketing or acquisition evidence. |

## 6. Closing Value Message

> PeerTutor turns scattered tutor discovery into one clear and traceable journey. Students can confidently find and manage tutoring, student tutors can organize their services and earnings, and administrators can maintain trust through tutor approval and payment management. Based on the Lab 13 testing findings, our next step is to fix the highest-impact usability issues and prepare a stronger final prototype for Lab 14.

### Final Call to Action

> Try the PeerTutor demo, complete the main workflow, and share feedback that will help us make student-to-student tutoring at Rangsit University easier, safer, and more organized.


