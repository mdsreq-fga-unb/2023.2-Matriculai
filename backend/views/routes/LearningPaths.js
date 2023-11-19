const express = require('express');
const router = express.Router();
const learningPathsController =  require('../../controllers/LearningPathsController')

router.post("/createLearningPaths", learningPathsController.createLearningPaths);
router.delete("/", learningPathsController.deleteLearningPaths)

module.exports = router; 
