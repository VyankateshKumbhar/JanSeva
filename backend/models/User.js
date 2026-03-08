const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please add a name'] 
  },
  email: { 
    type: String, 
    required: [true, 'Please add an email'], 
    unique: true 
  },
  password: { 
    type: String, 
    required: [true, 'Please add a password'] 
  },
  role: { 
    type: String, 
    enum: ['Citizen', 'Admin', 'Worker'], 
    default: 'Citizen' 
  },
  phone: String,
  ward: String, // Useful for JanSeva to track areas
}, { timestamps: true });

// Encrypt password before saving (Optional but recommended for Hackathons)
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);