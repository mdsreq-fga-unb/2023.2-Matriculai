const Register = require('../models/schemas/RegistrationPeriod')

exports.openRegistrationPeriod = async (req, res) => {
    const { name, isOpen, start, end } = req.body;
 
    await Register.create({
        name: name,
        isOpen: isOpen,
        start: start,
        end: end,
    }).then(() => {
        res.status(201).json("OK")
    }).catch((err) => {
        if(err){
            res.status(400).json({error: err});
        };
    });
}