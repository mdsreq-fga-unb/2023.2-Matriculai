const { Users } = require('../models/schemas');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { createToken, validateToken } = require('./middlewares/Auth');

exports.userRegister = async(req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 15).then((hash) => {
        Users.create({
            email: email,
            password: hash,
        }).then(() =>{
            res.json('Solicitação bem sucedida!');
        }).catch((err) => {
            if(err){
                res.status(400).json({error: err});
            }
        });
    });
};

exports.userLogin = async(req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({where: {email: email}});
    if(!user){
        res.status(400).json({error: 'E-mail não cadastrado!'});
    } else {
        bcrypt.compare(password, user.password).then((match) =>{
            if(!match){
                res.status(400).json({error: 'Senha incorreta!'});
            } else {
                const accessToken = createToken(user);
                res.cookie('access-token', accessToken, {
                    maxAge: 2592000000,
                    httpOnly: true,
                });
                Users.update(
                    { token: accessToken },
                    { where: { email: user.email } }
                ).then(() => {
                    res.json(accessToken);
                }).catch((err) => {
                    res.status(500).json({ error: 'Erro ao atualizar o token no banco de dados.' });
                });
            };
        });
    };
};