// models/supplier.js
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  itemsSupplied: { type: [String], default: [] },
});

module.exports = mongoose.model("Supplier", supplierSchema);
