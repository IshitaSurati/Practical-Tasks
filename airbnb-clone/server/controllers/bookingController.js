const Booking = require('../models/Booking');
const Property = require('../models/Property');

// Create a booking
const createBooking = async (req, res) => {
  try {
    const { propertyId, dates } = req.body;

    // Check if the property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check for conflicting bookings
    const existingBookings = await Booking.find({ property: propertyId });
    const isConflict = existingBookings.some((b) =>
      b.dates.some((date) => dates.includes(date.toISOString()))
    );
    if (isConflict) {
      return res.status(400).json({ message: 'Date conflict for the property' });
    }

    // Create and save the booking
    const booking = new Booking({
      user: req.user.id,
      property: propertyId,
      dates,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('property', 'name location')
      .populate('user', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    if (booking.user.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await booking.remove();
    res.json({ message: 'Booking removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking, getBookings, deleteBooking };
