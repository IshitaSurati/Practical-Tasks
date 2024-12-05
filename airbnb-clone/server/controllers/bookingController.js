// controllers/bookingController.js
const Booking = require('../models/Booking');
const Property = require('../models/Property');

// Create Booking
const createBooking = async (req, res) => {
  const { propertyId, dates } = req.body;
  const property = await Property.findById(propertyId);

  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }

  const booking = new Booking({
    user: req.user.id,
    property: propertyId,
    dates,
  });

  await booking.save();
  res.status(201).json(booking);
};

module.exports = { createBooking };
