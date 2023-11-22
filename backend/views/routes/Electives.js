const express = require('express');
const router = express.Router();
const electivesController =  require('../../controllers/ElectiveControllers')

router.post("/createElective", electivesController.createElective);
router.delete("/deleteElective", electivesController.deleteElective)

module.exports = router; 
