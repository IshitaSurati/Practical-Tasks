const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  amount: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
