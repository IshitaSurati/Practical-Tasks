# Expense-Tracker-Application

### Backend:
- Deployed on Render: [Backend URL](https://expense-tracker-application-b32j.onrender.com/)

A RESTful API for managing expenses with user authentication, allowing users to add, update, delete, and retrieve their expenses.

---

## Features

- **User Authentication**
  - User registration and login.
  - JWT-based authentication for secure access.
  
- **Expense Management**
  - Add new expenses.
  - View all expenses for a user.
  - Update existing expenses.
  - Delete expenses.

- **Role-Based Functionality**
  - Separate roles for regular users and admins (if needed for expansion).

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Token (JWT)
- **Environment Management**: dotenv

---

# API Endpoints

User Endpoints and Expense Endpoints :

| **Method** | **Endpoint**          | **Description**                 |
|------------|-----------------------|---------------------------------|
| POST       | `/api/users/register` | Register a new user             |
| POST       | `/api/users/login`    | Login a user and get a token    |
| GET        | `/api/users`          | Fetch all users (admin only)    |
| GET        | `/api/expenses`       | Get all expenses for a user     |
| POST       | `/api/expenses`       | Add a new expense               |
| PUT        | `/api/expenses/:id`   | Update an expense               |
| DELETE     | `/api/expenses/:id`   | Delete an expense               |


# Dependencies
- express
- mongoose
- jsonwebtoken
- bcrypt
- dotenv

# Future Enhancements
- Add admin functionality for user and expense management.
- Implement advanced filtering and sorting for expenses.
- Integration with a frontend for seamless user interaction.

---