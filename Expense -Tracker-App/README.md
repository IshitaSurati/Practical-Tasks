# Expense-Tracker-Application

### Backend:
- Deployed on Render: [Backend URL](https://expense-tracker-application-b32j.onrender.com/)

This is a RESTful API for managing expenses with user authentication, allowing users to add, update, delete, and retrieve their expenses.

---

## Features

1. **User Authentication:**
   - User registration and login.
   - JWT-based authentication for secure access.
   
2. **Expense Management:**
   - Add new expenses.
   - View all expenses for a user.
   - Update existing expenses.
   - Delete expenses.

3. **Role-Based Functionality:**
   - Separate roles for regular users and admins (if needed for expansion).

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Token (JWT)
- **Environment Management:** dotenv

---

# API Endpoints

## User Endpoints and Expense Endpoints:

| **Method** | **Endpoint**          | **Description**                          |
|------------|-----------------------|------------------------------------------|
| POST       | `/api/users/register` | Register a new user                      |
| POST       | `/api/users/login`    | Login a user and get a token             |
| GET        | `/api/users`          | Fetch all users (admin only)             |
| GET        | `/api/expenses`       | Get all expenses for a user              |
| POST       | `/api/expenses`       | Add a new expense                        |
| PUT        | `/api/expenses/:id`   | Update an expense                        |
| DELETE     | `/api/expenses/:id`   | Delete an expense                        |

---

## Example Responses

### Example Response for **/api/users/register** (POST):
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "60f5e0f8f0b3e6f7244e57d1",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```
### Example Response for /api/users/login (POST):
```json
{
  "message": "Login successful",
  "token": "<your_jwt_token>"
}
```

### Example Response for /api/expenses (GET):
```json
[
  {
    "id": "60f5e0f8f0b3e6f7244e57d2",
    "amount": 50,
    "description": "Lunch",
    "date": "2024-12-10"
  },
  {
    "id": "60f5e0f8f0b3e6f7244e57d3",
    "amount": 100,
    "description": "Grocery Shopping",
    "date": "2024-12-11"
  }
]
```

### Example Response for /api/expenses (POST):
```json
{
  "message": "Expense added successfully",
  "expense": {
    "id": "60f5e0f8f0b3e6f7244e57d4",
    "amount": 75,
    "description": "Gas",
    "date": "2024-12-12"
  }
}
```
### Example Response for /api/expenses/:id (PUT):
``` json
{
  "message": "Expense updated successfully",
  "expense": {
    "id": "60f5e0f8f0b3e6f7244e57d4",
    "amount": 80,
    "description": "Gas - Updated",
    "date": "2024-12-12"
  }
}
```
### Example Response for /api/expenses/:id (DELETE):
```json
{
  "message": "Expense deleted successfully"
}
```
# Dependencies
- express: Web framework for Node.js.
- mongoose: MongoDB object modeling tool.
- jsonwebtoken: For creating and verifying JSON Web Tokens.
- bcrypt: Password hashing library.
- dotenv: Environment variable management.

# Future Enhancements
- Add admin functionality for user and expense management.
- Implement advanced filtering and sorting for expenses.
- Integration with a frontend for seamless user interaction.

