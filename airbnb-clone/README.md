# Airbnb Clone - Backend API

### Backend:
- Deployed on Render: [Backend URL](https://airbnb-clone-4n8e.onrender.com/)

This is the backend for an **Airbnb Clone** built using the **MERN** stack (MongoDB, Express, React, Node.js). The backend handles user authentication, property listing management, and booking functionality. It provides RESTful APIs for the frontend to interact with.

## Project Overview

This backend project provides the following features:
- **User Authentication**: Register, login, and JWT-based Authentication.
- **Property Management**: CRUD operations to create, update, delete, and view properties.
- **Booking Management**: CRUD operations to manage bookings, including adding, editing, and deleting bookings.
  
The backend works in conjunction with a frontend (which can be built using React) to provide full functionality for an Airbnb-like application.

---

## Technologies Used

- **MongoDB**: Database for storing user, property, and booking data.
- **Express.js**: Web framework for Node.js to build RESTful APIs.
- **Node.js**: JavaScript runtime environment to run the server.
- **JWT (JSON Web Tokens)**: Secure user authentication mechanism.
- **bcryptjs**: Library for securely hashing passwords.
- **dotenv**: To manage environment variables.
- **CORS**: For enabling cross-origin resource sharing between the frontend and backend.

---

## API Endpoints

### 1. **User Authentication Routes**

| Method | Endpoint            | Description                              |
|--------|---------------------|------------------------------------------|
| POST   | `/api/auth/register` | Register a new user                     |
| POST   | `/api/auth/login`    | Login an existing user and receive JWT   |
| GET    | `/api/auth/`         | Get data of all registered users         |

#### **POST /api/auth/register**
- **Description**: Register a new user.
- **Request Body**:
    ```json
    {
      "username": "john_doe",
      "email": "john_doe@example.com",
      "password": "password123"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "user123",
        "username": "john_doe",
        "email": "john_doe@example.com"
      }
    }
    ```

#### **POST /api/auth/login**
- **Description**: Login an existing user and receive a JWT token.
- **Request Body**:
    ```json
    {
      "email": "john_doe@example.com",
      "password": "password123"
    }
    ```
- **Response Body**:
    ```json
    {
      "token": "jwt_token_here"
    }
    ```

#### **GET /api/auth/**
- **Description**: Get data of all registered users.
- **Authorization**: Requires admin privileges (JWT token).

---

### 2. **Property Management Routes**

| Method | Endpoint                 | Description                             |
|--------|--------------------------|-----------------------------------------|
| GET    | `/api/properties`         | Get all properties                      |
| POST   | `/api/properties`         | Create a new property (authentication required) |
| PUT    | `/api/properties/:propertyId` | Update a property (authentication required) |
| DELETE | `/api/properties/:propertyId` | Delete a property (authentication required) |

#### **GET /api/properties**
- **Description**: Get a list of all properties.
- **Response Body**:
    ```json
    [
      {
        "id": "property123",
        "title": "Cozy Beach House",
        "description": "A lovely beach house with ocean views.",
        "price": 100,
        "location": "Miami Beach"
      }
    ]
    ```

#### **POST /api/properties**
- **Description**: Create a new property (authentication required).
- **Request Body**:
    ```json
    {
      "title": "Luxury Apartment",
      "description": "A modern apartment in downtown.",
      "price": 150,
      "location": "New York"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "Property created successfully",
      "property": {
        "id": "property124",
        "title": "Luxury Apartment",
        "description": "A modern apartment in downtown.",
        "price": 150,
        "location": "New York"
      }
    }
    ```

#### **PUT /api/properties/:propertyId**
- **Description**: Update an existing property (authentication required).
- **Request Body**:
    ```json
    {
      "title": "Luxury Apartment - Updated",
      "description": "Updated description for the apartment.",
      "price": 180,
      "location": "New York - Central Park"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "Property updated successfully",
      "property": {
        "id": "property124",
        "title": "Luxury Apartment - Updated",
        "description": "Updated description for the apartment.",
        "price": 180,
        "location": "New York - Central Park"
      }
    }
    ```

#### **DELETE /api/properties/:propertyId**
- **Description**: Delete a property (authentication required).
- **Response Body**:
    ```json
    {
      "message": "Property deleted successfully"
    }
    ```

---

### 3. **Booking Management Routes**

| Method | Endpoint                 | Description                             |
|--------|--------------------------|-----------------------------------------|
| GET    | `/api/bookings`           | Get all bookings (authentication required) |
| POST   | `/api/bookings`           | Create a new booking (authentication required) |
| DELETE | `/api/bookings/:id`       | Delete a booking (authentication required) |

#### **GET /api/bookings**
- **Description**: Get a list of all bookings (authentication required).
- **Response Body**:
    ```json
    [
      {
        "id": "booking123",
        "userId": "user123",
        "propertyId": "property123",
        "checkIn": "2024-12-01T15:00:00Z",
        "checkOut": "2024-12-07T11:00:00Z"
      }
    ]
    ```

#### **POST /api/bookings**
- **Description**: Create a new booking (authentication required).
- **Request Body**:
    ```json
    {
      "propertyId": "property123",
      "checkIn": "2024-12-01T15:00:00Z",
      "checkOut": "2024-12-07T11:00:00Z"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "Booking created successfully",
      "booking": {
        "id": "booking124",
        "userId": "user123",
        "propertyId": "property123",
        "checkIn": "2024-12-01T15:00:00Z",
        "checkOut": "2024-12-07T11:00:00Z"
      }
    }
    ```

#### **DELETE /api/bookings/:id**
- **Description**: Delete a booking (authentication required).
- **Response Body**:
    ```json
    {
      "message": "Booking deleted successfully"
    }
    ```

---

## Middleware

- **authMiddleware**: Verifies the JWT token to ensure the user is authenticated before accessing protected routes (e.g., property creation, booking management).
- **roleMiddleware**: Ensures the user has the appropriate role (e.g., admin privileges) to perform certain actions like creating properties.

---

## Installation

### Prerequisites

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Set up MongoDB locally or use MongoDB Atlas for cloud storage.

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/airbnb-clone.git
   cd airbnb-clone
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
5. The server will run on http://localhost:5000.
