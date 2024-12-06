const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Expense Tracker API'));
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

// const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port 5000`));
