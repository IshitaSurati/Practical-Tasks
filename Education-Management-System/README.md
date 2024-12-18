# Education-Management-System

### Backend:
- Deployed on Render: [Backend URL](https://education-management-system-backend-3ytz.onrender.com)

This is the backend API for an Education Management System that manages users, courses, and submissions. It includes user authentication, role-based access control, and CRUD operations for courses and submissions.

---

## Features

1. **User Authentication:**
   - Sign up and login functionality.
   - Role-based access control (Admin, Teacher, Student).
   - JWT token-based authentication.

2. **Course Management:**
   - Admins can create, update, delete, and view courses.
   - Teachers and Students can view courses.

3. **Submission Management:**
   - Students can submit assignments for courses.
   - Teachers and Admins can view submissions by course or student.

4. **Database Integration:**
   - MongoDB is used to store user, course, and submission data.

---

## Prerequisites

- **Node.js** 
- **MongoDB** for the database
- **npm** (v6 or higher)
- **.env** file with the following environment variables:
  - `PORT` (optional, default is 4000)
  - `JWT_SECRET` (required for authentication)

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt.js**: Password hashing.
- **dotenv**: Environment variable management.
- **cors**: For Cross-Origin Resource Sharing.

---

# API Endpoints

## Auth Routes

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | /api/auth/signup      | Create a new user              |
| POST   | /api/auth/login       | Login a user and get a token   |
| GET    | /api/auth/users       | Admin: Fetch all users         |

### Example Response for **/api/auth/signup** (POST):
```json
{
  "message": "User created successfully",
  "user": {
    "id": "60f5e0f8f0b3e6f7244e57d1",
    "name": "John Doe",
    "role": "student",
    "email": "johndoe@example.com"
  }
}
```
### Example Response for /api/auth/login (POST):
```json
{
  "message": "Login successful",
  "token": "<your_jwt_token>"
}
```

# Course Routes

|Method	|Endpoint	     |Description                |
|--------|----------------|---------------------------|
|POST	   |/api/courses	  |Admin: Create a new course |
|GET	   |/api/courses	  |Fetch all courses          |
|PUT	   |/api/courses/:id|Admin: Update a course     |
|DELETE	|/api/courses/:id|Admin: Delete a course     |

### Example Response for /api/courses (GET):
```json
[
  {
    "id": "60f5e0f8f0b3e6f7244e57d2",
    "title": "Web Development 101",
    "description": "An introductory course to web development",
    "startDate": "2024-01-10",
    "endDate": "2024-06-10",
    "teacherId": "60f5e0f8f0b3e6f7244e57d0"
  },
  {
    "id": "60f5e0f8f0b3e6f7244e57d3",
    "title": "Advanced JavaScript",
    "description": "A course focused on advanced JavaScript topics",
    "startDate": "2024-02-01",
    "endDate": "2024-07-01",
    "teacherId": "60f5e0f8f0b3e6f7244e57d1"
  }
]
```
### Example Response for /api/courses/:id (GET):
```json
{
  "id": "60f5e0f8f0b3e6f7244e57d2",
  "title": "Web Development 101",
  "description": "An introductory course to web development",
  "startDate": "2024-01-10",
  "endDate": "2024-06-10",
  "teacherId": "60f5e0f8f0b3e6f7244e57d0"
}
```

### Submission Routes

|Method |Endpoint                    |	Description                                  |
|-------|----------------------------|----------------------------------------------|
|POST	  |/api/submissions	          |Students: Add a submission                    |
|GET	  |/api/submissions/course/:id |	Teachers/Admins: Get submissions for a course |
|GET	  |/api/submissions/student/:id|Students/Admins: Get submissions by student    |

### Example Response for /api/submissions (POST):
```json
{
  "message": "Submission added successfully",
  "submission": {
    "id": "60f5e0f8f0b3e6f7244e57d4",
    "courseId": "60f5e0f8f0b3e6f7244e57d2",
    "studentId": "60f5e0f8f0b3e6f7244e57d1",
    "content": "My submission content here"
  }
}
```
### Example Response for /api/submissions/course/:courseId (GET):
```json
[
  {
    "id": "60f5e0f8f0b3e6f7244e57d4",
    "courseId": "60f5e0f8f0b3e6f7244e57d2",
    "studentId": "60f5e0f8f0b3e6f7244e57d1",
    "content": "My submission content here"
  }
]
```

### Additional API Routes for Admins

|Method |Endpoint	      |Description              |
|--------|--------------|--------------------------|
|GET	  |/api/users	   |Admin: Fetch all users    | 
|GET	  |/api/users/:id	|Admin: Get user by ID     |
|PUT	  |/api/users/:id |Admin: Update user by ID   |
|DELETE |/api/users/:id	|Admin: Delete user by ID   |

### Example Response for /api/users (GET):
```json
[
  {
    "id": "60f5e0f8f0b3e6f7244e57d1",
    "email": "johndoe@example.com",
    "role": "student"
  },
  {
    "id": "60f5e0f8f0b3e6f7244e57d2",
    "email": "admin@example.com",
    "role": "admin"
  }
]
```
### Example Response for /api/users/:id (GET):
```json
{
  "id": "60f5e0f8f0b3e6f7244e57d1",
  "email": "johndoe@example.com",
  "role": "student"
}
```
### Example Response for /api/users/:id (PUT):
```json
{
  "message": "User updated successfully",
  "user": {
    "id": "60f5e0f8f0b3e6f7244e57d1",
    "email": "newemail@example.com",
    "role": "student"
  }
}
```
### Example Response for /api/users/:id (DELETE):
```json
{
  "message": "User deleted successfully"
}
```
