const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json('User not found');

    const passOk = bcrypt.compareSync(password, user.password);
    if (passOk) {
      const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET);
      res.cookie('token', token, { httpOnly: true }).json({ id: user._id, username });
    } else {
      res.status(400).json('Wrong credentials');
    }
  } catch (err) {
    res.status(500).json('Internal server error');
  }
};

// Profile
exports.profile = (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json('Not authenticated');

  jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
    if (err) return res.status(403).json('Token invalid');
    res.json(userData);
  });
};

// Logout
exports.logout = (req, res) => {
  res.cookie('token', '', { maxAge: 0 }).json('Logged out');
};
