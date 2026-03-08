const express = require('express');
const dotenv = require('dotenv');
// const connectDB = require('./config/db.js');

dotenv.config();
// connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json());

// Routes
const grievanceRoutes = require('./routes/grievanceRoutes.js');
app.use('/api/grievances', grievanceRoutes);
app.use('/api/users', require('./routes/userRoutes.js'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Janseva Server running on port ${PORT}`));