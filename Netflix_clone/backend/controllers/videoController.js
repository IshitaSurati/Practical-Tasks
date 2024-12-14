const Video = require("../models/Video");
const path = require("path");
const fs = require("fs");

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, genre } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No video file uploaded" });
    }

    const video = new Video({
      title,
      description,
      genre,
      videoUrl: `/uploads/${req.file.filename}`,
      uploadDate: new Date(),
    });

    await video.save();

    res.status(201).json({ message: "Video uploaded successfully", video });
  } catch (err) {
    res.status(500).json({ message: "Error uploading video", error: err.message });
  }
};

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching videos", error: err.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: "Error fetching video", error: err.message });
  }
};
