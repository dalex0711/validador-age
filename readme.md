# Age Checker

This is an interactive web project that allows the user to determine whether they are over or under 18, displaying a personalized message based on the result.

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)

## Features

- Welcome screen.
- Form to enter name and age.
- Validation of empty fields and non-numeric age.
- Personalized message based on whether the user is over or under 18.
- Button to restart the application.

## How does it work?

1. The user starts from a welcome screen.
2. Clicking "Continue" displays a form.
3. After entering the name and age, a message is displayed depending on whether the user is over or under 18.
4. The "Back" button reloads the page to start over.

## Why were inputs used instead of prompts?

Although using `prompt()` was an alternative, form inputs were chosen because they allow for a better user experience, complete visual control, more secure validations, and a modern interface that more closely resembles real-world applications.

## File Structure
.
├── index.html
├── readme.md
├── script.js
└── style.css