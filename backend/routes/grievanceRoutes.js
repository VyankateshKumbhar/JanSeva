const express = require('express');
const router = express.Router();
const { createGrievance, getGrievances } = require('../controllers/grievanceCollector');
const { createGrievance, getGrievances,analyzeComplaintController } = require('../controllers/grivienceCollector');


router.route('/')
  .post(createGrievance)
  .get(getGrievances);


router.post("/analyze", analyzeComplaintController);
module.exports = router;