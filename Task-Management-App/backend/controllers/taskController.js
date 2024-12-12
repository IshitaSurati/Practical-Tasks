const Task = require('../models/Task');

// Create a new task
const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const task = new Task({ title, description, assignedTo: req.user.userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all tasks assigned to the current user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, assignedTo: req.user.userId });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, assignedTo: req.user.userId },
      { title, description, status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.user.userId });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
