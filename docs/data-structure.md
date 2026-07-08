# Data Structure

## Project Title
PeerTutor – Student-to-Student Tutoring Marketplace

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Users | Stores account information for students, tutors, and admins, including role and account status. | PT001 (Mina, Student), PT002 (John, Tutor) |
| Tutor Applications | Stores tutor registration submissions awaiting admin review (education, experience, subjects). | PT002 (Pending), PT003 (Approved) |
| Tutor Profiles | Stores public profile information for approved tutors (subjects, price, availability, rating). | Sarah – Database Systems, Kevin – Web Development |
| Tutoring Requests | Stores student requests for tutoring sessions and their progress status. | Request from Mina to Sarah for Database Systems help |
| Reviews & Ratings | Stores student feedback and star ratings submitted after a completed tutoring session. | 5-star review for Sarah after a completed session |


## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Users | user_id | Text/ID | Yes | PT001 | Unique value | No |
| Users | full_name | Text | Yes | Mina | Cannot be empty | Yes |
| Users | student_id | Text/ID | Yes | 68012345 | 8-digit numeric | No |
| Users | user_role | Text/List | Yes | Student | Student/Tutor/Admin | Yes |
| Users | account_status | Text/List | Yes | Active | Active/Suspended | Yes |
| Tutor Applications | application_id | Text/ID | Yes | APP001 | Unique value | No |
| Tutor Applications | user_id | Text/ID | Yes | PT002 | Must match an existing user | No |
| Tutor Applications | subject | Text | Yes | Programming | Cannot be empty | Yes |
| Tutor Applications | application_date | Date | Yes | 2026-07-01 | Valid date format | No |
| Tutor Applications | application_status | Text/List | Yes | Pending | Pending/Approved/Rejected | Yes |
| Tutor Applications | admin_action | Text | No | Waiting for Review | Free text, set by admin | No |
| Tutor Profiles | tutor_id | Text/ID | Yes | PT003 | Must match an approved application | No |
| Tutor Profiles | subjects | Text | Yes | Database Systems | Cannot be empty | Yes |
| Tutor Profiles | price | Number | Yes | 250 | Positive number (THB/hour) | Yes |
| Tutor Profiles | availability | Text | Yes | Weekdays, 5-8 PM | Cannot be empty | Yes |
| Tutor Profiles | rating | Number | No | 4.5 | 0-5, one decimal | Yes |
| Tutoring Requests | request_id | Text/ID | Yes | REQ001 | Unique value | No |
| Tutoring Requests | student_id | Text/ID | Yes | PT001 | Must match an existing student | No |
| Tutoring Requests | tutor_id | Text/ID | Yes | PT003 | Must match an approved tutor | No |
| Tutoring Requests | preferred_datetime | Date/Time | Yes | 2026-07-10 18:00 | Must be a future date/time | No |
| Tutoring Requests | note | Text | No | Need help before midterm | Max 300 characters | No |
| Tutoring Requests | status | Text/List | Yes | Pending | Pending/Confirmed/Completed/Cancelled | Yes |
| Reviews & Ratings | review_id | Text/ID | Yes | REV001 | Unique value | No |
| Reviews & Ratings | request_id | Text/ID | Yes | REQ001 | Must match a completed request | No |
| Reviews & Ratings | rating | Number | Yes | 5 | 1-5 stars | Yes |
| Reviews & Ratings | comment | Text | No | Very clear explanations | Max 300 characters | No |


## 3. Status Values
Define the status values used in the prototype.

### Tutoring Request Status

| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Request has been submitted but not yet responded to by the tutor. | Student (creates it) |
| In Progress | Tutor has accepted the request and a session is scheduled. | Tutor |
| Completed | The tutoring session has taken place. | Tutor |
| Closed | The request was withdrawn or declined before completion. | Student or Tutor |

### Tutor Application Status
 
| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Application submitted, awaiting admin review. | System (on submission) |
| Approved | Admin has approved the application; tutor profile becomes public. | Admin |
| Rejected | Admin has rejected the application; profile stays private. | Admin |
 
### Account Status
 
| Status | Meaning | Who Can Update? |
|---|---|---|
| Active | Account is in good standing and can use the platform normally. | Admin |
| Suspended | Account has been restricted due to a policy violation or a rejected tutor application. | Admin |

## 4. Sample Records

Sample data is stored in `/data/` and follows the structure below (based on `PeerTutor - Student-to-Student Tutoring Marketplace_records`):
 
| record_id | full_name | student_id | user_role | subject | application_date | application_status | account_status | admin_action | priority |
|---|---|---|---|---|---|---|---|---|---|
| PT001 | Mina | 68012345 | Student | Information Technology | 2026-06-20 | Not Applicable | Active | User Registered | Medium |
| PT002 | John | 65012346 | Tutor | Programming | 2026-07-01 | Pending | Active | Waiting for Review | High |
| PT003 | Sarah | 65012347 | Tutor | Database Systems | 2026-07-01 | Approved | Active | Approved by Admin | High |
| PT004 | Alex | 67012348 | Student | Computer Science | 2026-06-23 | Not Applicable | Active | User Registered | Medium |
| PT005 | David | 65012349 | Tutor | Mathematics | 2026-07-02 | Rejected | Suspended | Application Rejected | Low |
| PT006 | Emily | 68012350 | Student | Business Information Systems | 2026-06-25 | Not Applicable | Active | User Registered | Medium |
| PT007 | Kevin | 65012351 | Tutor | Web Development | 2026-07-03 | Approved | Active | Approved by Admin | High |
| PT008 | Jessica | 64012352 | Tutor | Computer Networks | 2026-07-04 | Pending | Active | Waiting for Review | High |
 
Full file reference: `/data/TechTitans_Survey.xlsx` (raw survey evidence used to justify these fields and statuses).

## 5. Data Privacy Note

PeerTutor collects only the minimum information needed to operate the prototype (per FR-15): full name, student ID, user role, subject, availability, and contact information for scheduling. No sensitive personal data — such as national ID numbers, financial details, home address, or health information — is collected or stored.
 
All sample data used in the prototype (e.g., PT001–PT008) is fictional or anonymized; no real student names, ID numbers, or contact details are used in the demo dataset. Where authentication is simulated, passwords are never stored in plain text or displayed in the UI, and personal information is only shown to the user it belongs to or to an approved admin performing account/tutor management.

