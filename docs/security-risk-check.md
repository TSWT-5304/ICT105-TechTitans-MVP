# Basic Security Risk Check
| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete or invalid data be submitted? | Basic client-side validation is implemented, but server-side validation is not available because this is an MVP prototype. | Medium | Add required field validation, input format checks, and stronger validation if a backend is implemented. | Thae Su Win Thu |
| Admin function | Can normal users access admin actions? | Admin functions are separated from student and tutor functions in the system design. | Low | Maintain role-based access control and ensure only authorized users can manage tutor approvals or platform activities. | Thin Thiri Naing & Thae Su Win Thu | 
| Data display | Is private information visible to everyone? | Tutor profiles display necessary information for students, but unnecessary personal data should not be shown publicly. | Medium | Limit displayed information to relevant details such as subjects, skills, availability, and ratings. Avoid exposing sensitive user information. | Shinn Thant Maung | 
| Status update | Can records be edited without control? | Prototype records can currently be modified during demonstrations because no backend permission system exists. | Medium | Add authentication, authorization, and activity logging when implementing the production version. | Thae Su Win Thu |
| Public links | Does a public link expose data that should be private? | Google Sheets is used only as prototype storage. Access is restricted to project members and is not intended for public users. | Medium | Restrict file-sharing permissions, avoid storing sensitive data, and use a secure database in future development. | Yan Naing Kyaw |
| File upload | If used, can unsafe or unrelated files be uploaded? | File upload is limited to tutor supporting documents in the prototype and is not fully implemented. | Low | Restrict file types (e.g., PDF, JPG, PNG), limit file size, and scan uploaded files in the production system. | Thae Su Win Thu |

## Security Decision
**Continue with mitigation**
The current MVP is appropriate for educational demonstration purposes and presents **low to medium security risks** because sensitive features such as authentication, payment processing, and file management are simulated. Before deploying a production version, the team should implement secure user authentication, role-based authorization, server-side validation, protected database storage, secure file handling, and audit logging to reduce identified risks.
