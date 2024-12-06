const express = require('express');
const {
  createBooking,
  getBookings,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a booking
router.post('/', protect, createBooking);

// Get all bookings
router.get('/', protect, getBookings);

// Delete a booking
router.delete('/:id', protect, deleteBooking);

module.exports = router;
