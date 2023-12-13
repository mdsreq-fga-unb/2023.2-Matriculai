const express = require('express');
const router = express.Router();
const electivesController =  require('../../controllers/ElectiveControllers')

router.post("/createElective", electivesController.createElective);
router.delete("/deleteElective", electivesController.deleteElective);
router.get("/electives", electivesController.listElectives);
router.post("/matricula-eletivas", electivesController.ElectivesByStudent);
router.post("/find-elective", electivesController.FindElective);
router.post("/students", electivesController.Students);

module.exports = router; 
