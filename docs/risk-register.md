# Risk Register
| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Personal information from students and tutors may be exposed or collected unnecessarily. | FR-03 User Forms, FR-04 Data Storage, FR-18 Privacy and Responsible Data Handling | High | Medium | Collect only required information such as name, email, subject, availability, and tutoring details. Avoid storing sensitive data and use sample data for demonstrations. | Shinn Thant Maung | Related user research, validation, and requirement analysis tasks in GitHub Issues and commits. | In Progress |
| R-02 | Ethical | Unfair tutor ratings, inaccurate tutor profiles, or misleading information may negatively affect users. | FR-05 Tutor Listing, FR-08 Detail View, FR-10 Status Tracking | Medium | Medium | Establish fair review guidelines, allow accurate tutor information updates, and avoid false claims about tutor quality. | Thin Thiri Naing | Related product planning, user requirements, and platform direction tasks in GitHub Issues and commits. | Open |
| R-03 | IP | External images, icons, templates, or design resources may be used without proper permission. | FR-16 UI Consistency, Prototype Design | Medium | Low | Use original designs or properly licensed resources. Provide attribution when required. | Thae Su Win Thu | Related UI/UX design and prototype development tasks in GitHub Issues and commits. | In Progress |
| R-04 | Security | Unauthorized users may access restricted features, submit invalid information, or modify records without permission. | FR-11 Admin Function, FR-13 Validation, FR-15 Dashboards | High | Medium | Implement role-based access control, input validation, and permission checks for Student, Tutor, and Admin roles. | Thae Su Win Thu | Related technical implementation and prototype development tasks in GitHub Issues and commits. | In Progress |
| R-05 | Legal | Payment processes may create misunderstanding because the prototype simulates payment verification and tutor earnings transfer. | FR-07 Online Payment, FR-11 Admin Function, FR-12 Payment Management | Medium | Medium | Clearly state that payments are simulated only and add disclaimers that PeerTutor is not processing real financial transactions. | Yan Naing Kyaw | Related documentation and project information updates in GitHub Issues and commits. | Open |
| R-06 | Data Quality | Incorrect tutor information, duplicate applications, or incomplete submissions may reduce system reliability. | FR-03 Forms, FR-04 Data Storage, FR-13 Validation | Medium | Medium | Add required fields, duplicate registration warnings, and validation rules before storing data. | Shinn Thant Maung & Thae Su Win Thu | Related validation, data management, and prototype implementation tasks in GitHub Issues and commits. | In Progress |

## Overall Risk Decision
Before final implementation, the team must improve privacy protection, input validation, role-based permissions, and clear disclaimers for the simulated payment system. Since PeerTutor includes tutor applications, user dashboards, payment records, and admin management, proper control of user data and system access must be considered.

The identified risks are primarily related to the prototype nature of the system rather than fundamental design problems. No critical issues require a major redesign or project pivot. Before moving toward a production-ready implementation, the team should:
- Add a clear Privacy Notice and Terms of Use.
- Continue collecting only the minimum personal information required.
- Implement secure authentication and role-based authorization.
- Replace Google Sheets with a secure database for production use.
- Add server-side validation and stronger access control.
- Improve payment confirmation, status tracking, and dashboard usability based on customer validation feedback.
- Conduct another round of usability and security testing after implementing these improvements.

Overall, the project is well positioned to proceed, with the remaining risks manageable through the planned improvements.
