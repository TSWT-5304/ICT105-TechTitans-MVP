# User Testing Plan

## 1. Testing Objective
The objective is to evaluate whether the updated PeerTutor prototype v1.0 is understandable, usable, functional, and ready for the final Lab 14 demonstration.

The team wants to determine whether:
- Users understand PeerTutor’s purpose and navigation.
- The prototype works on laptop and mobile-sized screens.
- Students can find tutors, submit requests, track statuses, make simulated payments, and leave reviews.
- Student Tutors can submit applications, create profiles, manage requests, and understand earnings.
- Administrators can manage applications, users, payments, commissions, payouts, and analytics.
- Validation, confirmation, status, and error messages are clear.
- Problems identified during Lab 08 remain in the updated prototype.
- Further improvements are required before Lab 14.

Testing will measure completion, time, help required, confusion, ratings, comments, and suggested improvements.

## 2. Test User Profile

The same group of **10 test users from Lab 08** will test the updated prototype v1.0.

| User Type | Number of Testers | Why This User Type Matters |
| --- | --- | --- |
| Students | 5 | They search for tutors, compare profiles, submit requests, track statuses, make simulated payments, view payment history, and leave reviews. |
| Student Tutors | 3 | They submit applications, create profiles, respond to requests, manage schedules, and monitor earnings and reviews. |
| Administrators | 2 | They approve applications, manage users, verify payments, record commissions, transfer earnings, and review analytics. |
| **Total** | **10** | The groups represent the three main PeerTutor roles. |

### 2.1 Tester Identification

- **Tester IDs:** `TU-01` to `TU-10`
- **Task IDs:** `T01` to `T29`

| Tester ID | Role |
| --- | --- |
| TU-01 to TU-05 | Student |
| TU-06 to TU-08 | Student Tutor |
| TU-09 to TU-10 | Administrator |

### 2.2 Relationship to Lab 08

Lab 08 collected baseline feedback about the early PeerTutor prototype. Lab 13 conducts a second, more detailed testing round using the updated prototype v1.0.

The same users are retained so the team can determine whether earlier problems remain after prototype improvements. Lab 08 results will be used only as comparison evidence. New completion results, time, assistance, ratings, and feedback will be collected for Lab 13.

## 3. Testing Tasks

### 3.1 Task Structure

- **Core tasks** test the main workflows and must be completed by every relevant tester.
- **Additional tasks** test validation, responsive design, error prevention, confirmation messages, and supporting functions.
- Additional tasks may be divided among testers to reduce fatigue.
- Unassigned tasks must be recorded as **N/A**, not No.

### 3.2 Tasks for All Test Users

| Task ID | Type | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- | --- |
| T01 | Core | Open the homepage and explain PeerTutor’s purpose. | FR-01 | User identifies the platform, target users, problem, and solution. | Headline, value message, and primary actions. |
| T02 | Core | Find and use the main navigation menu. | FR-16 | User moves to the required page without assistance. | Navigation consistency and button visibility. |
| T03 | Additional | Use the prototype on laptop and mobile-sized screens. | FR-17 | User reads content and uses key functions without layout problems. | Text size, forms, buttons, and horizontal scrolling. |

### 3.3 Student Testing Tasks

| Task ID | Type | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- | --- |
| T04 | Core | Select “Find a Tutor” and open the tutor-listing page. | FR-01, FR-02, FR-05 | Student reaches the page without assistance. | Primary-action visibility and pathway clarity. |
| T05 | Core | Search for a tutor by name or subject. | FR-06 | Student finds a relevant tutor. | Search accuracy, speed, and ease of use. |
| T06 | Additional | Filter tutors by major, price, or rating. | FR-06 | Student applies filters and understands the results. | Filter labels, choices, and price ranges. |
| T07 | Core | Open and review a tutor profile. | FR-08 | Student identifies subjects, qualifications, price, availability, rating, and reviews. | Profile completeness and clarity. |
| T08 | Core | Submit a tutoring request with subject, preferred date/time, and note. | FR-02, FR-03, FR-04 | Student submits the form without major help. | Labels, required information, and scheduling fields. |
| T09 | Additional | Attempt to submit an incomplete or invalid request. | FR-13 | The system prevents submission and explains the error. | Validation accuracy and wording. |
| T10 | Additional | Confirm that the tutoring request was submitted. | FR-14 | Student notices and understands the confirmation. | Message visibility and wording. |
| T11 | Core | View the request and check its status. | FR-05, FR-08, FR-10 | Student correctly identifies the status and next action. | Pending, Approved, Rejected, Completed, and Cancelled labels. |
| T12 | Core | Make a simulated payment after tutor approval. | FR-02, FR-07 | Student reviews details and completes payment. | Payment availability, instructions, amount, and button visibility. |
| T13 | Additional | Check payment confirmation, status, and history. | FR-09, FR-10, FR-14 | Student identifies the transaction and payment status. | Pending, Paid, Verified, and Transferred labels. |
| T14 | Core | Review the Student Dashboard. | FR-15 | Student understands requests, sessions, and payment history. | Organization and usefulness. |
| T15 | Additional | Leave a review and rating after a completed session. | FR-02, FR-03, FR-14 | Student submits a rating and comment and receives confirmation. | Rating controls and feedback message. |

