# Data Handling Policy

## Data Collection
The PeerTutor prototype collects only the information necessary to demonstrate and evaluate the platform's core functions during MVP testing.

The prototype may collect the following data:
- Name, nickname, or anonymous participant ID
- University email address
- Student ID (used only for verification)
- User role (Student, Student Tutor, Administrator)
- Subject or course requiring tutoring
- Preferred tutoring date and time
- Tutor profile information (subjects, skills, experience, availability)
- Tutoring request information
- Simulated payment reference number and payment status
- User reviews and ratings
- Usability testing results, including task completion, feedback scores, interest levels, and user comments

No highly sensitive personal or financial information is collected.

## Data Storage
The prototype uses **Google Sheets** as the primary storage solution for simulated MVP data during development and testing. 
The stored information includes:
- User records
- Tutor profiles
- Tutor applications
- Tutoring requests
- Simulated payment records
- Payment history
- Tutor earnings
- Reviews and ratings
- MVP experiment results
- Customer validation and usability testing records

The Google Sheet is used only for educational purposes and is accessible only to the project team. Future production implementations should replace Google Sheets with a secure database that supports authentication, authorization, encrypted storage, and backup.

## Data Access
Who can view or update the data?

## Data Minimization
Which fields are removed because they are unnecessary?

## Responsible Data Rule
The prototype must avoid unnecessary sensitive data and use sample/masked data when possible.
