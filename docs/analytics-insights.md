# Lab 08 - Analytics Insights
## 1. Analytics Question
**What did users do, say, and prove when testing the MVP direction?**
The analytics focused on evaluating whether users could successfully complete the main PeerTutor workflows, including tutor search, tutoring requests, tutor registration, tutor profile management, payment simulation, payment verification, and dashboard management. The experiment also measured user satisfaction, usability, and overall interest in using PeerTutor as a centralized student-to-student tutoring platform.

## 2. Metrics Calculated
| Metric | Formula / Method | Result |
|---|---|---:|
| Total test users | Count testers | **10** |
| Completed tasks | Count Task Completed = Yes | **63 / 67 Tasks** |
| Task success rate | Completed Tasks ÷ Total Tasks × 100 | **94.0%** |
| Average feedback score | Average of all usability ratings (1–5) | **4.5 / 5.0** |
| Average interest level | Average "Would Use the Platform" rating (1–5) | **4.7 / 5.0** |
| Confusion points | Count repeated usability issues | **4 major issues identified** |

## 3. Findings
### 1.
Most participants successfully completed the Student, Tutor, and Administrator workflows without assistance. The task completion rate of **94%** indicates that the overall navigation, screen flow, and interface design were easy to understand.

### 2.
Students found the **Tutor Search**, **Tutor Profile**, and **Tutoring Request** features to be the most useful. Search filters, tutor ratings, and profile information helped users quickly compare available tutors before submitting requests.

### 3.
Tutors completed profile management and administrators monitor tutor approval, payment verification, and dashboard tasks successfully. However, several participants suggested improving the payment confirmation process, tutor profile editing, and dashboard navigation to make these features more intuitive.

## 4. Interpretation
The experiment demonstrates that the PeerTutor MVP successfully addresses the main problem identified during customer discovery: scattered tutor information across multiple communication channels.

Participants were able to complete the core workflows with minimal assistance, indicating that the product concept, interface design, and functional requirements are well aligned with user expectations.

Although the overall usability results were positive, several interface improvements were identified, particularly for payment confirmation, tutor profile management, and dashboard organization. These findings provide valuable guidance for refining the final prototype before implementation.

## 5. Requirements Affected
| Requirement ID | Evidence | Action Needed |
|---|---|---|
| **FR-02** | Users successfully completed the Student, Tutor, and Administrator workflows. | Continue improving workflow clarity and navigation. |
| **FR-05** | Tutor search and listing were completed successfully by nearly all student testers. | Add additional sorting and filtering options. |
| **FR-07** | Several students hesitated during the payment confirmation process. | Improve payment confirmation messages and visual indicators. |
| **FR-08** | Tutors requested clearer profile editing and profile preview before publishing. | Improve Tutor Profile Management and profile preview functionality. |
| **FR-10** | Some users were unsure about request and payment status labels. | Improve status colors, labels, and progress indicators. |
| **FR-12** | Payment verification and tutor earnings management worked correctly but could be more organized. | Improve payment history presentation and earnings summaries. |
| **FR-15** | Dashboards successfully displayed platform information for all user roles. | Add additional charts, filtering options, and summary statistics. |

## 6. Next Prototype Improvement
Based on the validation results, the team plans to implement the following improvements before completing the final prototype:
- Improve the payment confirmation screen and transaction progress indicators.
- Enhance Tutor Profile Management by adding profile preview and clearer editing functions.
- Improve dashboard navigation for Students, Tutors, and Administrators.
- Add additional search filters and sorting options for tutor discovery.
- Improve request and payment status labels with clearer colors and progress indicators.
- Expand dashboard analytics by adding more summary statistics and filtering capabilities.
- Conduct a second round of usability testing after implementing these improvements to validate the updated prototype.
