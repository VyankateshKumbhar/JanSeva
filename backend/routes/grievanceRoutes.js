const express = require('express');
const router = express.Router();
<<<<<<< HEAD:backend/routes/grievanceRoutes.js
const { createGrievance, getGrievances } = require('../controllers/grievanceCollector');
=======
const { createGrievance, getGrievances,analyzeComplaintController } = require('../controllers/grivienceCollector');
>>>>>>> Hrushikesh:backend/routes/grivienceRoutes.js

router.route('/')
  .post(createGrievance)
  .get(getGrievances);


router.post("/analyze", analyzeComplaintController);
module.exports = router;