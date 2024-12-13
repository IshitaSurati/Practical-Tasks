const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const videoRoutes = require("./routes/videoRoutes");

app.get('/', (req, res) => {
	res.send("Welcome to Netflix clone backend")
})
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);

// const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port 5000`));
