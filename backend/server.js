// Add these lines at the top of server.js
const connectDB = require('./config/db.js');
const complaintRoutes=require('./routes/grivienceRoutes.js')
// Add this in your server.js under your middleware
app.use('/api/grievances', require('./routes/grievanceRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use("/api/complaint", complaintRoutes);
// Call the connection
connectDB();

