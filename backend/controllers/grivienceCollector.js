const Grievance = require('../models/Grievance');
const { analyzeComplaint } = require("../utils/geminiAnalyzer.js");
// @desc    Create a new grievance
// @route   POST /api/grievances
export const createGrievance = async (req, res) => {
  try {
    const { name, phone, address, category, description, location } = req.body;

    // 1. Simple Urgency Logic (Hackathon style)
    let priority = 'Medium';
    const highUrgencyKeywords = ['danger', 'emergency', 'flood', 'live wire', 'accident'];
    if (highUrgencyKeywords.some(word => description.toLowerCase().includes(word))) {
      priority = 'High';
    }

    // 2. Create the record
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
export const getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: grievances.length, data: grievances });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const analyzeComplaintController = async (req, res) => {
  try {

    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    const { description, imageUrl } = req.body;

    const aiResult = await analyzeComplaint(imageUrl, description);

    res.json({
      success: true,
      analysis: aiResult
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "AI analysis failed",
      error: error.message
    });
  }
};