const express = require("express");
const {
  getAllSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

const router = express.Router();

router.get("/", getAllSuppliers);
router.post("/", addSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

module.exports = router;
