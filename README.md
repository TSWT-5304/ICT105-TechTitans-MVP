# ICT105-TechTians-MVP
# Project Name
PeerTutor – Student-to-Student Tutoring Marketplace 
## Course Information
Course Code: ICT105
Course Name: Fundamental Technology Entrepreneurship
Instructor: Dr. Herison Surbakti
Project Type: 14-Labs Continuous IT Startup MVP Development
## Team Name
TechTitans
## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Thin Thiri Naing | Product Lead | Define problem, target users, value proposition, and project direction |
| Shinn Thant Maung | Technical Lead | Manage repository, prototype development, and technical feasibility |
| Thae Su Win Thu | UX/UI Lead + Validation Lead | Design wireframes, user flow, interface screens and conduct surveys/interviews. |
| Yan Naing Kyaw | Documentation Lead |  Maintain README, logbook, reports, and prepare final submission documents. |
## Initial Problem Area
Rangsit university students experience difficulties in challenging courses but cannot easily find tutors who match their subject, schedule, and budget. As a result, they rely on friends or social media, which is often inefficient and unreliable.
## Target Users
- Rangsit university students who seek academic help.
- Rangsit university students who want to become tutors and earn extra money.
## Selected IT Venture Direction
Our team selected PeerTutor – Student-to-Student Tutoring Marketplace. A web-based marketplace platform that connects students who need academic assistance with student tutors. The platform will provide tutor discovery, booking, communication, and review features to make finding affordable and reliable tutoring easier within the university community.
## Technology Possibility
Possible technologies:
- Web application
- Mobile application
- Dashboard
- Cloud-based system
- SaaS platform
- Marketplace or digital platform
## Repository Structure
- docs: reports, profiles, idea logs, and weekly logbooks
- prototype: source code or clickable prototype files
- data: survey responses, validation data, and metrics
- finance: financial assumptions and model
- diagrams: user flow and technical architecture diagrams
- screenshots: evidence of prototype and repository progress
- pitch: pitch deck and final demo files
## Weekly Progress Log
| Lab | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository, team profile, initial idea log | Completed |
| Lab 2 | Opportunity scanning and idea evaluation | Problem analysis, NUF scoring matrix, selected IT venture idea, updated README and weekly progress log | Completed |
| Lab 3 | Customer Problem Discovery | Case-Based Practice + Team Application for MVP/System, updated README and weekly progress log | Completed |
## Current Status
1. Reviewed the three project ideas from Lab 1 and discussed their strengths and weaknesses.
2. Identified six IT opportunities and evaluated them using the NUF (New, Useful, Feasible) scoring method.
3. Selected the most suitable opportunity for our semester project and mapped it to a feasible technology implementation path.
## Next Step
In Lab 03, our team will conduct customer problem discovery by interviewing university students who have searched for tutors or provided tutoring services. We will collect information about their current methods, challenges, and expectations to validate whether PeerTutor solves a real problem and identify the most important features for the MVP.
# README Update After Lab 03
## Customer Problem Discovery Summary
In Lab 03, our team conducted customer discovery interviews and surveys with university students who have searched for academic help and students who have experience providing tutoring services. The goal was to validate whether the problem identified in Lab 02 is real, significant, and worth solving.
#### The collected evidence confirmed that students often struggle to find suitable tutors through existing channels, while student tutors face difficulties promoting their services and connecting with potential learners.
## Target Respondents
We collected responses from the following target users:
- 15 university students who have searched for academic help or tutoring.
- 7 student tutors who have experience helping classmates or junior students.
#### These respondents represent both sides of the tutoring process and provide insights into the challenges faced by learners and tutors.
## Main Evidence Found
### Current Workarounds
#### Students currently find tutors through:
- Facebook groups
- Line groups
- Friends and classmates
- Senior students
- Private tutors
#### Tutors currently promote their services through:
- Word of mouth
- Friends and classmates
- Facebook groups
- Line groups
### Repeated Pain Points
- Tutor information is scattered across multiple channels.
- Students find it difficult to evaluate tutor quality and trustworthiness.
- Scheduling tutoring sessions can be inconvenient.
- Communication is often slow and inefficient.
- Tutors struggle to reach potential students.
- Students and tutors both value ratings and reviews.
## Updated Problem Statement
University students often struggle to find suitable tutors because tutor information is scattered across multiple channels such as Facebook groups, Line groups, friends, and senior recommendations. These methods provide limited information about tutor qualifications, availability, experience, and reliability. At the same time, student tutors face difficulties promoting their services and reaching students who need academic support.
## Decision for Next Step
Based on the evidence collected, our team will continue developing the PeerTutor concept.
The customer discovery results support the need for a centralized student-to-student tutoring platform. For the next stage, we will focus on designing and validating an MVP that includes:
- Tutor listing page
- Tutor profile page
- Tutor registration form
- Tutoring request form
- Subject-based tutor search
- Basic ratings and reviews
#### The MVP will help test whether a university-specific tutoring marketplace can improve tutor discovery, communication, and trust between students and tutors.

