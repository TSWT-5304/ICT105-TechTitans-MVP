# Technical Architecture
## Project Title
PeerTutor – Student-to-Student Tutoring Marketplace
## 1. Selected Prototype Platform
**Frontend-only: HTML/CSS/JavaScript + localStorage**
## 2. Architecture Decision
The team chose a frontend-only architecture using the browser's `localStorage` (with a preloaded JSON dataset for demo data) instead of a real backend/database. This fits the group's current skill level and the one-semester timeline: it avoids server setup, authentication infrastructure, and database administration, while still letting every required user flow (search, submit, track status, approve, review, dashboard) be fully clickable and interactive rather than a static mockup. Because PeerTutor's MVP requirements (FR-01–FR-16) don't require multi-device real-time sync — only that the *demo* clearly show the described behavior — localStorage/JSON is sufficient to prove the concept. If the project continues beyond this semester, this architecture is designed to be replaced by a real database (e.g. Firebase/Supabase) without changing the UI or user flows, since data access is isolated behind simple JS functions (see Section 3).
## 3. Main Components
| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | Homepage, tutor search/listing, tutor profile, request form, dashboards, admin pages | HTML5, CSS3, vanilla JavaScript | FR-01, FR-13, FR-14 |
| Data Input Form | Tutoring request form, tutor registration/application form | HTML forms + JS validation | FR-03, FR-10, FR-11 |
| Data Storage | Tutors, tutor applications, tutoring requests, reviews, users — stored as JSON objects in `localStorage`; seeded from a preloaded `data.json` file on first load | Browser `localStorage` + static JSON seed file | FR-04 (simulated) |
| Record List | Tutor Listing page; Admin's user/tutor list; Tutor's incoming request list | JS reads from `localStorage`, renders via DOM/template functions | FR-05, FR-06 |
| Detail View | Tutor Profile page; Tutoring Request detail; Tutor Application detail | JS reads a single record by ID from `localStorage` | FR-07 |
| Admin Function | Approve/reject tutor applications, update request/user status, suspend accounts | JS functions writing status changes back to `localStorage` (simulated auth — no real login security) | FR-08, FR-09 |
| Dashboard / Summary | Student/Tutor/Admin dashboards with counts and simple charts | JS aggregates `localStorage` data; Chart.js (or plain CSS bars) for pie/line visuals | FR-12 |
## 4. What Will Be Fully Implemented?
- Homepage and full student journey: search → filter → profile → request form → confirmation → status tracking.
- Tutor registration/application form with client-side validation (FR-10).
- Tutor dashboard showing application status and incoming requests.
- Tutor profile creation/editing (visible only after "approval").
- Admin approval workflow (approve/reject tutor applications) and status updates on requests.
- Review & rating submission and display on tutor profiles.
- Basic dashboard summaries (counts, simple charts) for student, tutor, and admin views.
- Responsive layout for desktop and mobile-width browsers (FR-14).
## 5. What Will Be Simulated?
- **Authentication/accounts**: login is simulated (e.g. a simple role picker or a mock login form) rather than a real authenticated backend, since there is no server to verify credentials securely.
- **Persistence across devices/users**: because data lives in `localStorage`, it is local to one browser — the demo will use one browser/session to show the full admin+student+tutor loop rather than true multi-user concurrent access.
- **Notifications**: any "email/SMS notification" implied by status changes will be simulated as an on-screen confirmation message only (FR-11), not an actual email/SMS service.
- **Data storage requirement (FR-04)**: genuinely persistent, multi-device storage is simulated via localStorage/JSON rather than a real database — this is the one MVP requirement not fully met by the chosen architecture, and is flagged as a known limitation below.
## 6. Final Prototype Risk
The biggest technical risk is that **FR-04 (persistent, shared data storage)** is only simulated, not truly implemented — localStorage is per-browser, so data will not be visible across different team members' or evaluators' machines unless the same browser/profile is used for the demo, or the JSON seed file is reset before each demo run. To reduce this risk, the team will: (1) keep a versioned `data.json` seed file in the repo so the "before" state is always reproducible, (2) run the live demo from a single machine/browser during evaluation, and (3) document this limitation explicitly in the README so it isn't mistaken for a bug. If time allows after the core flows are stable, migrating `localStorage` calls to a lightweight backend (e.g. Firebase) is a low-effort upgrade path since the JS data-access functions are already isolated from the UI.