### 3.4 Student Tutor Testing Tasks

| Task ID | Type | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- | --- |
| T16 | Core | Register as a Student Tutor and complete the application. | FR-02, FR-03, FR-04 | Tutor provides education, experience, skills, and supporting information. | Required fields and upload instructions. |
| T17 | Additional | Attempt an incomplete or duplicate application. | FR-13 | The system prevents or warns about the submission. | Validation and duplicate-registration warning. |
| T18 | Additional | Confirm that the application was submitted. | FR-14 | Tutor notices and understands the confirmation. | Message visibility and clarity. |
| T19 | Core | Create or review a tutor profile after approval. | FR-02, FR-05, FR-08 | Tutor creates or views complete profile information. | Profile preview, editing, and Save/Publish controls. |
| T20 | Core | View an incoming tutoring request and its details. | FR-05, FR-08 | Tutor identifies the subject, date/time, note, and student request. | Request-detail clarity. |
| T21 | Core | Approve or reject a tutoring request. | FR-02, FR-10, FR-14 | Tutor updates the status and receives confirmation. | Action visibility, conflicts, and confirmation. |
| T22 | Core | Review schedules, reviews, earnings, history, and payment statuses. | FR-05, FR-09, FR-10, FR-12, FR-15 | Tutor explains the dashboard information correctly. | Commission, pending earnings, transferred earnings, and reviews. |

### 3.5 Administrator Testing Tasks

| Task ID | Type | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- | --- |
| T23 | Core | Open a tutor application and review its details. | FR-05, FR-08, FR-11 | Administrator finds and understands the applicant information. | Organization and completeness. |
| T24 | Core | Approve or reject a tutor application. | FR-11, FR-14 | Administrator changes the status and receives confirmation. | Buttons, rejection reason, and confirmation. |
| T25 | Core | View and manage user accounts and platform records. | FR-04, FR-05, FR-08, FR-11 | Administrator finds and manages the required record. | Searchability, navigation, and action clarity. |
| T26 | Core | Verify a simulated student payment. | FR-10, FR-11, FR-12, FR-14 | Administrator changes the transaction to Verified. | Details, verification process, and confirmation. |
| T27 | Additional | Record commission and transfer tutor earnings. | FR-11, FR-12 | Administrator records commission, processes transfer, and updates status. | Calculations, verification/payout separation, and error prevention. |
| T28 | Core | Review the Admin Dashboard and explain its information. | FR-15 | Administrator understands applications, transactions, payouts, commissions, statistics, and charts. | Readability, chart labels, and date filters. |
| T29 | Additional | Delete an invalid submission using a confirmation prompt. | FR-11, FR-13 | Administrator completes or cancels the action correctly. | Error prevention and destructive-action clarity. |

## 4. Success Criteria

PeerTutor will be considered ready for final improvement when:

- At least **80% of assigned Core tasks** are completed without major assistance.
- At least **90% of all assigned tasks** are completed successfully.
- The average task rating is at least **4 out of 5**.
- No unresolved Critical issue blocks a main workflow.
- Students can find tutors, submit requests, and complete simulated payment.
- Student Tutors can submit applications, create profiles, and manage requests.
- Administrators can approve applications, verify payments, and manage records.
- Validation and confirmation messages work correctly.
- Key screens work on laptop and mobile-sized screens.
- Recurring Lab 08 problems are documented and prioritized.

## 5. Testing Procedure

1. Explain the purpose, voluntary participation, and anonymous data collection.
2. Assign an anonymous tester ID and user role.
3. Give the tester all Core tasks for that role and selected Additional tasks.
4. Ask the tester to think aloud.
5. Do not guide unless the tester becomes completely stuck.
6. Record assigned tasks as Yes, Partial, or No; record unassigned tasks as N/A.
7. Record completion time, help, confusion, and observations.
8. Ask the tester to complete the quantitative Google Form immediately afterward.
9. Export responses to Google Sheets or CSV.
10. Compare results with Lab 08 and prepare the final improvement list.

## 6. Observation Points

Record:

- Tester ID and user role
- Assigned task
- Core or Additional classification
- Completion result
- Completion time
- Help required
- Confusion or hesitation
- Incorrect clicks
- Unclear labels
- Validation problems
- Status misunderstandings
- Responsive-layout problems
- Ratings and comments
- Suggested improvements
- Related requirement
- Issue severity

## 7. Result Scale

| Result | Meaning |
| --- | --- |
| Yes | Completed without major assistance. |
| Partial | Partly completed or required significant help. |
| No | Could not complete the assigned task. |
| N/A | Not assigned or not applicable to the tester’s role. |

## 8. Evidence to Collect

- Task-observation records
- Google Form responses
- Completion times and help-needed records
- Quantitative ratings
- Anonymous comments
- Testing spreadsheet
- `screenshots/user-testing-evidence.png`
- Lab 08 comparison
- Final prioritized improvement list

## 9. Ethical Reminder

- Do not collect unnecessary personal information.
- Use anonymous tester IDs.
- Do not collect passwords or real payment information.
- Use sample or masked data.
- Do not expose personal data in screenshots.
- Participation is voluntary.
- Record results honestly and do not invent unassigned results.
