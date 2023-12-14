const express = require('express');
const router = express.Router();
const RegistrationPeriodController =  require('../../controllers/SuperuserController');

router.post("/create", RegistrationPeriodController.openRegistrationPeriod);
router.get("/current", RegistrationPeriodController.getRegistrationPeriod);


module.exports = router; 
