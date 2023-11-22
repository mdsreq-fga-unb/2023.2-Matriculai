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

// Rota para logout
router.post('/logout', (req, res) => {
    // Lógica para fazer logout do usuário
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao fazer logout' });
      }
      res.clearCookie('cookieName'); // Limpeza de cookies, se necessário
      return res.status(200).json({ message: 'Logout realizado com sucesso' });
    });
  });

router.get('/profile', validateToken, (req, res) => {
    res.json('profile');
});

module.exports = router;
