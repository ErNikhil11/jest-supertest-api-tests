# API Test Cases

## User Registration API

### Positive Test Case

#### Test Case 1: Valid email and password

- **Description**: Verify that a user with a valid, predefined email and a valid password can register successfully.
- **Preconditions**: Email and password must meet the criteria.
- **Steps**:
  1. Send a POST request to the registration endpoint with valid email and password.
- **Expected Result**: User is registered successfully, and a confirmation message is returned.

### Negative Test Cases

#### Test Case 1: Invalid password

- **Description**: Attempt to register with a email that is not on predefined list .
- **Steps**:
  1. Send a POST request to the registration endpoint with with a email that is not on predefined list
- **Expected Result**: An error message is returned indicating that the Note: Only defined users succeed registration.

#### Test Case 2: Short password

- **Description**: Attempt to register with a password shorter than 6 characters.
- **Steps**:
  1. Send a POST request to the registration endpoint with with a email and and password which is shorter than 6 characters.
- **Expected Result**: An error message is returned indicating password is shorter than 6 characters

#### Test Case 3: Password Lacking Complexity

- **Description**: Attempt to register with a password that doesn’t contain an uppercase letter, number, or special character.
- **Steps**:
  1. Send a POST request to the registration endpoint with a valid email and a weak password.
- **Expected Result**: An error message is returned indicating that the password must contain an uppercase letter, number, or special character.

#### Test Case 4: Email Already Registered

- **Description**: Attempt to register with an already registered email.
- **Steps**:
  1. Send a POST request to the registration endpoint with a previously registered email and a valid password.
- **Expected Result**: An error message is returned indicating that the email is already in use.
