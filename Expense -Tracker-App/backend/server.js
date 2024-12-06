const express = require('express');
const dotenv = require('dotenv');
const cors=require('cors')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(require('cors')());

app.get('/',(req,res)=>{
  res.send("Welcome to Expense Tracker Application Api")  
})
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

// const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port 5000`));
