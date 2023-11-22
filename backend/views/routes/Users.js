const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const userController = require('../../controllers/UserControllers');
const { validateToken } = require('../../controllers/middlewares/Auth');

router.use(cookieParser());

router.get('/profile', validateToken, (req, res) => {
    res.json('profile');
});

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);

module.exports = router;
