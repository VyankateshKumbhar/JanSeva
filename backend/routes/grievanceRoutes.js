const express = require('express');
const router = express.Router();

// Ensure these names match the 'exports.name' in your controller exactly
const { 
  createGrievance, 
  getGrievances, 
  analyzeComplaintController 
} = require('../controllers/grievanceCollector.js');

// Route for /api/grievances
router.route('/')
  .post(createGrievance)
  .get(getGrievances); // If getGrievances is undefined, it crashes here

router.post("/analyze", analyzeComplaintController);

module.exports = router;