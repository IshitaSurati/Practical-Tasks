const Video = require("../models/Video");

// Add a new video
exports.addVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ message: "Failed to add video", error: err.message });
  }
};

// Get all videos
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch videos", error: err.message });
  }
};

// Get a single video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch video", error: err.message });
  }
};

// Update a video by ID
exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: "Failed to update video", error: err.message });
  }
};

// Delete a video by ID
exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete video", error: err.message });
  }
};
