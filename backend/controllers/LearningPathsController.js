const { LearningPath } = require('../models/schemas')

exports.createLearningPaths = async(req, res) => {
    const { name, description, school_year, electives} = req.body;
    let electives_object = JSON.stringify(electives);

    await LearningPath.create({
        name: name,
        description: description,
        school_year: school_year,
        electives: electives_object
    }).then(() => {
        res.status(201).json("OK")
        console.log('oi')
    }).catch((err) => {
        if(err){
            res.status(400).json({error: err})
            console.log(err)
        };
    });
};

exports.deleteLearningPaths = async(req, res) => {
    const { id }  = req.body;
    await LearningPath.destroy({ where: {id: id}}).then(() => {
            res.status(200).json("OK");
    }).catch((err) => {
        if(err){
            res.status(400).json({error: err});
        };
    });
}

exports.LearningPath = async (req, res) => {
    try {
        const trilhas = await LearningPath.findAll();
        res.status(200).json(trilhas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
}

exports.FindLP = async (req, res) => {
    const { id } = req.body
    try {
        const trilha = await LearningPath.findOne({where: {id: id}});
        res.status(200).json(trilha);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
}