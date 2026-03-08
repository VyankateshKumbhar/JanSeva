
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
// Add these lines at the top of server.js
const connectDB = require('./config/db.js');
const complaintRoutes=require('./routes/grivienceRoutes.js')
// Add this in your server.js under your middleware
app.use('/api/grievances', require('./routes/grievanceRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use("/api/complaint", complaintRoutes);
// Call the connection
connectDB();
