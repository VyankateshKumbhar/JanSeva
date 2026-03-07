const express = require('express');
const router = express.Router();
const { createGrievance, getGrievances } = require('../controllers/grievanceController');

router.route('/')
  .post(createGrievance)
  .get(getGrievances);

module.exports = router;