# README Update - Lab 04
# Lab 04: User Persona, Requirements, and User Stories
## Primary Target User
The primary target users are **Rangsit University students** who need academic assistance and **student tutors** who want to offer tutoring services. Students often struggle to find trustworthy tutors through scattered channels such as Facebook groups, Line groups, friends, and senior students, while tutors need a better way to promote their services and connect with learners.
## Persona Summary
- **Persona name:** Mina, Second-Year ICT Student
- **User type:** University student seeking academic tutoring support
- **Main goal:** Find a qualified peer tutor quickly, compare tutor profiles, and submit tutoring requests through one centralized platform.
- **Main pain point:** Tutor information is scattered across multiple channels, making it difficult to compare tutor qualifications, availability, and trustworthiness.
- **Current workaround:** Facebook groups, Line groups, friends, and senior students.
## Key Requirements
| Req ID | Requirement | Priority | Related Evidence |
|---|---|---|---|
| FR-01 | Homepage introducing PeerTutor and providing clear entry points to find tutors or register. | Must | Students need one centralized platform instead of scattered channels. |
| FR-02 | Student tutoring workflow from tutor search to review submission. | Must | Students reported difficulty finding and contacting tutors. |
| FR-03 | Tutor Registration Form and Tutoring Request Form. | Must | Students need structured requests; tutors need a way to register. |
| FR-04 | Store tutor applications and tutoring requests. | Must | Current communication through chat groups is unorganized. |
| FR-05 | Display tutor listings, requests, and records for students, tutors, and admins. | Must | Users need better visibility of tutoring information. |
| FR-06 | Search and filter tutors by subject, name, rating, and price. | Must | Students requested faster tutor discovery. |
| FR-07 | Detailed tutor profiles showing experience, ratings, subjects, and availability. | Must | Students want more information before choosing tutors. |
| FR-08 | Request and tutor application status tracking. | Must | Students and tutors want to monitor request progress. |
| FR-09 | Admin approval and management of tutor applications and users. | Must | Tutors require approval before appearing publicly. |
| FR-10 | Input validation and error prevention. | Must | Prevent incomplete or invalid submissions. |
| FR-11 | Confirmation messages after successful submissions. | Must | Users need feedback that actions were completed. |
| FR-12 | Student, Tutor, and Admin dashboards with summaries and analytics. | Should | Supports platform monitoring and request management. |
| FR-13 | Consistent interface across all pages. | Must | Improves usability and navigation. |
| FR-14 | Responsive design for desktop and mobile devices. | Should | Most respondents currently use mobile applications. |
| FR-15 | Basic privacy and responsible data handling. | Must | Protect user information and collect only necessary data. |
| FR-16 | Traceability between requirements, user stories, MVP features, and prototype. | Must | Required for project documentation and evaluation. |
| NFR-01 |The platform must load key pages (tutor listing, tutor profile) within 3 seconds under normal conditions. | Must |Students need tutors urgently before exams — slow loading would push them back to Facebook and Line. |
| NFR-02 |A first-time student must be able to find a tutor and submit a request within 3 minutes without any instructions. | Must | PeerTutor must be faster and simpler or students will not switch. |
| NFR-03 |The platform must be fully usable on a mobile screen without broken layouts or hidden buttons. | Must | Students used mobile-first tools (Line, Facebook, Messenger) to find tutors — PeerTutor must match that same accessibility. |
## MVP Feature Scope
| Feature | Priority | Included in Final Prototype? |
|---|---|---|
| Homepage / Landing Page | Must | Yes |
| Tutor Search & Filter | Must | Yes |
| Tutor Profile Page | Must | Yes |
| Tutoring Request Form | Must | Yes |
| Confirmation Page | Must | Yes |
| Request Status Tracking | Must | Yes |
| Tutor Registration & Application | Must | Yes |
| Tutor Application Status | Must | Yes |
| Tutor Profile Management | Must | Yes |
| Admin Dashboard & Tutor Approval | Must | Yes |
| Student Review & Rating | Should | Yes |
| Dashboard Analytics (Pie Chart & Line Graph) | Should | Yes |
| Tutor Video Introduction | Could | No |
| Real-time In-app Chat | Won't | No |
| Online Payment | Won't | No |
| AI Tutor Study Planner | Won't | No |
| Video Tutoring Sessions | Won't | No |

### Diagram Links
- User flow diagram:
- Use case diagram: https://github.com/TSWT-5304/ICT105-TechTitans-MVP/blob/main/diagrams/use-case-diagram.md
### GitHub Contribution Evidence
All members contributed to this repository through commits, issues, or pull requests.
