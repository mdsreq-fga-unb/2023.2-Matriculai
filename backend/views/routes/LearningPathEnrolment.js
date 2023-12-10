const express = require('express');
const router = express.Router();
const learningPathsEnrolmentController =  require('../../controllers/LearningPathsEnrolmentController');


router.post('/studentenrolment', learningPathsEnrolmentController.studentEnrolment);

module.exports = router;