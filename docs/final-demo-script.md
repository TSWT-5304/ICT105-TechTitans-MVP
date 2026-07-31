# Final Demo Script

## Demo Duration

**Recommended duration:** 5–7 minutes  
**Target duration:** Approximately 6 minutes

## Demo Objective

The final demonstration must show how PeerTutor solves scattered tutor discovery by connecting Students, Student Tutors, and Administrators through one organized tutoring marketplace.

The demonstration should prove that the final prototype:

- Addresses a realistic student problem.
- Supports the main Student and Tutor workflows.
- Provides searchable and detailed tutor information.
- Supports requests, status tracking, and simulated payments.
- Provides administrative approval and payment management.
- Uses role-based dashboards.
- Connects implemented features to FR-01–FR-19.

## Presenter Roles

| Member | Role in Demonstration | Part Presented |
| --- | --- | --- |
| Thin Thiri Naing | Opening and Product Presenter | Problem, target users, value proposition, and business value |
| Thae Su Win Thu | Prototype Presenter | Student and Student Tutor prototype walkthrough |
| Yan Naing Kyaw | Administrator and Documentation Presenter | Administrator workflow and requirement traceability |
| Shinn Thant Maung | Validation Presenter | User-testing evidence, metrics, improvements, and closing decision |

## 1. Opening

**Suggested duration:** 30–45 seconds

### Presenter Script

> Good morning/afternoon. We are TechTitans, and our project is called **PeerTutor – Student-to-Student Tutoring Marketplace**.
>
> Rangsit University students often search for tutors through scattered channels such as Facebook groups, LINE chats, friends, classmates, and seniors.
>
> This makes it difficult to compare tutor qualifications, subjects, availability, ratings, reviews, and prices. Students may also find it difficult to manage tutoring requests, payments, and session status through several disconnected conversations.
>
> PeerTutor addresses this problem by providing one organized platform where students can find approved tutors, submit tutoring requests, track their progress, make simulated payments, and leave reviews.
>
>Target Users
-Students: Rangsit University students who need academic support and want to find, compare, and request suitable tutors.
-Student Tutors: Qualified students who want to provide tutoring, manage tutoring requests, and track reviews, schedules, and earnings.
-Administrators: Platform managers who approve tutor applications, manage user accounts, verify payments, and monitor platform activities.

### Value Proposition

> For Rangsit University students who experience scattered and unreliable tutor discovery, PeerTutor helps them find and manage suitable Student Tutors through searchable profiles, structured tutoring requests, status tracking, payment management, and role-based dashboards.

## 2. User Scenario

**Suggested duration:** 30–45 seconds

### Presenter Script

> Imagine that Mina is a Rangsit University student preparing for an upcoming examination.
>
> She needs help with a difficult subject, but tutor information is scattered across different social-media groups. She cannot easily compare tutor experience, availability, ratings, or hourly rates.
>
> Mina opens PeerTutor, searches for a suitable tutor, reviews the tutor’s profile, submits a tutoring request, and monitors its status.
>
> After the Student Tutor approves the request, Mina completes the simulated payment. The Administrator verifies the payment, and the tutoring session is confirmed.
>
> After the session is completed, Mina leaves a review and rating to help other students make informed decisions.

## 3. Prototype Walkthrough

**Suggested duration:** 3.5–4.5 minutes

| Step | Screen/Feature | What to Demonstrate | Requirement ID |
| --- | --- | --- | --- | 
| 1 | Homepage | Show the PeerTutor name, target users, problem statement, and main actions. | “The homepage explains the PeerTutor purpose and identifies Rangsit University students as the target users. The two main actions are **Find a Tutor** and **Get Started Now**.” | FR-01, FR-16, FR-17 |
| 2 | Role Selection | Show the Student, Student Tutor, and Administrator roles. | “PeerTutor has three role-based pathways. Each role receives the screens and functions needed to complete its responsibilities.” | FR-02 |
| 3 | Tutor Listing and Search | Search by tutor name or subject and apply filters such as major, price, or rating. | “Students can search and filter approved tutors instead of checking several different social-media groups.” | FR-05, FR-06|
| 4 | Tutor Profile | Open a tutor profile and show subjects, qualifications, experience, availability, hourly rate, rating, and reviews. | “The detailed profile helps students compare tutors and make a more informed decision before submitting a request.” | FR-08 |
| 5 | Tutoring Request Form | Enter the subject, preferred date/time, and note. Show validation and submit the form. | “The student submits a structured request. Required-field validation prevents incomplete submissions, and a confirmation message shows that the request was submitted successfully.” | FR-03, FR-04, FR-13, FR-14 |
| 6 | Student Dashboard and Request Status | Show the submitted request and its current status. | “The Student Dashboard displays request statuses such as Pending, Approved, Rejected, Completed, or Cancelled. It also shows upcoming sessions and payment information.” | FR-05, FR-08, FR-10, FR-15 |
| 7 | Tutor Dashboard | Open the incoming request and approve or reject it. | “The Student Tutor can review the request details and approve or reject the request. The status change is then reflected in the Student workflow.” | FR-02, FR-05, FR-08, FR-10, FR-14 |
| 8 | Simulated Payment | Show session details, amount, payment method, confirmation, and payment history. | “After tutor approval, the student can complete the simulated payment. The payment record and status are then available through the Student Dashboard and Payment History page.” | FR-07, FR-09, FR-10, FR-14 |
| 9 | Administrator Functions | Review a tutor application, manage users, verify payment, record commission, and update tutor payout. | “The Administrator approves qualified tutors, manages accounts, verifies simulated payments, records platform commission, and transfers simulated tutor earnings.” | FR-11, FR-12 |
| 10 | Role-Based Dashboards | Show Student, Tutor, and Administrator summaries and analytics. | “Each role receives a relevant dashboard. Students see requests and sessions, tutors see requests and earnings, and administrators see applications, users, transactions, payouts, and platform statistics.” | FR-09, FR-10, FR-12, FR-15 |
| 11 | Review and Rating | Submit a rating and comment after a completed tutoring session. | “After the session is completed, the student can submit a review and rating. This feedback becomes part of the tutor profile and helps future students.” | FR-02, FR-03, FR-08, FR-14 |
| 12 | Privacy and Traceability | Show sample or masked data and the final traceability evidence. | “The prototype uses sample or masked information and does not process real financial transactions. Major screens are connected to user stories, requirements, MVP features, and GitHub evidence.” | FR-18, FR-19 |

