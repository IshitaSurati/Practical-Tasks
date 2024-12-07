# Freelancer-Project-Management

 - backend : https://freelancer-project-management-backend.onrender.com

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
- [Contact](#contact)

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

# API Endpoints

## Project Management

| Method | Endpoint            | Description                | Request Body                                              |
|--------|---------------------|----------------------------|-----------------------------------------------------------|
| POST   | `/api/projects`      | Create a new project       | `{ "name": "Project Name", "status": "active" }`          |
| GET    | `/api/projects`      | Get all projects           | None                                                      |
| GET    | `/api/projects/:id`  | Get a single project by ID | None                                                      |
| PUT    | `/api/projects/:id`  | Update a project           | `{ "name": "Updated Name", "status": "completed" }`       |
| DELETE | `/api/projects/:id`  | Delete a project           | None                                                      |

---

## Payment Management

| Method | Endpoint            | Description                | Request Body                                              |
|--------|---------------------|----------------------------|-----------------------------------------------------------|
| POST   | `/api/payments`      | Create a payment           | `{ "projectId": "12345", "amount": 1000 }`               |
| GET    | `/api/payments`      | Get all payments           | None                                                      |
| GET    | `/api/payments/:id`  | Get a payment by ID        | None                                                      |
| PUT    | `/api/payments/:id`  | Update payment status      | `{ "status": "paid" }`                                    |

---

## CSV Functionality

| Method | Endpoint            | Description                | Request Body                                              |
|--------|---------------------|----------------------------|-----------------------------------------------------------|
| GET    | `/api/csv/export`    | Export project data to CSV | None                                                      |
| POST   | `/api/csv/import`    | Import projects from CSV   | Form-data: `{ file: <csv_file> }`                         |

---

## Authentication

| Method | Endpoint            | Description                | Request Body                                              |
|--------|---------------------|----------------------------|-----------------------------------------------------------|
| POST   | `/api/auth/signup`   | Register a new user        | `{ "email": "user@example.com", "password": "password" }` |
| POST   | `/api/auth/login`    | Login user and get token   | `{ "email": "user@example.com", "password": "password" }` |

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

---


