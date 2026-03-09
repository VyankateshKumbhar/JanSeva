const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Add this for mobile connectivity
const connectDB = require('./config/db.js'); // Uncommented

dotenv.config();

// 1. Initialize Database Connection immediately
connectDB(); 

const app = express();

// 2. Middleware
app.use(cors()); // Allows your phone to connect to your laptop
app.use(express.json());

// 3. Routes
const grievanceRoutes = require('./routes/grievanceRoutes.js');
app.use('/api/grievances', grievanceRoutes);
app.use('/api/users', require('./routes/userRoutes.js'));

// 4. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Janseva Server running on port ${PORT}`));