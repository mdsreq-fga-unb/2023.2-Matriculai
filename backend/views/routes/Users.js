const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const userController =  require('../../controllers/UserControllers');
const { validateToken } = require('../../controllers/middlewares/Auth');

router.use(cookieParser());
router.post('/', userController.userRegister);
router.post('/login', userController.userLogin);
router.get('/logout',userController.userLogout);

router.get('/profile', validateToken, (req, res) => {
    res.json('profile');
});

router.get("/logout", (req,res) =>{

    req.logout()
    req.flash('success_msg',"Deslogado com sucesso!")
    res.redirect("/")
})


module.exports = router; 
