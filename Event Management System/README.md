# Event Management System

### Backend:
- Deployed on Render: [Backend URL](https://event-management-system-tanf.onrender.com)

This is the backend API for an Event Management System that allows users to create, view, edit, manage events, RSVP, and get notified about event updates. It includes user authentication and CRUD operations for events and RSVPs.

---

## Features

1. **User Authentication:**
   - Sign up and login functionality.
   - JWT token-based authentication for secure access.

2. **Event Management:**
   - Users can create, update, and delete events.
   - Users can view a list of upcoming events and manage their RSVPs.

3. **RSVP Management:**
   - Users can RSVP for events and check their RSVP status.

4. **Database Integration:**
   - MongoDB is used to store event and user data.

---

## Prerequisites

- **Node.js** 
- **MongoDB** for the database
- **npm** (v6 or higher)
- **.env** file with the following environment variables:
  - `PORT` (optional, default is 8000)
  - `JWT_SECRET` (required for authentication)
  - `MONGO_URI` (required for MongoDB connection)

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database for event and user data storage.
- **JWT**: JSON Web Tokens for authentication.
- **dotenv**: Environment variable management.
- **cors**: For Cross-Origin Resource Sharing.

---

# API Endpoints

## Auth Routes

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | /api/signup           | Create a new user              |
| POST   | /api/login            | Login a user and get a token   |

### Example Response for **/api/signup** (POST):
```json
{
  "message": "User created successfully",
  "user": {
    "id": "60f5e0f8f0b3e6f7244e57d1",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user"
  }
}
```

### Example Response for /api/login (POST):
```json
{
  "message": "Login successful",
  "token": "<your_jwt_token>"
}
```
# Event Routes
| Method | Endpoint           | Description                       |
|--------|--------------------|-----------------------------------|
| GET    | /api/events        | Get a list of all upcoming events |
| POST   | /api/events        | Create a new event                |
| PATCH  | /api/events/:id    | Edit an existing event            |
| DELETE | /api/events/:id    | Delete an event                   |

### Example Response for /api/events (GET):
```json
[
  {
    "id": "60f5e0f8f0b3e6f7244e57d2",
    "title": "Tech Conference 2024",
    "description": "An annual conference for tech enthusiasts.",
    "date": "2024-05-15",
    "location": "New York",
    "organizer": "John Doe"
  },
  {
    "id": "60f5e0f8f0b3e6f7244e57d3",
    "title": "Coding Bootcamp",
    "description": "A week-long bootcamp to learn coding.",
    "date": "2024-06-01",
    "location": "San Francisco",
    "organizer": "Jane Smith"
  }
]

```
### Example Response for /api/events/:id (GET):    
```json
{
  "id": "60f5e0f8f0b3e6f7244e57d2",
  "title": "Tech Conference 2024",
  "description": "An annual conference for tech enthusiasts.",
  "date": "2024-05-15",
  "location": "New York",
  "organizer": "John Doe"
}

```
### Example Response for /api/events (POST):
```json
{
  "message": "Event created successfully",
  "event": {
    "id": "60f5e0f8f0b3e6f7244e57d4",
    "title": "AI Summit 2024",
    "description": "A summit on Artificial Intelligence",
    "date": "2024-07-10",
    "location": "Chicago",
    "organizer": "Alice Johnson"
  }
}

```
### Example Response for /api/events/:id (PATCH):
```json
{
  "message": "Event updated successfully",
  "event": {
    "id": "60f5e0f8f0b3e6f7244e57d2",
    "title": "Tech Conference 2024 - Updated",
    "description": "An annual conference for tech enthusiasts, updated.",
    "date": "2024-05-20",
    "location": "New York",
    "organizer": "John Doe"
  }
}


```
### Example Response for /api/events/:id (DELETE):
```json
{
  "message": "Event deleted successfully"
}

```
# RSVP Routes
| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | /api/rsvp/:eventId        | RSVP for an event                |
| GET    | /api/rsvp/:userId         | Get all RSVPs for a user         |
| GET    | /api/rsvp/events/:userId  | Get all events a user has RSVP'd to |

### Example Response for /api/rsvp/:eventId (POST):
```json
{
  "message": "RSVP successful",
  "rsvp": {
    "userId": "60f5e0f8f0b3e6f7244e57d1",
    "eventId": "60f5e0f8f0b3e6f7244e57d2",
    "status": "confirmed"
  }
}

```
### Example Response for /api/rsvp/:userId (GET):
```json
[
  {
    "eventId": "60f5e0f8f0b3e6f7244e57d2",
    "status": "confirmed"
  },
  {
    "eventId": "60f5e0f8f0b3e6f7244e57d3",
    "status": "pending"
  }
]

```
### Example Response for /api/rsvp/events/:userId (GET):
```json
[
  {
    "id": "60f5e0f8f0b3e6f7244e57d2",
    "title": "Tech Conference 2024",
    "date": "2024-05-15",
    "status": "confirmed"
  },
  {
    "id": "60f5e0f8f0b3e6f7244e57d3",
    "title": "Coding Bootcamp",
    "date": "2024-06-01",
    "status": "pending"
  }
]

```
