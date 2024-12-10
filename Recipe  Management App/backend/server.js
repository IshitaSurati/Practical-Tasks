const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
// const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());
// app.use(cors());
app.use("/uploads", express.static("uploads")); 

// Routes
app.get('/',(req,res)=>{
    res.send("Welcome to Recipe Management backend")
  })
app.use("/api/users", authRoutes);
app.use("/api/recipes", recipeRoutes);

// const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});
connectDB();
