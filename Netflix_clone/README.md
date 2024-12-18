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

## User Routes

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | /api/users           | Get all users (Admin only)      |
| GET    | /api/users/:id       | Get a single user by ID         |
| PUT    | /api/users/:id       | Update user details by ID      |
| DELETE | /api/users/:id       | Delete a user by ID            |

## Video Routes

| Method | Endpoint             | Description                         |
|--------|----------------------|-------------------------------------|
| GET    | /api/videos          | Get all videos                      |
| GET    | /api/videos/:id      | Get a single video by ID           |
| POST   | /api/videos          | Add a new video                    |
| PUT    | /api/videos/:id      | Update video details by ID         |
| DELETE | /api/videos/:id      | Delete a video by ID               |

---

## Usage

### Register a User

Use the following `curl` command to register a new user:

POST http://localhost:5000/api/auth/register
Content-Type: application/json
{
  "email": "user@example.com",
  "password": "password123"
}
### Get All Videos

Use the following `curl` command to fetch all videos (requires a valid JWT token):

GET http://localhost:5000/api/videos
```bash
Authorization: Bearer <your_jwt_token>
```
Get a Single Video by ID
Use the following curl command to get a single video by ID (requires a valid JWT token):

GET http://localhost:5000/api/videos/:id
```bash
Authorization: Bearer <your_jwt_token>
```
Add a New Video
Use the following curl command to add a new video:

POST http://localhost:5000/api/videos
```bash
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
{
  "title": "The Matrix",
  "description": "A hacker learns the truth about reality.",
  "category": "Sci-Fi",
  "imageUrl": "https://example.com/image.jpg"
}
```
Update Video Details by ID
Use the following curl command to update video details by ID:

PUT http://localhost:5000/api/videos/:id
```bash
Content-Type: application/json
Authorization: Bearer <your_jwt_token>
{
  "title": "The Matrix - Reloaded",
  "description": "The sequel to The Matrix.",
  "category": "Sci-Fi",
  "imageUrl": "https://example.com/updated-image.jpg"
}
```
### Delete a Video by ID
Use the following curl command to delete a video by ID:

DELETE http://localhost:5000/api/videos/:id
```bash
Authorization: Bearer <your_jwt_token>
```
Get All Users (Admin only)
Use the following curl command to fetch all users (Admin only):

GET http://localhost:5000/api/users
```bash
Authorization: Bearer <your_jwt_token>
```
Get a Single User by ID
Use the following curl command to get a single user by ID:

GET http://localhost:5000/api/users/:id
```bash
Authorization: Bearer <your_jwt_token>
```