### Student Workflow Transition

> We have now shown how a student can discover a tutor, compare tutor information, submit a request, track its status, complete a simulated payment, and leave a review.

### Tutor Workflow Transition

> Next, we switch to the Student Tutor role. The tutor can submit an application, create a profile after Administrator approval, manage incoming requests, and monitor reviews, earnings, and payment statuses.

### Administrator Workflow Transition

> Finally, the Administrator maintains platform trust by reviewing tutor applications, managing user accounts, verifying payments, recording commission, and updating tutor payouts.

## 4. Evidence and Validation

**Suggested duration:** 45–60 seconds

### Presenter Script

> We evaluated PeerTutor across the Student, Student Tutor, and Administrator workflows.
>
> Our documented testing structure contains ten test-user profiles: five Students, three Student Tutors, and two Administrators.
>
> The earlier Lab 08 validation documentation recorded 63 completed tasks out of 67, producing a task-success rate of 94 percent. It also recorded an average feedback score of 4.5 out of 5 and an average interest level of 4.7 out of 5.
>
> For Lab 13, we also prepared a synthetic updated-prototype dataset for coursework demonstration. It contains 125 task records, with 119 fully completed, five partially completed, and one not completed. This represents a synthetic full-completion rate of 95.2 percent and an average score of 4.58 out of 5.
>
> The Lab 13 figures are clearly labelled as synthetic sample data and are not presented as real participant research.

### Main Positive Findings

- The homepage purpose and main role pathways were understandable.
- Tutor search and filtering supported tutor discovery.
- Tutor profiles provided useful comparison information.
- Structured requests improved the Student workflow.
- Role-based dashboards provided useful summaries.

### Main Usability Issues

- The Confirm Payment button required greater visibility.
- Payment progress needed a clearer indicator.
- Mobile text and controls required final checking.
- Optional fields and price labels needed clearer wording.
- Tutor-application upload instructions needed to identify accepted file types.
- Save, Preview, and Publish actions needed clearer separation.
- Payment verification, commission, and payout needed to appear as separate stages.

### Evidence-Based Decision

> Based on the documented evidence, our decision is **Ready for final improvement and Lab 14 demonstration**.

## 5. Requirement Traceability

**Suggested duration:** 20–30 seconds

### Presenter Script

> The final prototype is traceable across 19 functional requirements and 16 approved user stories.
>
> Each major requirement is connected to an identified problem, user story, MVP feature, prototype screen, and final evidence source in our Requirement Traceability Matrix.
>
> The four postponed stories—real-time chat, tutor video introductions, an AI tutor, and integrated video tutoring—are documented as future features and are not counted as incomplete MVP requirements.

### Traceability Summary

| Traceability Item | Result |
| --- | ---: |
| Functional requirements represented | 19 of 19 |
| Approved user stories represented | 16 of 16 |
| Requirements connected to final evidence | 19 of 19 |
| Future user stories | US-17–US-20 |
| Final traceability status | Complete |

## 6. Closing

**Suggested duration:** 30–45 seconds

### Presenter Script

> PeerTutor turns scattered tutor discovery into one organized and traceable process.
>
> Students can find and compare approved tutors, submit tutoring requests, track their progress, complete simulated payments, and share reviews.
>
> Student Tutors can create profiles, manage tutoring requests, and monitor their reviews and earnings. Administrators can approve tutors, manage users, verify payments, and oversee platform records.
>
> Our final prototype demonstrates all 19 project requirements and all 16 approved MVP user stories. Although some backend, authentication, notification, upload, and payment functions are simulated, the prototype successfully communicates the complete product concept and user value.
>
> In the future, PeerTutor can be improved with a production database, secure authentication, real payment integration, in-app chat, tutor video introductions, AI-supported study plans, and video tutoring sessions.
>
> PeerTutor makes student-to-student tutoring at Rangsit University easier to discover, easier to manage, and more trustworthy.
>
> Thank you. We are ready for your questions.

