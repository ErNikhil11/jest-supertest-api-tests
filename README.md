# 🧪 API Automation – Jest and Supertest

This project demonstrates a **real-world API testing scenario**, focused on validating and automating the **user login** and **registration** functionalities of a backend system. It showcases both **manual and automated testing skills**, along with structured bug reporting — all essential skills for a **Software Development Engineer in Test (SDET)** role.

> 🚀 Designed to reflect practical QA workflows, this repository highlights my expertise in JavaScript-based test automation, API validation, test case design, and issue documentation.

---

## 📌 Project Overview

The goal of this project is to ensure the robustness and reliability of the authentication APIs by:

- Testing key user flows like registration and login
- Validating error handling and status codes
- Documenting test cases and bugs for transparency and reproducibility
- Automating functional tests using Jest

---

## 🧰 Tech Stack

| Layer        | Tools/Frameworks              |
| ------------ | ----------------------------- |
| Language     | JavaScript                    |
| Test Runner  | Jest                          |
| Assertion    | Built-in Jest                 |
| Reporting    | Markdown-based manual reports |
| Bug Tracking | Markdown-based API bug logs   |

---

# Project Structure

- **tests/**: Contains individual test files for various API endpoints, ensuring they behave as expected.

- **fixtures/**: Contains JSON files with error messages to maintain consistency across tests.

- **testCases/**: Provides detailed markdown documentation of test cases for each API, specifying expected inputs and outputs.

- **bugReporting/**: Stores documentation of any bugs found during testing, which helps track issues and improvements.

- **.env**: Manages environment-specific variables that are essential for configuring the application.

This structured approach ensures clarity and efficiency in testing and documentation, making it easier for developers to contribute and maintain the project.

## ✅ Test Case Strategy

- **Manual Testing**: Clear, markdown-based test cases covering both happy path and edge cases.
- **Automation**: Functional test scripts using Jest to validate response codes, payloads, and error scenarios.
- **Negative Testing**: Checks for invalid data, missing fields, incorrect formats, and unauthorized access.

---

## 🐞 Bug Reporting

Bugs are logged in markdown documents and include:

- Descriptive title
- Clear reproduction steps
- Expected vs. Actual behavior
- Severity & priority tags

This reflects strong documentation habits for issue tracking and QA audits.

---

## Prerequisites

Ensure you have the following installed:

- Node.js (version >= 14)
- npm

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install the dependencies:**

   ```
   npm install
   ```

3. **Running Tests:**
   To run the tests, execute the following command:
   ```
   npm test
   ```
