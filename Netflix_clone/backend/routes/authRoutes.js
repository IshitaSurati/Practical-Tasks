const router = require("express").Router();
const { register, login, getAllUsers } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/", verifyToken, isAdmin, getAllUsers);

module.exports = router;
