# Library-Management-App

### Backend:
- Deployed on Render: [Backend URL](https://library-management-app-c1p7.onrender.com)

This is the backend API for a Book Management System. It handles user authentication and book-related operations using Node.js, Express, and MongoDB.

---

## Features

- User Authentication:
  - Register a new user.
  - Login and obtain a JWT token.
  - Protected routes using JWT.

- Book Management:
  - CRUD operations for books (Create, Read, Update, Delete).
  - Search and filter books by title, author, or genre.

- Error Handling:
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

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend

# Project Setup

## Install Dependencies

- Run the following command to install all necessary dependencies:

- npm install

## Configuration

Create a `.env` file in the root directory and add the following variables:

- PORT=5000 MONGO_URI=<your_mongodb_connection_string> 
- JWT_SECRET=<your_secret_key>



## Start the Server

Start the server by running:

- npm start

- The server will run on [http://localhost:5000](http://localhost:5000).

---

## API Endpoints

### Auth Routes

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| POST   | `/api/auth/register`  | Register a new user  |
| POST   | `/api/auth/login`     | Login a user         |

### Book Routes

| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| GET    | `/api/books`          | Get all books                  |
| GET    | `/api/books/:id`      | Get a single book by ID         |
| POST   | `/api/books`          | Add a new book                 |
| PUT    | `/api/books/:id`      | Update book details by ID      |
| DELETE | `/api/books/:id`      | Delete a book by ID            |

---

## Usage

### Register a User

- Use the following `curl` command to register a new user:

- POST http://localhost:5000/api/auth/register
- "Content-Type: application/json"
- '{"name":"John Doe", 
    "email":"john@example.com", 
    "password":"123456"}'

### Login a User

- Use the following `curl` command to login a user:

- POST http://localhost:5000/api/auth/login
- "Content-Type: application/json"
- '{"email":"john@example.com", 
    "password":"123456"}'

### Get All Books

Use the following `curl` command to fetch all books (requires a valid JWT token):

- GET http://localhost:5000/api/books
- "Authorization: Bearer <your_jwt_token>"

### Get a Single Book by ID

Use the following `curl` command to get a single book by ID (requires a valid JWT token):

- GET http://localhost:5000/api/books/:id
- "Authorization: Bearer <your_jwt_token>"

### Add a New Book

Use the following `curl` command to add a new book:

- POST http://localhost:5000/api/books
- "Content-Type: application/json"
- "Authorization: Bearer <your_jwt_token>"
- '{"title":"The Great Gatsby", 
    "author":"F. Scott Fitzgerald", 
    "genre":"Fiction", 
    "year":1925}'

### Update Book Details by ID

Use the following `curl` command to update book details by ID:

- PUT http://localhost:5000/api/books/:id
- "Content-Type: application/json"
- "Authorization: Bearer <your_jwt_token>"
- '{"title":"The Great Gatsby - Updated",
    "author":"F. Scott Fitzgerald", 
    "genre":"Fiction", 
    "year":1926}'

### Delete a Book by ID

Use the following `curl` command to delete a book by ID:

- DELETE http://localhost:5000/api/books/:id
- "Authorization: Bearer <your_jwt_token>"

---


