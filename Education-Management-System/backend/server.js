const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const connectDB = require('./config/db');

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/submissions', submissionRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Education Management System API");
});

// const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log("Server running on port 4000");
  
});

