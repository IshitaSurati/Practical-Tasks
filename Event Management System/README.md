# Event Management System

### Backend:
- Deployed on Render: [Backend URL](https://event-management-system-tanf.onrender.com)

A simple Event Management System built with React (Frontend) and Node.js with Express (Backend). Users can create, view, edit, manage events, RSVP, and get notified about event updates.

### Backend (Node.js & Express)

### Tech Stack:
- Node.js
- Express.js
- MongoDB (for storing events and user data)
- JWT (for user authentication)

### API Endpoints:
- POST /api/signup: Create a new user (name, email, password).
- POST /api/login: User login with JWT authentication.
- GET /api/events: Get a list of all upcoming events.
- POST /api/events: Create a new event.
- PATCH /api/events/:id: Edit an existing event.
- DELETE /api/events/:id: Delete an event.

### Installation:
- Clone the repository.
- Run npm install to install dependencies.
- Set up your .env file with the required variables (e.g., JWT_SECRET, MONGO_URI).
- Start the server with npm start.
- Running Locally:
- To run the backend locally, use:
    ```bash
    npm start
- The server will be available at http://localhost:8000.


