const router = require("express").Router();
const {
  addVideo,
  getVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");
const verifyToken = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

router.post("/", verifyToken, isAdmin, addVideo);
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.put("/:id", verifyToken, isAdmin, updateVideo);
router.delete("/:id", verifyToken, isAdmin, deleteVideo);

module.exports = router;
