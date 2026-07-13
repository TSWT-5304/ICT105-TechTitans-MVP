# Data Structure

## Project Title
PeerTutor – Student-to-Student Tutoring Marketplace

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Users | Stores account information for Students, Tutors, and Administrators, including user role and account status. | PT001 (Mina - Student), PT002 (John - Tutor), PT999 (Admin) |
| Tutor Applications | Stores tutor application submissions awaiting administrator review. | APP001 (Pending), APP002 (Approved) |
| Tutor Profiles | Stores public tutor profile information for approved tutors. | Sarah – Database Systems, Kevin – Web Development |
| Tutoring Requests | Stores tutoring requests, schedules, notes, and request status. | Mina requests Database Systems tutoring from Sarah |
| Payments | Stores student payment information and verification status. | PAY001 (Verified), PAY002 (Pending) |
| Tutor Earnings | Stores tutor payout records, platform commissions, and payout status. | EAR001 (Transferred) |
| Reviews & Ratings | Stores student feedback and tutor ratings after completed tutoring sessions. | 5-Star Review for Sarah |
| Dashboard Statistics (Derived) | Stores summarized platform statistics displayed on administrator dashboards. | Total Tutors: 35 |

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Users | user_id | Text/ID | Yes | PT001 | Unique value | No |
| Users | full_name | Text | Yes | Mina | Cannot be empty | Yes |
| Users | student_id | Text | Yes | 68012345 | Numeric, unique | Yes |
| Users | email | Email | Yes | mina@email.com | Valid email format | No |
| Users | password | Password | Yes | ******** | Minimum 8 characters | No |
| Users | role | List | Yes | Student | Student / Tutor / Admin | Yes |
| Users | account_status | List | Yes | Active | Active / Suspended | Yes |
| Tutor Applications | application_id | Text/ID | Yes | APP001 | Unique value | No |
| Tutor Applications | user_id | Text/ID | Yes | PT002 | Existing user | No |
| Tutor Applications | subjects | Text | Yes | Programming | Cannot be empty | Yes |
| Tutor Applications | education | Text | Yes | Computer Engineering | Cannot be empty | No |
| Tutor Applications | experience | Text | No | 2 Years | Maximum 500 characters | No |
| Tutor Applications | application_date | Date | Yes | 2026-07-01 | Valid date | No |
| Tutor Applications | application_status | List | Yes | Pending | Pending / Approved / Rejected | Yes |
| Tutor Profiles | tutor_id | Text/ID | Yes | PT003 | Existing approved tutor | No |
| Tutor Profiles | subjects | Text | Yes | Database Systems | Cannot be empty | Yes |
| Tutor Profiles | hourly_rate | Number | Yes | 250 | Positive number | Yes |
| Tutor Profiles | availability | Text | Yes | Weekdays 5–8 PM | Cannot be empty | Yes |
| Tutor Profiles | rating | Decimal | No | 4.8 | 0–5 stars | Yes |
| Tutor Profiles | reviews_count | Integer | No | 18 | Positive integer | No |
| Tutoring Requests | request_id | Text/ID | Yes | REQ001 | Unique value | No |
| Tutoring Requests | student_id | Text/ID | Yes | PT001 | Existing student | No |
| Tutoring Requests | tutor_id | Text/ID | Yes | PT003 | Existing tutor | No |
| Tutoring Requests | subject | Text | Yes | Database Systems | Cannot be empty | Yes |
| Tutoring Requests | preferred_datetime | DateTime | Yes | 2026-07-10 18:00 | Future date/time | No |
| Tutoring Requests | note | Text | No | Need help before midterm | Maximum 300 characters | No |
| Tutoring Requests | request_status | List | Yes | Pending | Pending / Approved / Rejected / Completed / Cancelled | Yes |
| Payments | payment_id | Text/ID | Yes | PAY001 | Unique value | No |
| Payments | request_id | Text/ID | Yes | REQ001 | Existing request | No |
| Payments | student_id | Text/ID | Yes | PT001 | Existing student | No |
| Payments | amount | Decimal | Yes | 500 | Positive number | No |
| Payments | payment_method | List | Yes | PromptPay | PromptPay / Bank Transfer / Cash | Yes |
| Payments | payment_date | Date | Yes | 2026-07-10 | Valid date | No |
| Payments | payment_status | List | Yes | Verified | Pending / Verified / Failed | Yes |
| Tutor Earnings | earning_id | Text/ID | Yes | EAR001 | Unique value | No |
| Tutor Earnings | tutor_id | Text/ID | Yes | PT003 | Existing tutor | No |
| Tutor Earnings | payment_id | Text/ID | Yes | PAY001 | Existing payment | No |
| Tutor Earnings | platform_commission | Decimal | Yes | 50 | Positive number | No |
| Tutor Earnings | tutor_amount | Decimal | Yes | 450 | Positive number | No |
| Tutor Earnings | payout_status | List | Yes | Transferred | Pending / Transferred | Yes |
| Tutor Earnings | payout_date | Date | No | 2026-07-12 | Valid date | No |
| Reviews & Ratings | review_id | Text/ID | Yes | REV001 | Unique value | No |
| Reviews & Ratings | request_id | Text/ID | Yes | REQ001 | Existing completed request | No |
| Reviews & Ratings | rating | Integer | Yes | 5 | 1–5 stars | Yes |
| Reviews & Ratings | comment | Text | No | Excellent tutor | Maximum 300 characters | No |

