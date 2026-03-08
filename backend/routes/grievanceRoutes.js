const express = require('express');
const router = express.Router();

const { createGrievance, getGrievances,analyzeComplaintController } = require('../controllers/grievanceCollector.js');


router.route('/')
  .post(createGrievance)
  .get(getGrievances);


router.post("/analyze", analyzeComplaintController);
module.exports = router;