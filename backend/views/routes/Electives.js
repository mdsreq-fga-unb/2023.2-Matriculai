const express = require('express');
const router = express.Router();
const electivesController =  require('../../controllers/ElectiveControllers')

router.post("/elective/createElective", electivesController.createElective);
router.delete("/elective/", electivesController.deleteElective)

module.exports = router; 
