// routes/csvRoutes.js
const express = require("express");
const multer = require("multer");
const { exportInventoryCSV, importInventoryCSV } = require("../controllers/csvController");

const router = express.Router();
const upload = multer({ dest: 'uploads/' });  // Set upload destination

// Export CSV route
router.get('/inventory/csv/export', exportInventoryCSV);

// Import CSV route
router.post('/inventory/csv/import', upload.single('file'), importInventoryCSV);

module.exports = router;
