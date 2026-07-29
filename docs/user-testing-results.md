# User Testing Results

## 1. Testing Summary
- **Date:** 29 July 2026
- **Prototype version:** PeerTutor v1.0
- **Number of testers:** 10
- **User groups:** 5 Students, 3 Student Tutors, and 2 Administrators
- **Prototype link:** https://tswt-5304.github.io/ICT105-TechTitans-MVP/prototype/PeerTutor/html/index.html
- **Testing location/platform:** Simulated web-based usability testing on laptop and mobile-sized screens
- **Total task attempts:** 125
- **Tasks completed successfully:** 119
- **Tasks completed partially:** 5
- **Tasks not completed:** 1
- **Task-success rate:** 95.2%
- **Average feedback score:** 4.58 out of 5

## 2. Task Completion Summary

### 2.1 Tasks for All Test Users

| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T01 | Open the homepage and explain PeerTutor’s purpose. | Yes – 10/10 | No major issue | Users correctly understood the platform, target users, problem, and solution. |
| T02 | Find and use the main navigation menu. | Yes – 10/10 | No major issue | Navigation was consistent and easy to use. |
| T03 | Use the prototype on laptop and mobile-sized screens. | Partial – 9 Yes, 1 Partial | Small text on a mobile-sized screen | TU-03 reported that some dashboard text was difficult to read on a smaller screen. |

### 2.2 Student Tasks
| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T04 | Open the tutor-listing page. | Yes – 5/5 | No major issue | All Student testers found the “Find a Tutor” action. |
| T05 | Search for a tutor by name or subject. | Yes – 5/5 | No major issue | Search returned relevant tutor records quickly. |
| T06 | Filter tutors by major, price, or rating. | Partial – 4 Yes, 1 Partial | Price-range labels were unclear | TU-02 suggested adding clearer minimum and maximum price labels. |
| T07 | Open and review a tutor profile. | Yes – 5/5 | No major issue | Tutor qualifications, availability, prices, ratings, and reviews were useful. |
| T08 | Submit a tutoring request. | Yes – 5/5 | No major issue | Students completed the form successfully. |
| T09 | Attempt an incomplete or invalid request. | Yes – 5/5 | No major issue | Validation prevented incomplete submission and explained the error. |
| T10 | Identify the request-submission confirmation. | Yes – 5/5 | No major issue | The confirmation message was visible and understandable. |
| T11 | View the tutoring request and check its status. | Yes – 5/5 | No major issue | Students correctly understood the status and next action. |
| T12 | Complete the simulated payment process. | Partial – 4 Yes, 1 No | Confirm Payment button was difficult to locate | TU-04 could not immediately find the Confirm Payment button. |
| T13 | Check payment confirmation, status, and history. | Yes – 5/5 | No major issue | Payment records and statuses were understandable. |
| T14 | Review the Student Dashboard. | Yes – 5/5 | No major issue | Request, session, and payment information was useful. |
| T15 | Leave a review and rating. | Yes – 5/5 | No major issue | Rating and comment controls were easy to use. |

### 2.3 Student Tutor Tasks

| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T16 | Register and submit a tutor application. | Partial – 2 Yes, 1 Partial | Supporting-document instructions were unclear | TU-08 requested accepted file types and upload-size information. |
| T17 | Attempt an incomplete or duplicate application. | Yes – 3/3 | No major issue | The system displayed appropriate validation and duplicate warnings. |
| T18 | Identify the application-submission confirmation. | Yes – 3/3 | No major issue | The confirmation message was clear. |
| T19 | Create or review a tutor profile after approval. | Partial – 2 Yes, 1 Partial | Save and Publish actions were unclear | TU-07 requested distinct buttons and a profile preview. |
| T20 | View an incoming tutoring request. | Yes – 3/3 | No major issue | Request information was complete and understandable. |
| T21 | Approve or reject a tutoring request. | Yes – 3/3 | No major issue | Status-update actions and confirmation were clear. |
| T22 | Review schedules, reviews, earnings, and payments. | Yes – 3/3 | No major issue | Dashboard information was useful and understandable. |

### 2.4 Administrator Tasks

| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T23 | Review a tutor application and its details. | Yes – 2/2 | No major issue | Application information was organized clearly. |
| T24 | Approve or reject a tutor application. | Yes – 2/2 | No major issue | The approval workflow was completed successfully. |
| T25 | Manage user accounts and platform records. | Yes – 2/2 | No major issue | User and record management was straightforward. |
| T26 | Verify a simulated student payment. | Yes – 2/2 | No major issue | Payment verification and status updates were clear. |
| T27 | Record commission and transfer tutor earnings. | Partial – 1 Yes, 1 Partial | Payment stages were not clearly separated | TU-10 found commission and tutor payout information too closely combined. |
| T28 | Review the Admin Dashboard. | Yes – 2/2 | No major issue | Statistics, summaries, and charts were understandable. |
| T29 | Delete an invalid submission safely. | Yes – 2/2 | No major issue | The confirmation prompt helped prevent accidental deletion. |


