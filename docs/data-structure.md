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

| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | | |
| In Progress | | |
| Completed | | |
| Closed | | |

## 4. Sample Records
Insert or link to your sample dataset in /data/.

## 5. Data Privacy Note
Explain what sensitive data will not be collected and how sample data will be anonymized.
