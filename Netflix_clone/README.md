# Netflix-Clone

## Project Overview

This project is a Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js). The goal of the project is to create a video streaming platform that mimics key functionalities of Netflix, including user authentication, video browsing, and streaming capabilities. The project showcases full-stack development skills using modern web technologies.

## Installation Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based database)

### Local Setup Steps

1. **Clone the Repository:**
   git clone <repository-url>
 
2. **Navigate to the project directory:**
    cd netflix-clone

3. **Install Frontend Dependencies: Navigate to the frontend directory:**
    cd frontend
    npm install

4. **Install Backend Dependencies: Navigate to the backend directory:**
    cd ../backend
    npm install

5. **Set Up Environment Variables: Create a .env file in the backend directory with the following variables:**  
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

6. **Run the Backend: In the backend directory:**
    npm run dev
    
7. **Run the Frontend: In the frontend directory:**
    npm start

8. **Access the Application: The application should be running at http://localhost:3000.**

### Key Features Implemented

## User Authentication:
- JWT-based authentication for secure login and token management.
## Video Browsing and Streaming:
- Users can browse and watch videos.
## Responsive UI:
- Optimized for different screen sizes.
## Protected Routes:
- Certain pages are accessible only to authenticated users.
## CRUD Operations:
- Manage user data and video content in the database.

### Dependencies Used
- Frontend Dependencies
- react
- react-router-dom
- axios
- Backend Dependencies
- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv
- cors
- nodemon (for development )
