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
        const currentPeriod = await Registration.findOne({
            attributes: [
              [sequelize.fn('max', sequelize.col('createdAt')), 'maxCreatedAt']
            ]
          });
  
      res.json(currentPeriod);
    } catch (error) {
      console.error('Error fetching current registration period:', error);
      res.status(500).json({ error: 'Erro ao buscar o período de matrícula atual.' });
    }
  };