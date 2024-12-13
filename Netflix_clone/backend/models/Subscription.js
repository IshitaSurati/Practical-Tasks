const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  type: { type: String, enum: ["Basic", "Standard", "Premium"], required: true },
  price: { type: Number, required: true },
  validUntil: { type: Date, required: true },
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
