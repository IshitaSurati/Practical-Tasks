const Expense = require('../models/Expense');

// Add Expense
const addExpense = async (req, res) => {
  try {
    const { amount, description, date, category, paymentMethod } = req.body;
    const expense = new Expense({ ...req.body, user: req.user.id });
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Expense
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense || expense.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Expense not found or unauthorized' });
    }
    Object.assign(expense, req.body);
    await expense.save();
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense || expense.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Expense not found or unauthorized' });
    }
    await expense.remove();
    res.json({ message: 'Expense removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses, updateExpense, deleteExpense };
