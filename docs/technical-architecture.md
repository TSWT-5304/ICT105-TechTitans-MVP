# Technical Architecture
## Project Title
PeerTutor – Student-to-Student Tutoring Marketplace

## 1. Selected Prototype Platform
The selected prototype platform is:
**Frontend Web Application with Google Sheets Data Storage**

The PeerTutor prototype will use:
- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Google Forms for data submission
- Google Sheets for data storage
- GitHub for version control and team collaboration

The main website interface will be developed using HTML, CSS, and JavaScript. Google Sheets will store prototype records such as tutor applications, tutoring requests, payments, reviews, and tutor earnings.

## 2. Architecture Decision
The PeerTutor prototype will be developed as a frontend web application using HTML, CSS, and JavaScript. Google Sheets will be used as the prototype database because it is simple, accessible, low-cost, and suitable for the project scope. This architecture matches the team’s current technical skills and allows the group to demonstrate the complete Student, Tutor, and Administrator workflows without developing a complex backend server or traditional database.

Google Forms will connect the website forms to Google Sheets. Submitted records can then be reviewed and managed through the spreadsheet or displayed in the prototype using sample or retrieved data. This approach supports the project requirements for data submission, record management, tutor applications, tutoring requests, payment records, reviews, and administrator functions while remaining achievable within the available development time.

## 3. Main Components
| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | Provides responsive web pages for Students, Tutors, Administrators, and guest users. | HTML5, CSS3, JavaScript | FR-01, FR-02, FR-16, FR-17 |
| Navigation | Connects all pages and supports Student, Tutor, and Administrator workflows. | HTML, JavaScript | FR-02 |
| Authentication Interface | Provides Login, Sign Up, Role Selection, and Admin Login screens. Authentication is simulated in the prototype. | HTML Forms, CSS, JavaScript | FR-02, FR-13 |
| Tutoring Request Form | Collects subject, preferred date and time, and student notes. | HTML Form, JavaScript, Google Forms | FR-03, FR-04, FR-13, FR-14 |
| Tutor Registration Form | Collects tutor education, teaching experience, skills, subjects, and supporting information. | HTML Form, JavaScript, Google Forms | FR-03, FR-04, FR-13, FR-14 |
| Data Storage | Stores users, tutor applications, tutor profiles, tutoring requests, payments, reviews, and tutor earnings. | Google Sheets | FR-04, FR-18 |
| Tutor Search and Listing | Displays tutor records and allows students to search and filter by name, subject, major, rating, and price. | HTML, CSS, JavaScript | FR-05, FR-06 |
| Detail View | Displays tutor profiles, request details, payment information, and tutor application details. | HTML, CSS, JavaScript | FR-08 |
| Request Status Tracking | Displays request statuses such as Pending, Approved, Rejected, Completed, and Cancelled. | JavaScript, Google Sheets data | FR-10 |
| Online Payment Interface | Demonstrates payment submission after tutor approval. No real financial transaction is processed. | HTML, CSS, JavaScript | FR-07, FR-14 |
| Payment Records | Stores simulated payment amount, method, date, reference, and status. | Google Sheets | FR-09, FR-10, FR-12 |
| Tutor Dashboard | Displays incoming requests, schedules, reviews, earnings, and payment status. | HTML, CSS, JavaScript | FR-05, FR-09, FR-10, FR-12, FR-15 |
| Admin Dashboard | Allows administrators to review users, tutor applications, payment records, and platform activities. | HTML, CSS, JavaScript, Google Sheets | FR-05, FR-11, FR-12, FR-15 |
| Tutor Approval | Allows administrators to review and update tutor application statuses. | Google Sheets, JavaScript where required | FR-11, FR-14 |
| Payment Verification | Allows administrators to review simulated payment records and update payment statuses. | Google Sheets, JavaScript  where required | FR-11, FR-12, FR-14 |
| Tutor Earnings Management | Records platform commission, tutor payout amount, and transfer status. | Google Sheets | FR-09, FR-11, FR-12 |
| Dashboard Analytics | Displays summary cards, pie charts, and line graphs using stored or sample platform data. | HTML, CSS, JavaScript | FR-15 |
| Confirmation and Validation | Displays required-field warnings, validation errors, and successful submission messages. | JavaScript | FR-13, FR-14 |

## 4. What Will Be Fully Implemented?
The following features will be fully implemented in the final PeerTutor prototype:
- Responsive homepage and navigation.
- Role Selection page (Student, Tutor, Administrator).
- Login and Sign Up interfaces.
- Tutor Search and Filtering.
- Tutor Profile viewing.
- Tutoring Request Form with input validation.
- Student Dashboard and Request Status tracking.
- Online Payment interface (prototype).
- Student Payment History.
- Student Review and Rating submission.
- Tutor Registration and Application.
- Tutor Profile Management.
- Tutor Dashboard with request management.
- Admin Dashboard and User Management.
- Tutor Application Approval.
- Student Payment Verification.
- Tutor Earnings Management.
- Dashboard Analytics with summary statistics.
- Contact Us page.
- Google Sheets integration for storing prototype records such as tutor applications, tutoring requests, payment records, reviews, and tutor earnings.

## 5. What Will Be Simulated?
The following features will be simulated because a full backend infrastructure is outside the project scope:
- User authentication and authorization.
- Password encryption and account recovery.
- Real online payment gateway integration.
- Automatic payment verification.
- Automatic tutor earnings transfer.
- Email or SMS notifications.
- Real-time synchronization between multiple users.
- Automatic dashboard updates based on live database changes.
- Production-level security, access control, and cloud database services.

Instead of implementing these backend services, the prototype will demonstrate the complete workflow using HTML, CSS, JavaScript, and Google Sheets with realistic sample data.

## 6. Final Prototype Risk
The biggest technical risk is maintaining accurate and consistent data between the frontend interface and Google Sheets without a dedicated backend server. Since the prototype relies on Google Sheets for data storage, there may be limitations in real-time updates, user authentication, concurrent editing, and automated data synchronization.

To reduce these risks, the team will:
- Use Google Forms  to safely submit data to Google Sheets.
- Organize data into separate worksheets (Users, Tutor Applications, Tutor Profiles, Tutoring Requests, Payments, Tutor Earnings, and Reviews).
- Assign unique IDs to every record for easy tracking and consistency.
- Use predefined status values (Pending, Approved, Rejected, Completed, Verified, etc.) throughout the system.
- Validate user inputs before submission using JavaScript.
- Use realistic sample data for prototype demonstrations.
- Maintain backup copies of project files and Google Sheets.
- Use GitHub for version control and team collaboration.

These measures help ensure that the prototype remains stable, consistent, and suitable for demonstrating the complete PeerTutor workflow within the project scope.
