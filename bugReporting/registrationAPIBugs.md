# Bug Documentation for User Registration API

## Test Case 2: Shorter password

### Description

Attempt to register with a password which is sorter than 6 characters

### Preconditions

- The email being tested must be valid and not already registered.

### Environment

Staging

### Steps to Reproduce the Bug

1. Send a POST request to the registration endpoint with the following payload:
   ```json
   {
     "email": "emma.wong@reqres.in",
     "password": "sim"
   }
   ```

### Bug

User is able to register the user with shorter password

### Expected Result

An error message is returned indicating that the password must contain 6 or more characters such as

```json
{
  "error": "Password must contain at least 6 characters"
}
```

### Actual Result

The response from the server is 200. user is able to register with shorter password

---

## Test Case 3: Password Lacking Complexity

### Description

Attempt to register with a password that doesn’t contain an uppercase letter, number, or special character.

### Preconditions

- The email being tested must be valid and not already registered.

### Environment

Staging

### Steps to Reproduce the Bug

1. Send a POST request to the registration endpoint with the following payload:
   ```json
   {
     "email": "emma.wong@reqres.in",
     "password": "simplepassword"
   }
   ```

### Bug

User is able to register the user with password lacking complexity

### Expected Result

An error message is returned indicating that the password must contain an uppercase letter, number, or special character, such as:

```json
{
  "error": "Password must contain at least one uppercase letter, one number, and one special character."
}
```

### Actual Result

The response from the server is 200. user is able to register the user.

---

## Test Case 4: Already registered email

### Description

Attempt to register using an email which is already registered.

### Preconditions

- The email being tested must registered

### Environment

Staging

### Steps to Reproduce the Bug

1. Send a POST request to the registration endpoint with the following payload:
   ```json
   {
     "email": "emma.wong@reqres.in",
     "password": "Password1!"
   }
   ```

### Bug

User is able to register the user using exiting email id

### Expected Result

An error message is returned indicating user/email already exist

```json
{
  "error": "Entered email/username already exists"
}
```

### Actual Result

The response from the server is 200. User is able to register already registered email id
