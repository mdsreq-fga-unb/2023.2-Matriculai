const { LearningPathsEnrolment } = require('../models/schemas');
const { Registration } = require('../models/schemas')
const { Users } = require('../models/schemas');

exports.studentEnrolment = async (req, res) => {
    const { learning_path_id, student_id } = req.body;
    const existingEnrolment = await LearningPathsEnrolment.findOne({where: {learning_path_id: learning_path_id, student_id: student_id} });
    const existingUser = await Users.findOne({where: {id: student_id}})

    if (existingEnrolment) {
        return res.status(400).json({error: 'O aluno já está matriculado nesta trilha.'}); 
    } else {
        await LearningPathsEnrolment.create({
            learning_path_id: learning_path_id,
            student_name: existingUser.name,
            student_registry: existingUser.registry,
            student_id: student_id,
        }).then(() => {
            res.status(201).json("Solicitação bem sucedida")
        }).catch((err) => {
            if(err){
                res.status(400).json({error: err.message || 'Erro desconhecido durante a matrícula.'});
            };
        });
    }; 
}

exports.isOpenEnrolment = async() => {
    let registrationsPeriod = Registration.findAll()

    for(let res of registrationsPeriod){
        let startDate = new Date(res.start)
        let endDate = new Date(res.end)
        const now = new Date()

        if(startDate < now){
            await Registration.update(
                { isOpen: false },
                { where: { id: registrationsPeriod.id } }
            );
        }else if(startDate >= now && endDate < now){
            await Registration.update(
                { isOpen: true },
                { where: { id: registrationsPeriod.id } }
            );
        }
    }
}

exports.Students = async(req, res) => {
    const { id } = req.body

    try{
        let students_by_lp = await LearningPathsEnrolment.findAll({where: {learning_path_id: id}})
        res.status(200).json(students_by_lp);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
    
}