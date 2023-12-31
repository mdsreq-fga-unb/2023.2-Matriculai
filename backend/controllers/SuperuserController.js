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

exports.getRegistrationPeriod = async (req, res) => {
    try {
        const mostRecentPeriod = await Registration.findOne({
            order: [['createdAt', 'DESC']]
        });

        if (!mostRecentPeriod) {
            res.status(404).json({ error: 'Período de matrícula não encontrado.' });
            return;
        }

        res.json(mostRecentPeriod);
    } catch (error) {
        console.error('Erro ao buscar o período de matrícula mais recente:', error);
        res.status(500).json({ error: 'Erro ao buscar o período de matrícula mais recente.' });
    }
};
