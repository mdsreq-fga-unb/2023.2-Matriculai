const express = require('express');
const router = express.Router();
const electivesController =  require('../../controllers/ElectiveControllers')

router.post("/elective/createElective", electivesController.createElective);

module.exports = router; 
