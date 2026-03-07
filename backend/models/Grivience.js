const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
  ticketId: { type: String, unique: true }, // Generated on save (e.g., JS-2026-001)
  citizen: {
    name: String,
    phone: String,
    address: String,
    location: { lat: Number, lng: Number } // GPS from mobile app
  },
  category: { type: String, enum: ['Road', 'Water', 'Education', 'Electricity', 'Sanitation'] },
  description: String,
  imageUrl: String,
  
  // Logic fields
  status: { type: String, default: 'New', enum: ['New', 'Assigned', 'In-Progress', 'Resolved'] },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  
  // Routing fields
  assignedAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Office Admin
  assignedWorker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Field Worker
  
  resolutionProof: String, // Image URL uploaded by worker
}, { timestamps: true });

// Auto-generate Unique Ticket ID before saving
grievanceSchema.pre('save', async function(next) {
  if (!this.ticketId) {
    this.ticketId = `JS-${Date.now().toString().slice(-6)}`; 
  }
  next();
});

module.exports = mongoose.model('Grievance', grievanceSchema);