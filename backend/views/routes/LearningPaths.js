const express = require('express');
const router = express.Router();
const learningPathsController =  require('../../controllers/LearningPathsController');

router.post("/createLearningPaths", learningPathsController.createLearningPaths);
router.delete("/deleteLearningPaths", learningPathsController.deleteLearningPaths)
router.get('/learningpath', learningPathsController.LearningPath);
router.post('/find_lp', learningPathsController.FindLP);
router.get('/find_electives', learningPathsController.findElectives);

module.exports = router; 
