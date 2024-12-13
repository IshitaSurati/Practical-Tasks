const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

// router.get("/", verifyToken, isAdmin, getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
