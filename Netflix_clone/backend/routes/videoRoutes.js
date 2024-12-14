const express = require("express");
const multer = require("multer");
const { uploadVideo, getVideos, getVideoById } = require("../controllers/videoController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// Set up file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes for video management
router.post("/", verifyToken, upload.single("video"), uploadVideo);
router.get("/", getVideos);
router.get("/:id", getVideoById);

module.exports = router;
