const express = require('express');
const router = express.Router();
const RegistrationPeriodController =  require('../../controllers/SuperuserController');

router.post("/create", RegistrationPeriodController.openRegistrationPeriod);

module.exports = router; 
