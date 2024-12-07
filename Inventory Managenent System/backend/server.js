const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connection");
const inventoryRoutes = require("./routes/inventoryRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const csvRoutes = require("./routes/csvRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use("/api/inventory", inventoryRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api", csvRoutes);  // Use CSV routes

// Start Server
// const PORT = process.env.PORT || 9000;
app.listen(9000, () => {
  console.log(`Server running on http://localhost:9000`);
});
