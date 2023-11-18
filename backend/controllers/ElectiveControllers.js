const { Electives } = require('../models/schemas')


exports.createElective = async(req, res) => {
    const { name, description, school_year, teacher, vacancies, schedules } = req.body
    Electives.create({
        name: name,
        description: description,
        school_year: school_year,
        teacher: teacher,
        vacancies: vacancies, 
        schedules: schedules
    })
    

}