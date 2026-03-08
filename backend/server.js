const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Ensure this path is correct

dotenv.config();


connectDB();


const app = express();

// 4. Middleware
app.use(express.json()); // Allows the server to accept JSON in the body

// 5. Routes
// Change this line in server.js
app.use('/api/grievances', require('./routes/grievanceRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// 6. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Janseva Server running on port ${PORT}`));