### Quiz Application Backend

### Backend:
- Deployed on Render: [Backend URL](https://quiz-app-backend-cqnm.onrender.com)

This repository provides the backend implementation for a quiz management system. It includes features such as user authentication, quiz management (CRUD operations), and quiz submission with scoring functionality.

## Features

- **User Authentication**: Signup, login, and manage users with JWT authentication.
- **Quiz Management**: Create, read, update, and delete quizzes.
- **Quiz Submission**: Submit answers for quizzes, calculate score, and receive feedback.
- **Secure Authentication**: Password hashing with bcrypt and JWT-based authentication.
- **MongoDB Integration**: Database for storing user and quiz data.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing quizzes and user data.
- **Mongoose**: MongoDB ODM for modeling data.
- **bcrypt.js**: Library for hashing passwords.
- **JWT**: JSON Web Tokens for secure authentication.
- **dotenv**: Environment variable management.

## API Endpoints

### Authentication

| Method | Endpoint        | Description               |
|--------|-----------------|---------------------------|
| POST   | `/api/users/signup` | Register a new user       |
| POST   | `/api/users/login`    | Login a user and get token |
| GET    | `/api/users/profile`  | Get logged-in user's profile |

### Quiz Management

| Method | Endpoint                 | Description                             |
|--------|--------------------------|-----------------------------------------|
| GET    | `/api/quizzes`            | Get all quizzes                        |
| GET    | `/api/quizzes/:id`        | Get a specific quiz by ID              |
| POST   | `/api/quizzes/add-quiz`   | Add a new quiz                         |
| POST   | `/api/quizzes/submit-quiz/:id` | Submit answers for a quiz and get feedback |
---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated before accessing protected routes.

---

## How to Add a Quiz

To add a quiz, send a **POST** request to `/api/quizzes/add-quiz` with the following data:

**Request:**
```json
{
  "title": "Sample Quiz",
  "description": "This is a sample quiz description.",
  "questions": [
    {
      "questionText": "What is the capital of France?",
      "choices": ["Paris", "London", "Berlin", "Madrid"],
      "correctAnswer": "Paris"
    },
    {
      "questionText": "What is 2 + 2?",
      "choices": ["3", "4", "5", "6"],
      "correctAnswer": "4"
    }
  ]
}
