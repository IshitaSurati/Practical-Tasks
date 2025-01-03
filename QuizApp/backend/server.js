const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

app.get('/',(req,res)=>{
  res.send("Welcome to Quiz App backend")
})
app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
