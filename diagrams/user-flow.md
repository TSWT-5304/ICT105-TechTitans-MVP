flowchart TD

    A[Homepage / Landing Screen] --> B{What does the user want to do?}
    B -->|Find a tutor| C[Student Dashboard]
    C --> D[Search Tutor]
    D --> F[View Tutor Profile]
    F --> G[Submit Request Form]
    G --> H[Confirm Session]
    H --> I[Tutoring Session]
    I --> J[Leave Reviews / Ratings]

    B -->|Become a tutor| K[Tutor Dashboard]
    K --> L[Fill Tutor Registration Form]
    L --> M[Create Profile]
    M --> N[Wait for Student Requests]
    N --> O[Review Student Requests]
    O --> H
    H --> I
    I --> P[Tutor views reviews ]
    P --> N

    B -->|Manage platform| Q[Admin Dashboard]
    R --> S[Manage User]
    S --> T[Monitor Tutor Application]
    T --> U[View SummaryDashboard]

    <img width="646" height="1058" alt="User-Flow drawio" src="https://github.com/user-attachments/assets/3380f89e-c74e-4ad3-aa20-b508b54ec997" />

