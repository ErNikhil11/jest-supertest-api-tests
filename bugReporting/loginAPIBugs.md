# Bug Documentation for User Login API

## Test Case 2: Incorrect Password

### Description

Attempt to log in with an incorrect password for a registered email.

### Preconditions

- The email being tested must be a registered email in the system.
- The correct password for the registered email must be known.

### Environment

Staging

### Steps to Reproduce the Bug

1. Ensure you have a registered email, e.g., `emma.wong@reqres.in`.
2. Send a POST request to the login endpoint with the following payload:

   ```json
   {
     "email": "emma.wong@reqres.in",
     "password": "WrongPassword123"
   }
   ```

### Bug

User is able to login the application with incorrect password

### Expected Result:

An error message is returned indicating that the password is incorrect, such as:

```json
{
  "error": "Password is incorrect."
}
```

### Actual Result

User is not getting any error message and logging in successfully
