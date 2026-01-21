ParaBank End-to-End Quality Assurance Project

Project Overview:
This repository contains a comprehensive Quality Assurance (QA) suite for ParaBank, a retail banking application. The project demonstrates a tri-layer testing approach—Manual, Automation, and API testing—to validate financial logic, security, and UI stability.

Despite achieving coverage for all core functional requirements, the testing phase resulted in a "NO-GO" decision due to critical financial logic failures and UI instability.

Technical Stack:

Manual Testing: Structured test case design and execution (25 cases).

Automation: Playwright (Node.js) for UI browser automation.

API Testing: Postman for backend endpoint validation and status code verification.

Management: Jira for defect tracking and Microsoft Excel for the Requirements Traceability Matrix (RTM).


Test Plan: Detailed strategy covering scope, entrance/exit criteria, and risk mitigation.

Manual Test Suite: 25 test cases covering Positive, Negative, and Edge-case scenarios.

Automation Suite: Playwright scripts targeting high-priority regression flows.

Requirements Traceability Matrix (RTM): Links 11 core functional requirements to their respective test results.

Test Summary Report (TSR): A final assessment of the application’s quality and release readiness.

Critical Defects Identified
The following "Blocker" bugs were discovered during the testing cycle:

Financial Logic: System allowed negative down payments for loans and $0.00 fund transfers.

Authentication: Duplicate element IDs on the login page caused automation "Strict Mode" violations.

Navigation: Confirmed a redirect bug where internal links sent users to an external corporate domain.

Reliability: Frequent 30-second timeouts during the registration flow indicated performance bottlenecks.


Team Members

Aleena: Project Lead & Manual Testing Specialist

Aiman: Automation Engineer (Playwright)



Arisha: API Tester & Defect Manager (Postman/Jira)


Aiman: Automation Engineer (Playwright)

Arisha: API Tester & Defect Manager (Postman/Jira)
