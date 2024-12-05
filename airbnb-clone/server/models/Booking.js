const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  dates: { type: [Date], required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
