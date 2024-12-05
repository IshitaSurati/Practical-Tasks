const mongoose = require('mongoose')
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected Successfully!!!");
    }
    catch (error) {
        console.log("Database Not Connected!!!");
    }
}


module.exports = connectDB;