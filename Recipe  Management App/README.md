# Recipe-Management-App

# Recipe Management API

### Backend:
- Deployed on Render: [Backend URL](https://recipe-management-app-vgik.onrender.com)

This repository provides the backend implementation for a recipe management system, featuring user authentication, recipe management, and file upload functionality.

## Features

- **User Authentication**: Register, login, and manage users with JWT authentication.
- **Recipe Management**: Create, read, update, and delete recipes.
- **File Upload**: Supports image uploads for recipes using Multer.
- **Secure Authentication**: Password hashing with bcrypt and JWT-based authentication.
- **MongoDB Integration**: Database for storing user and recipe information.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Framework for building web applications.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB ODM library.
- **Multer**: File upload middleware for handling image uploads.
- **bcrypt.js**: Library for hashing passwords.
- **JWT**: JSON Web Tokens for secure authentication.
- **dotenv**: Environment variable management.

## API Endpoints

### Authentication

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| POST   | `/api/users/register`   | Register a new user   |
| POST   | `/api/users/login`      | Login a user          |
| GET    | `/api/users/profile`    | Get user profile      |
| POST   | `/api/users/logout`     | Logout the user       |

### Recipes

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | `/api/recipes`        | Create a new recipe        |
| GET    | `/api/recipes`        | Get all recipes            |
| GET    | `/api/recipes/:id`    | Get a specific recipe      |
| PUT    | `/api/recipes/:id`    | Update a specific recipe   |
| DELETE | `/api/recipes/:id`    | Delete a specific recipe   |

---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated.

---

## File Uploads

- Files are uploaded using **Multer** and stored in the `uploads/` directory.
- Each uploaded file is renamed with its original extension.

---

## Installation

### Prerequisites

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Set up MongoDB locally or use MongoDB Atlas for cloud storage.


