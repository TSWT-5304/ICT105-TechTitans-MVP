# Privacy and Data Protection

## Data Collection Summary
| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| Student Name | Identify users during tutoring requests | Yes | No | Keep | Used only for communication between users. |
| University Email | User login, communication, and account verification | Yes | No | Keep | Institutional email helps verify university membership. |
| Student ID | Verify that users belong to the university | Yes | No | Keep | Used only for verification and not displayed publicly. |
| User Role (Student/Tutor/Admin) | Determine system permissions and dashboard access | No | No | Keep | Required for role-based access control. |
| Subject Requested | Match students with suitable tutors | No | No | Keep | Essential for tutor search and request matching. |
| Preferred Date & Time | Schedule tutoring sessions | No | No | Keep | Used only for tutoring request management. |
| Tutor Experience | Help students evaluate tutors | Yes | No | Keep | Displayed on tutor profiles with user consent. |
| Tutor Skills / Subjects | Allow students to compare tutors | No | No | Keep | Supports tutor search and filtering. |
| Availability Schedule | Show tutor availability | No | No | Keep | Used for booking tutoring sessions. |
| Payment Reference Number | Verify simulated payment submissions | Yes | No | Keep | Used only for prototype payment verification. |
| Payment Amount | Record tutoring payment information | No | No | Keep | Supports payment history and tutor earnings. |
| User Reviews & Ratings | Improve tutor selection and service quality | Yes | No | Keep | Shared only after tutoring sessions. |
| Home Address | Not required for the tutoring service | Yes | Yes | Remove | Unnecessary for the MVP. |
| National ID / Passport Number | Not required for tutoring | Yes | Yes | Remove | Avoid collecting highly sensitive information. |
| Bank Account or Credit Card Information | Payments are simulated in the prototype | Yes | Yes | Remove | No real financial information is collected. |
| Health Information | Not relevant to tutoring services | Yes | Yes | Remove | Excluded to protect user privacy. |

## Privacy Rule for Prototype
The PeerTutor prototype collects only the minimum information required to support tutoring services, including user identification, tutor matching, scheduling, simulated payment verification, and feedback submission. The collected information is used only for educational purposes within the prototype and is not shared with third parties.

Access to information is controlled according to user roles:
- **Students** can view tutor profiles, submit tutoring requests, make simulated payments, and manage their own requests.
- **Student Tutors** can view and manage only their own tutor profiles, tutoring requests, payment history, earnings, and reviews.
- **Administrators** can approve tutor applications, verify simulated payments, manage user accounts, and monitor platform activity through the Admin Dashboard.

The prototype follows the principle of **data minimization** by collecting only information necessary for the platform's core functions. Sensitive personal information, such as national identification numbers, financial account details, home addresses, and health information, is intentionally excluded from the MVP.

Because this is an educational prototype, payment processing is simulated, and no real financial transactions or confidential banking information are stored.

## Data Minimization Decision
List data fields removed or changed after privacy review.
