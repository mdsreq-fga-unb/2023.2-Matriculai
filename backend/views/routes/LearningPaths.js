const express = require('express');
const router = express.Router();
const learningPathsController =  require('../../controllers/LearningPathsController')

router.post("/learning_paths/createLearningPaths", learningPathsController.createLearningPaths);
router.delete("/learning_paths/", learningPathsController.deleteLearningPaths)

module.exports = router; 
