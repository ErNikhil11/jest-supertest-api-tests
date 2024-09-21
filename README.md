# Project Running Instructions

## Overview

This project is designed for API testing using **Supertest** and **Jest**. The structure includes dedicated folders for fixtures, test cases, and bug reports to enhance organization and clarity.

## Project Structure

- **tests/**: Contains individual test files for various API endpoints, ensuring they behave as expected.

- **fixtures/**: Contains JSON files with error messages to maintain consistency across tests.

- **testCases/**: Provides detailed markdown documentation of test cases for each API, specifying expected inputs and outputs.

- **bugReporting/**: Stores documentation of any bugs found during testing, which helps track issues and improvements.

- **.env**: Manages environment-specific variables that are essential for configuring the application.

This structured approach ensures clarity and efficiency in testing and documentation, making it easier for developers to contribute and maintain the project.

# Running Instructions

## Overview

This project utilizes **Supertest** and **Jest** for API testing. Follow the instructions below to set up and run the project.

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
