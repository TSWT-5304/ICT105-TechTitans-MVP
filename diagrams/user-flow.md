 <img width="648" height="1118" alt="TechTitans-Page-2 drawio (2)" src="https://github.com/user-attachments/assets/566a6b0c-5e10-48ad-9a00-d4d1ff4ba7a2" />

flowchart TD
    
    A[Homepage / Landing Screen] --> B{What does the user want to do?}
    B -->|Find a Tutor| C[Student Dashboard]
    C --> D[Search Tutor]
    D --> E[View Tutor Profile]
    E --> F{Suitable?}
    F -->|No| D
    F -->|Yes| G[Submit Request Form]
    G --> H{Request Approved?}
    H -->|No| D
    H -->|Yes| I[Make Payment]
    I --> J[Confirm Session]
    J --> K[Tutoring Session]
    K --> L[Leave Reviews / Ratings]

    B -->|Become a Tutor| M[Tutor Dashboard]
    M --> N[Fill Tutor Registration Form]
    N --> O{Application Approved?}
    O -->|No| N
    O -->|Yes| P[Create Profile]
    P --> Q[Wait for Student Requests]
    Q --> R[Review Student Requests]
    R --> S[Conduct Tutoring Session]
    S --> T[Receive Payment]
    T --> U[Tutor Views Reviews]
    U --> Q

    B -->|Manage Platform| V[Admin Dashboard]
    V --> W[Manage Users]
    W --> X[Monitor Tutor Applications]
    X --> Y[Verify Student Payments]
    Y --> Z[Transfer Tutor Earnings]
    Z --> AA[View Summary Dashboard]
