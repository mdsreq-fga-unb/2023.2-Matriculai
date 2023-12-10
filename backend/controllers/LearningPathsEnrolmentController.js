const { LearningPathsEnrolment } = require('../models/schemas');

exports.studentEnrolment = async (req, res) => {
    const { learning_path_id, student_id } = req.body;
    const existingEnrolment = await LearningPathsEnrolment.findOne({where: {learning_path_id: learning_path_id, student_id: student_id} });

    if (existingEnrolment) {
        return res.status(400).json({error: 'O aluno já está matriculado nesta trilha.'}); 
    } else {
        await LearningPathsEnrolment.create({
            learning_path_id: learning_path_id,
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