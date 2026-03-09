const Grievance = require('../models/Grievance.js');

// @desc    Create a new grievance
exports.createGrievance = async (req, res) => {
  try {
    const { citizen, category, description, imageUrl } = req.body;

    if (!citizen || !description) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    let priority = 'Medium';
    const highUrgencyKeywords = ['danger', 'emergency', 'flood', 'live wire', 'accident', 'broken'];
    if (description && highUrgencyKeywords.some(word => description.toLowerCase().includes(word))) {
      priority = 'High';
    }

    const newGrievance = new Grievance({
      citizen: {
        name: citizen.name,
        phone: citizen.phone,
        address: citizen.address,
        location: citizen.location
      },
      category,
      description,
      imageUrl,
      priority,
      status: 'New' 
    });

    const savedGrievance = await newGrievance.save();
    
    res.status(201).json({
      success: true,
      ticketId: savedGrievance.ticketId,
      data: savedGrievance
    });
  } catch (error) {
    console.error("Backend Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all grievances (MISSING FUNCTION 1)
exports.getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: grievances.length, data: grievances });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Analyze complaint (MISSING FUNCTION 2)
exports.analyzeComplaintController = async (req, res) => {
  try {
    // Basic placeholder for the analyzer
    res.json({ success: true, message: "AI Analysis endpoint ready" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};