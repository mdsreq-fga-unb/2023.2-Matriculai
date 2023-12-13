const { Electives, ElectivesStudents, Users } = require('../models/schemas')

exports.createElective = async(req, res) => {
    const { name, description, school_year, teacher, vacancies, schedules } = req.body;

    const existingElective = await Electives.findOne({
        where: {
            name: name
        }
    })

    if(existingElective){
        return res.status(401).json({ error: 'This elective subject already exists' });
    } else {
        await Electives.create({
            name: name,
            description: description,
            school_year: school_year,
            teacher: teacher,
            vacancies: vacancies, 
            schedules: schedules
        }).then(() => {
            res.status(201).json("OK")
        }).catch((err) => {
            if(err){
                res.status(400).json({error: err});
            };
        });
    }
    
};

exports.deleteElective = async(req, res) => {
    const { id }  = req.body
    await Electives.destroy({ where: {id: id}}).then(() => {
            res.status(200).json("OK");
    }).catch((err) => {
        if(err){
            res.status(400).json({error: err});
        };
    })};

exports.listElectives = async (req, res) => {
    try {
        const electives = await Electives.findAll();
        res.status(200).json(electives);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.ElectivesByStudent = async(req, res) => {
    const { names, student_id } = req.body
    const exists = await ElectivesStudents.findOne({where:{ student_id: student_id}})

    if(!exists){
        try
        {
            await ElectivesStudents.create({
                names: names,
                student_id: student_id
            }).then(() => {
              res.status(201).json("OK")
            })

        }catch(err)
        {
          res.status(400).json({"error": err})
        }
    }else{
      res.status(200).json("Já existe")
    }
    
}

exports.FindElective = async(req, res) => {
  console.log("oi")
  const { id } = req.body
  try {
      const eletiva = await Electives.findOne({where: {id: id}});
      res.status(200).json(eletiva);
  } catch (err) {
      res.status(400).json({ error: err.message });
  } 

}

exports.Students = async(req, res) => {
  const { eletivaNome} = req.body
  let listStudents = []
  let infoStudents = []
    try {
        const students = await ElectivesStudents.findAll();
        
        if(students){
          for(let student of students){
            let eletivas = JSON.parse(student.names)
            if(eletivas.includes(eletivaNome)){
              listStudents.push(student.student_id)
            }
          }

          for(let s of listStudents){
            let find = await Users.findOne({where: {id: s}})
            infoStudents.push(find)
          }
        }
        res.status(200).json(infoStudents);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 

}