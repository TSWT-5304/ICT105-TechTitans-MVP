
# Sales Scenario

## 1. Project Title

**PeerTutor – Student-to-Student Tutoring Marketplace**

## 2. Target User / Customer

- **Primary user:** Rangsit International College (RIC) students who need academic tutoring support.
- **Secondary user:** RIC students who want to become student tutors and earn additional income by sharing their academic knowledge.
- **Decision-maker or admin role:** PeerTutor administrators who review tutor applications, approve tutor profiles, verify payments, manage users, and monitor platform activities.

## 3. Situation / Context

Mina is a second-year ICT student at Rangsit International College. She is having difficulty understanding some topics in one of her courses and needs help before an upcoming examination.

Normally, Mina searches for tutors through Facebook groups, LINE chats, classmates, or senior students. However, tutor information is scattered across different platforms. She cannot easily compare tutors based on their subjects, qualifications, prices, availability, and student reviews.

Mina needs a simple and reliable platform where she can find a suitable student tutor without spending too much time searching through different communication channels.

## 4. Pain Point

Students currently experience several problems when looking for academic tutors:
- Tutor information is scattered across Facebook, LINE, and personal contacts.
- Students cannot easily compare tutor qualifications, prices, availability, and ratings.
- It is difficult to confirm whether a tutor is trustworthy.
- Arranging tutoring through private messages can cause delays and confusion.
- Students may not know the current status of their tutoring requests.
- Student tutors do not have a central platform to promote their tutoring services.
- Administrators have difficulty monitoring tutor applications, users, requests, and payments.

These problems make finding and arranging tutoring inefficient, time-consuming, and less reliable.

## 5. Product Introduction

PeerTutor is introduced to RIC students through class announcements, student clubs, social media posts, campus posters, and QR codes. Students can scan the QR code or open the PeerTutor website to learn about the platform. They can then search for available tutors, view tutor profiles, compare important information, and submit a tutoring request.

Students who want to become tutors can apply through the platform. Administrators review each tutor application before approving the applicant and allowing a tutor profile to be created. This approval process helps improve trust and reliability.

## 6. Value Message
For **RIC students** who experience **difficulty finding suitable and trustworthy tutors through scattered social media groups and personal contacts**, our **PeerTutor student-to-student tutoring platform** helps them **find and request academic support more easily** by **providing tutor search, verified tutor profiles, ratings, availability information, tutoring requests, payment records, and request-status tracking in one centralized platform**.

For **student tutors** who experience **difficulty promoting their tutoring services and managing student requests**, PeerTutor helps them **connect with students and organize their tutoring activities** through **tutor profiles, request management, notifications, payment history, and earnings information**.

## 7. Sales Conversation / Pitch Moment

**PeerTutor Team:**  
“Have you ever needed help with a course but did not know where to find a reliable tutor?”

**Student:**  
“Yes. I usually ask my friends or search through Facebook and LINE groups, but it takes a long time.”

**PeerTutor Team:**  
“PeerTutor brings student tutoring services together in one platform. You can search for tutors by subject, view their profiles, compare prices and ratings, and submit a tutoring request directly.”

**Student:**  
“How can I know whether the tutor is trustworthy?”

**PeerTutor Team:**  
“Students must submit a tutor application before creating a tutor profile. The administrator reviews the application, and only approved students can become tutors. You can also check previous student reviews and ratings.”

**Student:**  
“Can I check what happens after submitting my request?”

**PeerTutor Team:**  
“Yes. Your dashboard allows you to view the request and monitor its current status. The platform also keeps important tutoring and payment information in one place.”

**PeerTutor Team:**  
“You can try the PeerTutor demo now, search for a tutor, and provide feedback about your experience.”

## 8. Expected User Action

After hearing the sales pitch or viewing the product demonstration, the user should:
- Visit the PeerTutor landing page.
- Try the online prototype.
- Select the appropriate user role.
- Sign up or log in to the platform.
- Search and filter available tutors.
- View a tutor’s profile and information.
- Submit a tutoring request.
- Check the request status through the dashboard.
- Apply to become a student tutor, if interested.
- Give feedback about the platform.
- Share PeerTutor with other RIC students.

## 9. Related Requirements

The following functional requirements support this sales scenario:
| Requirement ID | Related Function | Connection to the Sales Scenario |
| --- | --- | --- |
| **FR-01** | Problem-Specific Homepage | Introduces PeerTutor, its target users, the scattered tutor-discovery problem, and the “Find a Tutor” and “Get Started Now” actions. |
| **FR-02** | Primary User Pathway | Supports the complete Student and Student Tutor workflows, from tutor discovery and application to payment, session completion, and reviews. |
| **FR-03** | User Input and Data Submission | Allows students to submit tutoring requests and student tutors to submit tutor-registration applications. |
| **FR-04** | Data Storage and Record Management | Stores tutor applications, tutoring requests, payment records, and other platform information. |
| **FR-05** | Record and Information Lists | Displays approved tutors, incoming requests, reviews, ratings, payment information, user accounts, and administrative records. |
| **FR-06** | Search, Filter and Category Functions | Allows students to search tutors by name or subject and filter them by major, price, and rating. |
| **FR-07** | Online Payment | Allows students to make payments after tutors approve their tutoring requests. |
| **FR-08** | Detail View | Allows users to view tutor profiles, tutoring requests, session details, payment information, applications, and user records. |
| **FR-09** | Payment History | Allows students and tutors to view their payment history and transaction details. |
| **FR-10** | Status and Progress Tracking | Allows students and tutors to monitor tutoring-request and payment statuses. |
| **FR-11** | Administrator Functions | Allows administrators to approve tutors, manage accounts, verify payments, transfer earnings, and oversee platform data. |
| **FR-12** | Payment Management | Supports payment verification, platform commission records, tutor-payment transfers, and payment-status updates. |
| **FR-13** | Validation and Error Prevention | Checks required fields, email formats, password requirements, duplicate tutor registrations, and incomplete submissions. |
| **FR-14** | Confirmation and Feedback Messages | Provides clear messages after tutoring requests, tutor applications, payments, and payment verifications. |
| **FR-15** | Dashboards and Analytics | Provides Student, Tutor, and Admin Dashboards containing requests, sessions, reviews, earnings, transactions, statistics, and charts. |
| **FR-16** | User Interface Consistency | Maintains consistent navigation, colours, typography, icons, buttons, and dashboard designs across the platform. |
| **FR-17** | Responsive Design | Ensures that the prototype and its important forms can be used on laptop and mobile screens. |
| **FR-18** | Privacy and Responsible Data Handling | Limits data collection, protects sensitive information, and uses sample or masked data during demonstrations. |
| **FR-19** | Final Prototype Traceability | Connects every major screen and feature to the project’s user stories, requirements, and MVP feature list. |

### Most Important Requirements for This Scenario

The requirements most directly connected to the sales scenario are:
- **FR-01:** Introduces PeerTutor and its main value.
- **FR-02:** Provides complete Student and Tutor workflows.
- **FR-03:** Supports tutor applications and tutoring requests.
- **FR-05:** Displays approved tutors and user records.
- **FR-06:** Helps students find suitable tutors.
- **FR-07:** Supports student payments.
- **FR-08:** Provides detailed tutor and request information.
- **FR-10:** Allows users to monitor progress.
- **FR-11:** Supports administrator control and approval.
- **FR-15:** Provides role-based dashboards.
- **FR-18:** Protects user information.

