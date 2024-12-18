# Netflix-Clone-MERN

### Backend:
- Deployed on Render: [Backend URL](https://netflix-clone-m8eq.onrender.com)

This is the backend API for a Netflix clone built using the MERN (MongoDB, Express, React, Node.js) stack. It handles user authentication, video content management, and the core features of a streaming platform.

---

## Features

- **User Authentication:**
  - Register a new user with email and password.
  - Login and obtain a JWT token for authentication.
  - Protected routes using JWT for secure access.

- **Video Management:**
  - CRUD operations for videos (Create, Read, Update, Delete).
  - Add video titles with descriptions, categories, and image URLs.
  - Fetch video details for playback.

- **User Management:**
  - Admin can fetch all users, update user information, and delete users.
  - Fetch a single user’s data or update it.

- **Error Handling:**
  - Centralized error handling for better debugging.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database.
- **Mongoose**: MongoDB Object Data Modeling (ODM).
- **JWT**: JSON Web Tokens for authentication.
- **dotenv**: Environment variable management.
- **cors**: Enable Cross-Origin Resource Sharing.
- **Bcrypt.js**: Password hashing.

---

# API Endpoints

## Auth Routes

| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| POST   | /api/auth/register    | Register a new user    |
| POST   | /api/auth/login       | Login a user           |

### Response Example for **/api/auth/register (POST)**:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "12345",
    "email": "user@example.com"
  }
}
```
### Response Example for /api/auth/login (POST):
```json
{
  "message": "Login successful",
  "token": "<your_jwt_token>"
}
```

# User Routes

|Method  |	Endpoint	    | Description                 |
|--------|----------------|-----------------------------|
|GET	   |/api/users	    |Get all users (Admin only)   |
|GET	   |/api/users/:id	|Get a single user by ID      |
|PUT	   |/api/users/:id	|Update user details by ID    |
|DELETE	 |/api/users/:id	|Delete a user by ID          |

### Response Example for /api/users (GET):