## 3. Completion by User Role

| User Role | Number of Testers | Task Attempts | Yes | Partial | No | Yes Completion Rate | Average Score |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Students | 5 | 75 | 72 | 2 | 1 | 96.0% | 4.59/5 |
| Student Tutors | 3 | 30 | 28 | 2 | 0 | 93.3% | 4.57/5 |
| Administrators | 2 | 20 | 19 | 1 | 0 | 95.0% | 4.55/5 |
| **Overall** | **10** | **125** | **119** | **5** | **1** | **95.2%** | **4.58/5** |

## 4. Common Usability Issues
| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| UI-01 | Confirm Payment button was difficult to locate. | Important | FR-07, FR-14, FR-16 | Increase the button size and contrast and add a payment-progress indicator. |
| UI-02 | Some text was too small on a mobile-sized screen. | Useful | FR-17 | Increase mobile font size, spacing, and button dimensions. |
| UI-03 | Price-range labels in the tutor filter were unclear. | Useful | FR-06 | Add clear minimum and maximum labels and show the selected price range. |
| UI-04 | Supporting-document upload instructions were incomplete. | Important | FR-03, FR-13, FR-18 | Display accepted file types, maximum size, and a responsible-data reminder. |
| UI-05 | Save and Publish actions on the tutor profile were unclear. | Important | FR-08, FR-13, FR-14, FR-16 | Use visually distinct buttons, add profile preview, and display confirmation messages. |
| UI-06 | Payment verification, commission, and tutor payout were not sufficiently separated. | Important | FR-11, FR-12, FR-15 | Divide payment management into separate sections with clear statuses and explanations. |

## 5. User Feedback Summary

### What Users Liked

Users responded positively to the following features:

- The homepage clearly communicated PeerTutor’s purpose.
- Navigation was consistent and generally easy to understand.
- Tutor search and filtering helped students find suitable tutors.
- Tutor profiles contained useful qualifications, prices, availability, ratings, and reviews.
- The tutoring-request form was straightforward.
- Validation and confirmation messages were generally clear.
- Request and payment statuses were understandable.
- Student, Tutor, and Administrator Dashboards displayed useful information.
- Administrator approval and payment-verification workflows were easy to follow.

### What Users Disliked or Misunderstood

The main difficulties involved:

- Finding the Confirm Payment button
- Understanding price-range filter labels
- Reading some text on smaller screens
- Understanding supporting-document upload requirements
- Distinguishing Save from Publish
- Separating payment verification, platform commission, and tutor payout

### User Suggestions

Users suggested:
- Making the payment button larger and more noticeable
- Adding a payment-progress indicator
- Improving mobile text size and spacing
- Adding clearer price-filter labels
- Showing accepted supporting-document file types
- Adding tutor-profile preview
- Using different styles for Save and Publish
- Separating verification, commission, and tutor-payout sections

## 6. Comparison with Lab 08 Baseline

| Measurement | Lab 08 Baseline | Lab 13 Synthetic Sample |
| --- | ---: | ---: |
| Number of testers | 10 | 10 |
| Task attempts | 67 | 125 |
| Successfully completed tasks | 63 | 119 |
| Task-success rate | 94.0% | 95.2% |
| Average feedback score | 4.5/5 | 4.58/5 |
| Major improvement areas | 4 | 6 usability issues |

The sample results suggest a small improvement in task completion and average feedback. However, payment visibility, tutor-profile controls, and payment-management organization remain important improvement areas.

## 7. Evidence-Based Decision

**Selected decision: Needs minor revision**

The updated PeerTutor prototype achieved a sample task-success rate of **95.2%**, exceeding the 90% success criterion. The average feedback score was **4.58 out of 5**, exceeding the target of 4 out of 5.

Most Student, Student Tutor, and Administrator workflows were completed successfully. However, one Student could not complete the simulated payment because the Confirm Payment button was difficult to locate. Five other tasks were completed partially because of mobile text size, price-filter labels, upload instructions, profile-publishing controls, and payment-stage organization.

The prototype does not require a major redesign. Minor revisions should be completed before Lab 14, particularly for the payment workflow, tutor-profile controls, supporting-file instructions, and administrator payment management.
## 8. Supporting Evidence

- [`data/user-testing-results.csv`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/919a5f02de6ec760a5c9b3b406556ee7847f8542/data/user-testing-results.csv)
- `screenshots/user-testing-evidence.png`
- [`docs/final-improvement-list.md`](https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/ead8ef374cd1dd12752e2e3a6f5e50bb804b38a2/docs/final-improvement-list.md)
