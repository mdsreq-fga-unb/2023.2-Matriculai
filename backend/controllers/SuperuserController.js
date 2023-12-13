const { Registration } = require('../models/schemas')

exports.openRegistrationPeriod = async (req, res) => {
    const { start, end } = req.body;
 
    await Registration.create({
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