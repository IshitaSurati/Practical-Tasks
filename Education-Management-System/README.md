# Education-Management-System

### Backend:
- Deployed on Render: [Backend URL](https://education-management-system-backend-3ytz.onrender.com)

-> This project is a backend API designed to manage users, courses, and submissions for a Education  management system. It supports user authentication, role-based access control, and CRUD operations for courses and submissions.

## Features
1. User Authentication:
- User signup and login functionality.
- Role-based access control (Admin, Teacher, Student).
- JWT token-based authentication.

2. Course Management:
- Admin can create, update, delete, and view courses.
- Teachers and Students can view courses.

3. Submission Management:
- Students can submit course-related work.
- Teachers and Admins can view submissions by course or student.

# Database Integration:
- MongoDB is used as the database to store user, course, and submission data.

# Prerequisites

* Node.js (v14 or higher)
* MongoDB
* npm (v6 or higher)
* .env file with the following variables:
* PORT (optional, default is 4000)
* JWT_SECRET (required for authentication)

# Endpoints

- Authentication :
* POST /api/auth/signup: Create a new user.
   - Body Parameters:
     name, email, password, role

* POST /api/auth/login: Authenticate a user and receive a token.
   - Body Parameters:
     email, password

* GET /api/auth/users: Admin only: Fetch all users.

- Courses :
* POST /api/courses: Admin only: Create a new course.
   - Body Parameters:
     title, description, startDate, endDate, teacherId

* GET /api/courses: Fetch all courses.

* PUT /api/courses/:id: Admin only: Update a course.
    - Body Parameters:
     title, description, startDate, endDate

* DELETE /api/courses/:id: Admin only: Delete a course.

- Submissions :
* POST /api/submissions: Students only: Add a submission.
  - Body Parameters:
    courseId, studentId, content

* GET /api/submissions/course/:courseId: Teachers/Admins: Fetch submissions for a course.

* GET /api/submissions/student/:studentId : Students/Admins: Fetch submissions by a student.



