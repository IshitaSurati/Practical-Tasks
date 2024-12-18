# Freelancer-Project-Management

### Backend:
- Deployed on Render: [Backend URL](https://freelancer-project-management-backend.onrender.com)

## Overview
This project is a backend API for managing projects, payments, and CSV file import/export functionalities. It is built using **Node.js**, **Express**, and **MongoDB**.

---

## Features

### Project Management
- Create, read, update, and delete projects.
- Manage project status (e.g., active, completed, paid).

### Payment Management
- Create and manage payments.
- Update payment status.

### CSV Import/Export
- Export project data to CSV.
- Import projects from a CSV file.

### Authentication
- Token-based authentication using **JWT** for secure API access.

---

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Project Management](#project-management)
  - [Payment Management](#payment-management)
  - [CSV Functionality](#csv-functionality)
  - [Authentication](#authentication)
- [Run Locally](#run-locally)
- [CSV Functionality](#csv-functionality)


---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JSON Web Token (JWT)**
- **Multer** for file uploads
- **dotenv** for environment variables
- **json2csv** for CSV handling

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/backend-project.git
    cd backend-project
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the required environment variables.

---

## Environment Variables
The following environment variables are required:

| Variable      | Description                        |
|---------------|------------------------------------|
| `MONGODB_URI` | MongoDB connection string          |
| `JWT_SECRET`  | Secret key for JWT authentication  |
| `PORT`        | Port number for the server         |

### Example `.env` file:
```env
MONGODB_URI=mongodb+srv://<your_username>:<your_password>@cluster.mongodb.net/<db_name>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
```
## API Endpoints

### Project Management

#### 1. **Create a new project**
- **Method**: `POST`
- **Endpoint**: `/api/projects`
- **Request Body**:
    ```json
    {
      "name": "Project Name",
      "status": "active"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "12345",
      "name": "Project Name",
      "status": "active"
    }
    ```

#### 2. **Get all projects**
- **Method**: `GET`
- **Endpoint**: `/api/projects`
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "12345",
        "name": "Project Name",
        "status": "active"
      },
      {
        "id": "67890",
        "name": "Another Project",
        "status": "completed"
      }
    ]
    ```

#### 3. **Get a single project by ID**
- **Method**: `GET`
- **Endpoint**: `/api/projects/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "12345",
      "name": "Project Name",
      "status": "active"
    }
    ```

#### 4. **Update a project**
- **Method**: `PUT`
- **Endpoint**: `/api/projects/:id`
- **Request Body**:
    ```json
    {
      "name": "Updated Name",
      "status": "completed"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "12345",
      "name": "Updated Name",
      "status": "completed"
    }
    ```

#### 5. **Delete a project**
- **Method**: `DELETE`
- **Endpoint**: `/api/projects/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "message": "Project deleted successfully."
    }
    ```

---

### Payment Management

#### 1. **Create a payment**
- **Method**: `POST`
- **Endpoint**: `/api/payments`
- **Request Body**:
    ```json
    {
      "projectId": "12345",
      "amount": 1000
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "67890",
      "projectId": "12345",
      "amount": 1000,
      "status": "pending"
    }
    ```

#### 2. **Get all payments**
- **Method**: `GET`
- **Endpoint**: `/api/payments`
- **Request Body**: None
- **Response Body**:
    ```json
    [
      {
        "id": "67890",
        "projectId": "12345",
        "amount": 1000,
        "status": "pending"
      },
      {
        "id": "98765",
        "projectId": "67890",
        "amount": 2000,
        "status": "paid"
      }
    ]
    ```

#### 3. **Get a payment by ID**
- **Method**: `GET`
- **Endpoint**: `/api/payments/:id`
- **Request Body**: None
- **Response Body**:
    ```json
    {
      "id": "67890",
      "projectId": "12345",
      "amount": 1000,
      "status": "pending"
    }
    ```

#### 4. **Update payment status**
- **Method**: `PUT`
- **Endpoint**: `/api/payments/:id`
- **Request Body**:
    ```json
    {
      "status": "paid"
    }
    ```
- **Response Body**:
    ```json
    {
      "id": "67890",
      "projectId": "12345",
      "amount": 1000,
      "status": "paid"
    }
    ```

---

### CSV Functionality

#### 1. **Export project data to CSV**
- **Method**: `GET`
- **Endpoint**: `/api/csv/export`
- **Request Body**: None
- **Response Body**: CSV file download (`projects.csv`)

#### 2. **Import projects from CSV**
- **Method**: `POST`
- **Endpoint**: `/api/csv/import`
- **Request Body**: 
    - Form-data: `{ file: <csv_file> }`
- **Response Body**:
    ```json
    {
      "message": "Projects imported successfully.",
      "count": 5
    }
    ```

---

### Authentication

#### 1. **Register a new user**
- **Method**: `POST`
- **Endpoint**: `/api/auth/signup`
- **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```
- **Response Body**:
    ```json
    {
      "message": "User registered successfully.",
      "user": {
        "id": "123",
        "email": "user@example.com"
      }
    }
    ```

#### 2. **Login user and get token**
- **Method**: `POST`
- **Endpoint**: `/api/auth/login`
- **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```
- **Response Body**:
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

---

## Run Locally

1. Start the MongoDB server locally or connect to a remote MongoDB cluster.
2. Run the application:

    ```bash
    npm start
    ```

    The server will run on the specified port (default: 5000).

---

## CSV Functionality

### Export Projects to CSV
- Send a `GET` request to `/api/csv/export`.
- The downloaded file will be named `projects.csv`.

### Import Projects from CSV
- Send a `POST` request to `/api/csv/import` with a CSV file attached (key: `file`).
- Response will be:
    ```json
    {
      "message": "Projects imported successfully.",
      "count": 5
    }
    ```

