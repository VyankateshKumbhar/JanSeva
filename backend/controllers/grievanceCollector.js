const Grievance = require('../models/Grievance.js');
const { analyzeComplaint } = require("../utils/geminiAnalyzer.js");
// @desc    Create a new grievance
exports.createGrievance = async (req, res) => {
  try {
    const { name, phone, address, category, description, location } = req.body;

    let priority = 'Medium';
    const highUrgencyKeywords = ['danger', 'emergency', 'flood', 'live wire', 'accident'];
    if (highUrgencyKeywords.some(word => description.toLowerCase().includes(word))) {
      priority = 'High';
    }

    const newGrievance = new Grievance({
      citizen: { name, phone, address, location },
      category,
      description,
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
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all grievances (for Admin Dashboard)
// FIXED: Changed 'export const' to 'exports.getGrievances'
exports.getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: grievances.length, data: grievances });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Option 1: Attach function to exports
exports.analyzeComplaintController = async (req, res) => {
  try {
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    const { description, imageUrl } = req.body;
    const aiResult = await analyzeComplaint(imageUrl, description);

    res.json({ success: true, analysis: aiResult });
  } catch (error) {
    res.status(500).json({ success: false, message: "AI analysis failed", error: error.message });
  }
};