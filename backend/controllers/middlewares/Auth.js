const { sign, verify } = require('jsonwebtoken');

const createToken = (user) => {
    const accessToken = sign({username: user.email}, 
        "qualquer coisa"
    );
    return accessToken;
};

const validateToken = (req, res, next) => {
    
    const accessToken = req.header("accessToken");
    if (!accessToken) {
        return res.status(400).json({ error: 'Usuário não autenticado!' });
    }

    try {
        const validToken = verify(accessToken, "qualquer coisa");
        if (validToken) {
            req.authenticated = true;
            return next();
        }
    } catch (err) {
        return res.status(400).json({ error: err.message || 'Erro na validação do token' });
    }
};

module.exports = { createToken, validateToken };

