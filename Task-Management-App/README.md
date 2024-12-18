# Task Management API

### Backend:
- Deployed on Render: [Backend URL](https://task-management-wajy.onrender.com)

This repository provides the backend implementation for a task management system, featuring user authentication, task management, and secure API access with JWT authentication.

## Features

- **User Authentication**: Register, login, and manage users with JWT authentication.
- **Task Management**: Create, read, and manage tasks associated with users.
- **Secure Authentication**: Password hashing with bcrypt and JWT-based authentication.
- **MongoDB Integration**: Database for storing user and task information.
- **Role-based Access Control**: Admin users can create tasks, and normal users can view their tasks.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Framework for building web applications.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB ODM library.
- **bcrypt.js**: Library for hashing passwords.
- **JWT**: JSON Web Tokens for secure authentication.
- **dotenv**: Environment variable management.

## API Endpoints

### Authentication Routes

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| POST   | `/api/auth/register`   | Register a new user        |
| POST   | `/api/auth/login`      | Login a user               |
| GET    | `/api/auth/profile`    | Get user profile           |

#### 1. **Register a new user**
- **Method**: `POST`
- **Endpoint**: `/api/auth/register`
- **Request Body**:
    ```json
    {
      "username": "johndoe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "user123",
        "username": "johndoe",
        "email": "johndoe@example.com"
      }
    }
    ```

#### 2. **Login a user**
- **Method**: `POST`
- **Endpoint**: `/api/auth/login`
- **Request Body**:
    ```json
    {
      "email": "johndoe@example.com",
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
- **Endpoint**: `/api/auth/profile`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "user123",
      "username": "johndoe",
      "email": "johndoe@example.com"
    }
    ```

---

### Task Management Routes

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/tasks`           | Create a new task          |
| GET    | `/api/tasks`           | Get all tasks              |
| GET    | `/api/tasks/:id`       | Get a specific task        |
| PUT    | `/api/tasks/:id`       | Update a specific task     |
| DELETE | `/api/tasks/:id`       | Delete a specific task     |

#### 1. **Create a new task**
- **Method**: `POST`
- **Endpoint**: `/api/tasks`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "title": "Complete project report",
      "description": "Write and submit the final report for the project.",
      "dueDate": "2024-12-25T12:00:00Z",
      "status": "Pending"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "Task created successfully",
      "task": {
        "id": "task123",
        "title": "Complete project report",
        "description": "Write and submit the final report for the project.",
        "dueDate": "2024-12-25T12:00:00Z",
        "status": "Pending"
      }
    }
    ```

#### 2. **Get all tasks**
- **Method**: `GET`
- **Endpoint**: `/api/tasks`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "task123",
        "title": "Complete project report",
        "description": "Write and submit the final report for the project.",
        "dueDate": "2024-12-25T12:00:00Z",
        "status": "Pending"
      }
    ]
    ```

#### 3. **Get a specific task by ID**
- **Method**: `GET`
- **Endpoint**: `/api/tasks/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "task123",
      "title": "Complete project report",
      "description": "Write and submit the final report for the project.",
      "dueDate": "2024-12-25T12:00:00Z",
      "status": "Pending"
    }
    ```

#### 4. **Update a specific task**
- **Method**: `PUT`
- **Endpoint**: `/api/tasks/:id`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "title": "Complete project report - Updated",
      "description": "Write, review, and submit the final report for the project.",
      "dueDate": "2024-12-27T12:00:00Z",
      "status": "In Progress"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "Task updated successfully",
      "task": {
        "id": "task123",
        "title": "Complete project report - Updated",
        "description": "Write, review, and submit the final report for the project.",
        "dueDate": "2024-12-27T12:00:00Z",
        "status": "In Progress"
      }
    }
    ```

#### 5. **Delete a specific task**
- **Method**: `DELETE`
- **Endpoint**: `/api/tasks/:id`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```

---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated before accessing protected routes.
    - **Purpose**: Applied to all routes that require authentication (e.g., task management, profile).

- **roleMiddleware**: Verifies the user's role to ensure they have an admin role to access certain routes, such as task creation.
    - **Purpose**: Used to restrict task creation to admin users only.

---

## Installation

### Prerequisites

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Set up MongoDB locally or use MongoDB Atlas for cloud storage.

### Setup

1. Clone this repository:
   ```bash
   2. Install dependencies:
```bash
npm install
```
3. Create a .env file in the root directory and add the following variables:
```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```
4.Start the server:
```bash
npm start
```
5. The server will run on http://localhost:7000.
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
