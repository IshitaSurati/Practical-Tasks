# Task-Management-App

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

### Authentication

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| POST   | `/api/auth/register`   | Register a new user        |
| POST   | `/api/auth/login`      | Login a user               |
| GET    | `/api/auth/profile`    | Get user profile           |

### Tasks

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/tasks`           | Create a new task          |
| GET    | `/api/tasks`           | Get all tasks              |
| GET    | `/api/tasks/:id`       | Get a specific task        |
| PUT    | `/api/tasks/:id`       | Update a specific task     |
| DELETE | `/api/tasks/:id`       | Delete a specific task     |

---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated.
- **roleMiddleware**: Ensures that the user has an admin role to access specific routes.

---

## Installation

### Prerequisites

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Set up MongoDB locally or use MongoDB Atlas for cloud storage.

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
