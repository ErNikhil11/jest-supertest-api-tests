## User Login API

### Positive Test Case

#### Test Case 1: Valid credentials

- **Description**: Verify that a registered user can log in successfully with the correct credentials.
- **Preconditions**: User must be registered with valid credentials.
- **Steps**:
  1. Send a POST request to the login endpoint with the correct email and password.
- **Expected Result**: User is logged in successfully and receives a token.

### Negative Test Cases

#### Test Case 1: Unregistered Email

- **Description**: Attempt to log in with an unregistered email.
- **Steps**:
  1. Send a POST request to the login endpoint with an email not in the database and a valid password.
- **Expected Result**: An error message is returned indicating that the user not registered.

#### Test Case 2: Incorrect Password

- **Description**: Attempt to log in with an incorrect password.
- **Steps**:
  1. Send a POST request to the login endpoint with a registered email and an incorrect password.
- **Expected Result**: An error message is returned indicating that the password is incorrect.

#### Test Case 3: Missing Password

- **Description**: Attempt to log in without a password
- **Steps**:
  1. Send a POST request to the login endpoint with a registered email and either no password
- **Expected Result**: An error message is returned indicating that the missing password

#### Test Case 4: Missing Email

- **Description**: Attempt to log in without a email
- **Steps**:
  1. Send a POST request to the login endpoint without a registered email
- **Expected Result**: An error message is returned indicating that the missing email or username
