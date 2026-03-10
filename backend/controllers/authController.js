const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role, ward, phone } = req.body;
    const userExists = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExists) return res.status(400).json({ success: false, message: 'User already exists' });

    const user = await User.create({ name, email, password, role, ward, phone });

    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body; 

    // Find user by Email OR Phone
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }]
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      
      // Determine where to send the user based on role (Case Insensitive)
      let redirectedDashboard = 'Citizen';
      const userRole = user.role ? user.role.toLowerCase() : 'citizen';
      
      if (userRole === 'admin') {
        redirectedDashboard = 'Admin';
      } else if (userRole === 'worker') {
        redirectedDashboard = 'Worker';
      }

      res.json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          redirectedDashboard,
        },
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};