# Quiz Application Backend

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

### Authentication Routes

#### 1. **Register a new user**
- **Method**: `POST`
- **Endpoint**: `/api/users/signup`
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "12345",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
    ```

#### 2. **Login a user**
- **Method**: `POST`
- **Endpoint**: `/api/users/login`
- **Request Body**:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- **Response Body**:
    ```json
    {
      "token": "jwt_token_here"
    }
    ```

#### 3. **Get user profile**
- **Method**: `GET`
- **Endpoint**: `/api/users/profile`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "12345",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

---

### Quiz Management Routes

#### 1. **Get all quizzes**
- **Method**: `GET`
- **Endpoint**: `/api/quizzes`
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "quiz1",
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
    ]
    ```

#### 2. **Get a specific quiz by ID**
- **Method**: `GET`
- **Endpoint**: `/api/quizzes/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "quiz1",
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
    ```

#### 3. **Add a new quiz**
- **Method**: `POST`
- **Endpoint**: `/api/quizzes/add-quiz`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
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
    ```
- **Response Body**:
    ```json
    {
      "message": "Quiz created successfully",
      "quiz": {
        "id": "quiz1",
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
    }
    ```

#### 4. **Submit answers for a quiz and get feedback**
- **Method**: `POST`
- **Endpoint**: `/api/quizzes/submit-quiz/:id`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "answers": [
        {
          "questionId": "q1",
          "answer": "Paris"
        },
        {
          "questionId": "q2",
          "answer": "4"
        }
      ]
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "Quiz submitted successfully",
      "score": 2,
      "totalQuestions": 2,
      "feedback": "Great job! You got all answers correct."
    }
    ```

---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated before accessing protected routes.
    - **Purpose**: Used in all routes where user authentication is required (e.g., adding quizzes, submitting answers).

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
