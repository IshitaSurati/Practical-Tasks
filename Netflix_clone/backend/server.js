const express = require('express');
const connectDB = require('./config/db');
const Movie_router = require('./routes/movie.route');
const Auth_router = require('./routes/auth.route');
const TV_router = require('./routes/tv.route');
const Search_router = require('./routes/search.route');
const protectRoute = require('./middleware/protectRoute');
const cookieParser=require('cookie-parser')
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();
const path =require('path')
// const __dirname = path.resolve();
app.use(express.json())
app.use(cookieParser());
app.use("/api/v1/auth", Auth_router)
app.use("/api/v1/movie", Movie_router)
app.use("/api/v1/tv",protectRoute , TV_router);
app.use("/api/v1/search",protectRoute , Search_router);

if (NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
  });


