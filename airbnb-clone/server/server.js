const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const connectDB = require('./config/db');


dotenv.config();



const app = express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Welcome to airbnb clone api.....")
})

app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);

// const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
connectDB();
