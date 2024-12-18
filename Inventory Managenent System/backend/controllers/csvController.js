// controllers/csvController.js
const { exportCSV, importCSV } = require("../services/csvService");
const Inventory = require("../models/inventory");

exports.exportInventoryCSV = async (req, res) => {
  try {
    const items = await Inventory.find().populate("supplier");
    const filePath = '../csvService.js';
    exportCSV(items, filePath); 
    res.download(filePath);  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.importInventoryCSV = (req, res) => {
  const filePath = req.file.path;
  importCSV(filePath, (results) => {
    res.status(200).json({ message: 'CSV import successful', data: results });
  });
};
