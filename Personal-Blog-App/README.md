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


## API Endpoints

### Authentication

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| POST   | `/register`   | Register a new user   |
| POST   | `/login`      | Login a user          |
| GET    | `/profile`    | Get user profile      |
| POST   | `/logout`     | Logout the user       |

### Posts

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | `/post`        | Create a new post        |
| GET    | `/post`        | Get all posts            |
| GET    | `/post/:id`    | Get a specific post      |
| PUT    | `/post/:id`    | Update a specific post   |

---

## Middleware

- **authMiddleware**: Verifies JWT tokens to ensure the user is authenticated.

---

## File Uploads

- Files are uploaded using **Multer** and stored in the `uploads/` directory.
- Each uploaded file is renamed with its original extension.