## 3. Status Values
## Tutoring Request Status
| Status | Meaning | Updated By |
|---|---|---|
| Pending | Request submitted and awaiting tutor response. | Student |
| Approved | The tutor accepted the tutoring request. | Tutor |
| Rejected | The tutor declined the tutoring request. | Tutor |
| Completed | Tutoring session successfully finished. | Tutor |
| Cancelled | Request cancelled before completion. | Student or Tutor |

## Tutor Application Status
| Status | Meaning | Updated By |
|---|---|---|
| Pending | Waiting for administrator review. | System |
| Approved | Tutor application accepted. | Administrator |
| Rejected | Tutor application declined. | Administrator |

## Payment Status
| Status | Meaning | Updated By |
|---|---|---|
| Pending | Payment submitted but waiting for verification. | Student |
| Verified | Payment approved by administrator. | Administrator |
| Failed | Payment rejected or unsuccessful. | Administrator |

## Tutor Earnings Status
| Status | Meaning | Updated By |
|---|---|---|
| Pending | Waiting for tutor payout. | System |
| Transferred | Earnings transferred to tutor. | Administrator |

## Account Status
| Status | Meaning | Updated By |
|---|---|---|
| Active | The user account can access all permitted functions. | Administrator |
| Suspended | The user account is temporarily disabled. | Administrator |

## 4. Sample Records

### Users
| user_id | full_name | role | account_status |
|---|---|---|---|
| PT001 | Mina | Student | Active |
| PT002 | John | Tutor | Active |
| PT003 | Sarah | Tutor | Active |
| PT999 | Admin | Administrator | Active |

### Tutor Applications
| application_id | user_id | subjects | application_status |
|---|---|---|---|
| APP001 | PT002 | Programming | Pending |
| APP002 | PT003 | Database Systems | Approved |

### Tutoring Requests
| request_id | student_id | tutor_id | subject | request_status |
|---|---|---|---|---|
| REQ001 | PT001 | PT003 | Database Systems | Approved |

### Payments
| payment_id | request_id | amount | payment_method | payment_status |
|---|---:|---:|---|---|
| PAY001 | REQ001 | 500 | PromptPay | Verified |

### Tutor Earnings
| earning_id | tutor_id | payment_id | tutor_amount | payout_status |
|---|---|---|---:|---|
| EAR001 | PT003 | PAY001 | 450 | Transferred |

### Reviews
| review_id | request_id | rating | comment |
|---|---|---:|---|
| REV001 | REQ001 | 5 | Excellent explanation and easy to understand. |

## 5. Data Privacy Note

PeerTutor collects only the minimum information required to operate the prototype, including user account details, tutor profiles, tutoring requests, payment records, and reviews. No sensitive personal information such as national identification numbers, banking credentials, or health information is collected or stored.

The online payment feature is implemented as a **prototype simulation**. Only payment references, transaction amounts, payment methods, and verification statuses are recorded for demonstration purposes. No real financial transactions or payment accounts are processed.

All sample records used in the prototype are fictional and created solely for educational purposes. Passwords are never displayed in plain text and would be securely encrypted in a production system. Personal information is accessible only to the corresponding user or authorized administrators responsible for platform management.
