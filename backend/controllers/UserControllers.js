const { Users } = require('../models/schemas');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

exports.teste = async(req, res) =>{
    res.json('Login endpoint');
};

/* exports.registerUser = async(req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            email: email,
            password: hash,
        });
        res.json('Solicitação bem sucedida.');
    });
};

exports.loginUser = async(req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({where: {email: email}});

    if(!user){
        res.json({error: 'E-mail não cadastrado no banco de dados!'});
    } else {
        bcrypt.compare(password, user.password).then((validate) =>
            if(!validate){
                res.json({error: 'E-mail ou senha incorreta!'});
            }else{
                const token = sign{
                    {}
                }
            }       
        )
    }
}*/