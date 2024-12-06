# Airbnb Clone

backend-url: https://airbnb-clone-4n8e.onrender.com

-> This is the backend for an Airbnb Clone built using the MERN stack (MongoDB, Express, React, Node.js). The backend handles user authentication, property listing management, and booking functionality. It provides RESTful APIs for the frontend to interact with.

# Project Overview

-> This backend project is responsible for the following features:
* User Authentication: Register, Login, and JWT-based Authentication.
* Property Management: CRUD operations to create, update, delete, and view properties.
* Booking Management: CRUD operations to manage bookings, including adding, editing, and deleting bookings.
* It is intended to work alongside the frontend (which can be built using React) to provide full functionality for an Airbnb-like application.

# Technologies Used

* MongoDB: Database for storing data related to users, properties, and bookings.
* Express.js: Web framework for Node.js used to build the RESTful APIs.
* Node.js: JavaScript runtime environment used for building the backend server.
* JWT (JSON Web Tokens): Used for secure user authentication.
* bcryptjs: Used for hashing passwords securely.
* dotenv: To manage environment variables.
* CORS: For enabling cross-origin resource sharing between the frontend and backend.

# Testing API Endpoints

-> Once the server is running, you can test the following API endpoints:

** User Authentication
- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Login an existing user and receive a JWT token.
- GET /api/auth/ : get all registed users data
  
** Property Management
- GET /api/properties: Get all properties.
- POST /api/properties: Create a new property (authentication required).
- PUT /api/properties/:propertyId: Update a property (authentication required).
- DELETE /api/properties/:propertyId: Delete a property (authentication required).
  
** Booking Management
- GET /api/bookings: Get all bookings (authentication required).
- POST /api/bookings: Create a new booking (authentication required).
- DELETE /api/bookings/:id: Delete a booking (authentication required).
