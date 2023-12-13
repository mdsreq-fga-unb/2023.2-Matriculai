module.exports = (sequelize, DataTypes) => {
    const ElectivesStudents = sequelize.define("ElectivesStudents", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_elective_student",
            primaryKey: true,
            autoIncrement: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            field: "ds_student_id",
            allowNull: false
        },
        names: {
            type: DataTypes.TEXT,
            field: "ds_name",
            allowNull: false
        }
    })

    return ElectivesStudents; 
}