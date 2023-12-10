const express = require('express');
const multer = require('multer');
const router = express.Router();
const extractController =  require('../../controllers/ExtractStudents')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/extract-students", upload.single('arquivo'), extractController.extractStudents);
module.exports = router; 