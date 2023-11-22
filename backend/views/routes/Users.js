const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const userController =  require('../../controllers/UserControllers');
const { validateToken } = require('../../controllers/middlewares/Auth');

router.use(cookieParser());
router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);

router.get('/profile', validateToken, (req, res) => {
    res.json('profile');
});

module.exports = router; 
