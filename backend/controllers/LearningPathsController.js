const { LearningPath } = require('../models/schemas')

exports.createLearningPaths = async(req, res) => {
    const { name, description, school_year, electives} = req.body
    let electives_object = JSON.stringify(electives)

    await LearningPath.create({
        name: name,
        description: description,
        school_year: school_year,
        electives: electives_object
    }).then(() => {
        res.status(201).json("OK")
    }).catch((err) => {
        if(err){
            res.status(400).json({error: err})
        }
    })
}

exports.deleteLearningPaths = async(req, res) => {
    const { id }  = req.body
    await LearningPath.destroy({ where: {id: id}}).then(() => {
            res.status(200).json("OK")
    }).catch((err) => {
        if(err){
            res.status(400).json({error: err})
        }
    })
}