const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { authMiddleware } = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Create a task (Admin only)
router.post('/', authMiddleware, roleMiddleware('admin'), createTask);

// Get all tasks assigned to the logged-in user
router.get('/', authMiddleware, getTasks);

// Get a specific task by ID
router.get('/:id', authMiddleware, getTaskById);

// Update a specific task by ID
router.put('/:id', authMiddleware, updateTask);

// Delete a specific task by ID
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
