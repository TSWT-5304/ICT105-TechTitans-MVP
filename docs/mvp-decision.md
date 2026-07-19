# MVP Decision
# Lab 08 - MVP Decision
## 1. Decision
Choose one:
- [ ] Continue with the current MVP direction
- [x] Continue with minor revisions
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

## 2. Evidence Supporting the Decision
The MVP experiment involved **10 representative users** (5 Students, 3 Student Tutors, and 2 Administrators) who completed role-specific usability tasks using the PeerTutor prototype.

The validation results showed that:
- A **94% task success rate** was achieved, with most participants completing their assigned tasks without assistance.
- The prototype received an **average usability score of 4.5/5**, indicating that users found the interface easy to understand and navigate.
- The **average interest level was 4.7/5**, suggesting that participants would be willing to use PeerTutor if it were available.
- Students successfully completed tutor searching, tutor profile viewing, tutoring request submission, payment simulation, and request tracking.
- Student Tutors successfully completed tutor registration, tutor profile management, tutoring request management, and payment status tracking.
- Administrators successfully completed tutor approval, payment verification, user management, and dashboard monitoring.

Although several usability improvements were identified, the overall product concept and MVP direction were strongly validated. Therefore, the team will continue with the current MVP while making minor interface and workflow improvements.

## 3. Requirements to Keep
| Requirement ID | Reason |
|---|---|
| **FR-01** | The homepage clearly introduced PeerTutor and users immediately understood the platform's purpose. |
| **FR-02** | Student, Tutor, and Administrator workflows were completed successfully by most participants. |
| **FR-03** | Tutoring Request and Tutor Registration forms were easy to understand and complete. |
| **FR-05** | Tutor search and listing functions effectively helped students find appropriate tutors. |
| **FR-06** | Search and filtering features improved tutor discovery and received positive feedback. |
| **FR-08** | Tutor profiles provided sufficient information for users to compare tutors before requesting sessions. |
| **FR-11** | Administrator functions supported tutor approval, payment verification, and user management effectively. |
| **FR-12** | Payment verification and tutor earnings sections are easy to understand. | 
| **FR-15** | Student, Tutor, and Administrator dashboards successfully displayed role-specific information and platform summaries. |
| **FR-16** | The consistent user interface improved navigation and overall usability. |
| **FR-17** | The responsive design allowed users to complete tasks on different screen sizes successfully. |

## 4. Requirements to Improve
| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| **FR-07** | Some students hesitated during the payment confirmation process. | Improve payment confirmation messages, progress indicators, and button visibility. |
| **FR-08** | Tutors requested additional editing support when managing profiles. | Add profile preview and clearer editing functions in Tutor Profile Management. |
| **FR-09** | Payment history could provide more transaction details. | Improve transaction summaries and payment filtering options. |
| **FR-10** | Some users were unsure about request and payment status labels. | Improve status labels, progress indicators, and color consistency. |
| **FR-15** | Dashboard analytics could provide more detailed insights. | Add additional charts, filtering options, and summary statistics for administrators. |

## 5. Prototype Changes Before Next Lab
The team plans to implement the following improvements before completing the final prototype:
- Improve the payment confirmation workflow and visual feedback.
- Enhance Tutor Profile Management with profile preview and easier editing.
- Improve dashboard navigation for Students, Tutors, and Administrators.
- Add additional tutor search filters and sorting options.
- Improve request status and payment status indicators.
- Expand dashboard analytics with additional charts and summary statistics.
- Improve payment history presentation and transaction details.
- Perform a final round of usability review after implementing these improvements.

## 6. GitHub Issues Created
| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| Improve Payment Confirmation Workflow | Yan Naing Kyaw | FR-07 |
| Enhance Tutor Profile Management | Thae Su Win Thu | FR-08 |
| Improve Payment History and Transaction Display | Yan Naing Kyaw | FR-09 |
| Improve Request Status Indicators | Shinn Thant Maung | FR-10 |
| Refine Admin Payment Verification Workflow | Shinn Thant Maung | FR-12 |
| Improve Dashboard Analytics and Charts | Thin Thiri Naing | FR-15 |
| Add Additional Tutor Search Filters | Thae Su Win Thu | FR-06 |
| Final UI Review and Responsive Improvements | All Members | FR-16, FR-17 |
