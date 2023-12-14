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


exports.getRecentRegistrationPeriod = async (req, res) => {
    try {
      const recentPeriod = await Registration.findOne({
        order: [['start', 'DESC']], // Ordena por data de início em ordem decrescente
      });
  
      res.json(recentPeriod);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o período de matrícula mais recente.' });
    }
  };