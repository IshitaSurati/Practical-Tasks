const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to Task Management backend");
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(7000, () => console.log(`Server running on port http://localhost:7000`));
