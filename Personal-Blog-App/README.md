# Personal-Blog-App

### Backend:
- Deployed on Render: [Backend URL](https://personal-blog-app-5fht.onrender.com)

This repository provides the backend implementation for a user and post management system. It includes features such as user authentication, CRUD operations for posts, and file upload functionality.

## Features

- **User Management**: Register, login, and manage users with JWT authentication.
- **Post Management**: Create, read, update, and delete posts.
- **File Upload**: Supports image uploads for post covers using Multer.
- **Secure Authentication**: Password hashing with bcrypt and JWT-based authentication.
- **MongoDB Integration**: Database for storing user and post information.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Framework for building web applications.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB ODM library.
- **Multer**: File upload middleware.
- **bcrypt.js**: Library for hashing passwords.
- **JWT**: JSON Web Tokens for secure authentication.
- **dotenv**: Environment variable management.

---

## API Endpoints

### Authentication Routes

#### 1. **Register a new user**
- **Method**: `POST`
- **Endpoint**: `/register`
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
      "message": "User registered successfully.",
      "user": {
        "id": "12345",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
    ```

#### 2. **Login a user**
- **Method**: `POST`
- **Endpoint**: `/login`
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
- **Endpoint**: `/profile`
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

#### 4. **Logout the user**
- **Method**: `POST`
- **Endpoint**: `/logout`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "message": "User logged out successfully."
    }
    ```

---

### Post Routes

#### 1. **Create a new post**
- **Method**: `POST`
- **Endpoint**: `/post`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "title": "My First Post",
      "content": "This is the content of my first post.",
      "image": "<image_file>"  // Optional, for file uploads
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "67890",
      "title": "My First Post",
      "content": "This is the content of my first post.",
      "image": "uploads/first-post.jpg", // If image is uploaded
      "author": {
        "id": "12345",
        "name": "John Doe"
      },
      "createdAt": "2024-12-18T12:00:00Z"
    }
    ```

#### 2. **Get all posts**
- **Method**: `GET`
- **Endpoint**: `/post`
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "67890",
        "title": "My First Post",
        "content": "This is the content of my first post.",
        "author": {
          "id": "12345",
          "name": "John Doe"
        },
        "createdAt": "2024-12-18T12:00:00Z"
      },
      {
        "id": "67891",
        "title": "My Second Post",
        "content": "This is the content of my second post.",
        "author": {
          "id": "12345",
          "name": "John Doe"
        },
        "createdAt": "2024-12-19T12:00:00Z"
      }
    ]
    ```

#### 3. **Get a specific post by ID**
- **Method**: `GET`
- **Endpoint**: `/post/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "67890",
      "title": "My First Post",
      "content": "This is the content of my first post.",
      "author": {
        "id": "12345",
        "name": "John Doe"
      },
      "createdAt": "2024-12-18T12:00:00Z"
    }
    ```

#### 4. **Update a post**
- **Method**: `PUT`
- **Endpoint**: `/post/:id`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "title": "My Updated Post",
      "content": "This is the updated content of my post."
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "67890",
      "title": "My Updated Post",
      "content": "This is the updated content of my post.",
      "author": {
        "id": "12345",
        "name": "John Doe"
      },
      "updatedAt": "2024-12-19T12:00:00Z"
    }
    ```

---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated.
    - **Purpose**: Used in all protected routes (e.g., post creation, profile, etc.) to ensure the request comes from an authenticated user.

---

## File Uploads

- Files (such as post images) are uploaded using **Multer**.
- Uploaded files are stored in the `uploads/` directory and renamed with a unique identifier and their original extension.

---

## Usage

### Register a New User

- **POST**: `http://localhost:5000/register`
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### Login a User

- **POST**: `http://localhost:5000/login`
- **Request Body**:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### Get User Profile

- **GET**: `http://localhost:5000/profile`
- **Authorization**: `Bearer <JWT_Token>`

### Logout User

- **POST**: `http://localhost:5000/logout`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**: None

### Create a New Post

- **POST**: `http://localhost:5000/post`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "title": "My First Post",
      "content": "This is the content of my first post.",
      "image": "<image_file>"  // Optional, for file uploads
    }
    ```

### Get All Posts

- **GET**: `http://localhost:5000/post`
- **Authorization**: `Bearer <JWT_Token>`

### Get a Specific Post by ID

- **GET**: `http://localhost:5000/post/:id`
- **Authorization**: `Bearer <JWT_Token>`

### Update a Post

- **PUT**: `http://localhost:5000/post/:id`
- **Authorization**: `Bearer <JWT_Token>`
- **Request Body**:
    ```json
    {
      "title": "My Updated Post",
      "content": "This is the updated content of my post."
    }
    ```

### Delete a Post

- **DELETE**: `http://localhost:5000/post/:id`
- **Authorization**: `Bearer <JWT_Token>`
