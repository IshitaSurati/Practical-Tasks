require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

// Routes
app.get('/',(req,res)=>{
  res.send("Welcome to library management system backend")
})
app.use(authRoutes);
app.use(postRoutes);

// Start server
// const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`Server is running at http://localhost:4000`);
});
