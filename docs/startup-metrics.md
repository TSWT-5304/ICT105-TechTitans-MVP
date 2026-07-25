# Startup / Product Metrics

> Define metrics that show useful product activity. These metrics are based on the Power BI dashboard developed for the PeerTutor prototype and help evaluate platform usage, request management, payment activity, and operational performance.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Tutoring Requests | Usage | Shows the total number of tutoring requests in the prototype. | Count all tutoring request records. | PrototypeRecords | Dashboard |
| M-02 | Pending Requests | Status | Shows how many tutoring requests still require tutor or admin action. | Count records where CurrentStatus = "Pending". | PrototypeRecords | Dashboard |
| M-03 | Completion Rate | Validation | Measures the percentage of tutoring requests that have been completed successfully. | (Completed Requests ÷ Total Requests) × 100 | PrototypeRecords | Dashboard |
| M-04 | Total Activity Events | User Activity | Measures overall interaction with the PeerTutor platform by students, tutors, and administrators. | Count all activity log records. | ActivityLog | Dashboard |
| M-05 | Total Revenue | Business / Operational | Shows the total value of simulated tutoring payments processed through the platform. | Sum of PaymentAmountTHB. | PrototypeRecords | Dashboard |
| M-06 | Average Processing Time | Operational | Measures the average time required to process user and administrative activities. | Average of ProcessingTimeMinutes. | ActivityLog | Dashboard |

---

## 2. Metrics Interpretation

The dashboard shows that the PeerTutor prototype currently contains **15 tutoring requests**, indicating that the platform is actively managing tutoring records. 

- There are **5 pending requests**, which suggests that some requests still require tutor responses or administrative approval. 
- The **26.67% completion rate** shows that only a portion of tutoring requests have completed the full workflow, highlighting an opportunity to improve request processing and follow-up. 
- The platform recorded **36 activity events**, demonstrating active interactions between students, tutors, and administrators. The simulated payment system processed a total of **THB 8,000**, showing that the payment workflow is functioning as intended within the prototype. 
- The **average processing time of 4.53 minutes** indicates that administrative actions and user activities can be completed efficiently in the current MVP. 

Future improvements should focus on reducing pending requests, increasing the completion rate, and enhancing workflow efficiency.

---

## 3. Link to Final Prototype

These metrics are displayed in the **PeerTutor Admin Dashboard** to help administrators monitor the performance and activity of the platform. The dashboard demonstrates key indicators including **total tutoring requests, pending requests, completion rate, payment revenue, user activity, and average processing time**. These metrics provide evidence of system usage, operational performance, and business activity, while supporting future improvements to the PeerTutor platform.


