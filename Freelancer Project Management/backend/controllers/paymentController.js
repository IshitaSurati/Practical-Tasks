const Payment = require('../models/paymentModel');
const Project = require('../models/projectModel');

// Get All Payments
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('projectId');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error });
  }
};

// Mark Payment as Paid
exports.markPaymentAsPaid = async (req, res) => {
  const { id } = req.params;

  try {
    const payment = await Payment.findById(id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    payment.status = 'paid';
    await payment.save();

    res.status(200).json({ message: 'Payment marked as paid', payment });
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment status', error });
  }
};

// Create Payment
exports.createPayment = async (req, res) => {
  const { projectId, amount } = req.body;

  try {
    const newPayment = new Payment({
      projectId,
      amount,
      status: 'pending',
    });

    await newPayment.save();
    res.status(201).json({ message: 'Payment created successfully', newPayment });
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment', error });
  }
};
