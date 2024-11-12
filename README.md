# Password Validator

## Description

This Password Validator action is designed for use in Betty Blocks applications. It allows you to validate passwords based on configurable criteria such as length, the presence of special characters, uppercase and lowercase letters, and a custom regular expression. Use this action to enforce password security policies within your application.

## Features

- **Minimum and Maximum Length**: Set the acceptable length range for passwords.
- **Special Characters**: Optionally, require special characters (e.g., `!@#$%^&*()`).
- **Uppercase Letters**: Optionally, require at least one uppercase letter.
- **Lowercase Letters**: Optionally, require at least one lowercase letter.
- **Custom Regex**: Optionally, validate the password with a custom regular expression.


## Configuration Options

Below are the options available in this action's configuration:

- **Password**: (String) The password to validate.
- **minLength**: (Number) Minimum password length (default: `1`).
- **maxLength**: (Number) Maximum password length (default: `18`).
- **specialCharacter**: (Boolean) Requires special characters if `true` (default: `false`).
- **upperCase**: (Boolean) Requires uppercase letters if `true` (default: `false`).
- **lowerCase**: (Boolean) Requires lowercase letters if `true` (default: `false`).
- **customRegex**: (String or Regex) An optional custom regex to validate the password (default: `""`).


