const { Users } = require('../models/schemas');
const randomatic = require('randomatic');
const bcrypt = require('bcrypt');
const { createToken, validateToken } = require('./middlewares/Auth');

exports.userRegister = async (req, res) => {
    try {
        const { superuser, name, registry, school_year, email, password } = req.body;
        const existingUser = await Users.findOne({ where: { email: email } });

        if (existingUser) {
            return res.status(400).json({ error: 'E-mail já cadastrado!' });
        }

        const hash = await bcrypt.hash(password, 15);
        await Users.create({
            superuser: superuser,
            name: name,
            registry: registry,
            school_year: school_year,
            email: email,
            password: hash,
        });

        res.json('Solicitação bem sucedida!');
    } catch (err) {
        res.status(400).json({ error: err.message || 'Erro desconhecido durante o registro.' });
    }
};

exports.studentRegister = async(student) => {
    const password = randomatic('Aa0', 15);
    const hash = await bcrypt.hash(password, 15);
    
        await Users.create({
            superuser: false,
            name: student['nome completo'],
            registry: student['matrícula'],
            school_year: student['ano'],
            email: student['email'],
            password: hash,
        });
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ where: { email: email } });

        if (!user) {
            return res.status(400).json({ error: 'E-mail não cadastrado!' });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: 'Senha incorreta!' });
        }

        const accessToken = createToken(user);

        await Users.update(
            { token: accessToken },
            { where: { email: user.email } }
        );

        res.cookie('access-token', accessToken, {
            maxAge: 2592000000, // 30 dias em milissegundos
            httpOnly: true,
            secure: true,
        });

        res.json({ accessToken: accessToken, superuser: user.superuser, userId: user.id});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro durante o login.' });
    }
};

exports.userLogout = async (req, res) => {
    try {
        const { accessToken } = req.body;
        await Users.update(
            { token: null },
            { where: { token: accessToken } }
        );
        res.json({ message: 'Logout bem-sucedido' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro durante o logout.' });
    }
};