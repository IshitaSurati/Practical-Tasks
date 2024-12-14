const Subscription = require("../models/Subscription");

exports.subscribe = async (req, res) => {
  const { plan, userId } = req.body;

  try {
    const subscription = new Subscription({ plan, userId });
    await subscription.save();

    res.status(201).json({ message: "Subscription successful", subscription });
  } catch (err) {
    res.status(500).json({ message: "Error subscribing", error: err.message });
  }
};
