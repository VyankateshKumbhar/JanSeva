const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
  ticketId: { type: String, unique: true },
  citizen: {
    name: String,
    phone: String,
    address: String,
    location: { lat: Number, lng: Number }
  },
  category: { 
    type: String, 
    enum: ['Road', 'Water', 'Education', 'Electricity', 'Sanitation', 'Safety', 'StreetLights', 'Waste', 'Encroachment', 'Other'] 
  },
  description: String,
  imageUrl: String,
  status: { type: String, default: 'New', enum: ['New', 'Assigned', 'In-Progress', 'Resolved'] },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  assignedAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedWorker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resolutionProof: String,
}, { timestamps: true });

// Auto-generate Unique Ticket ID
grievanceSchema.pre('save', async function() {
  if (!this.ticketId) {
    this.ticketId = `JS-${Date.now().toString().slice(-6)}`; 
  }
});

// CRITICAL FIX: Ensure this is the only export line
module.exports = mongoose.model('Grievance', grievanceSchema);