const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ensure process.env.MONGODB_URI is correctly loaded
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Failed: ${error.message}`);
    process.exit(1); // Stop the server if DB fails
  }
};

module.exports = connectDB;