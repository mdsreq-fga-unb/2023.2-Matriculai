module.exports = (sequelize, DataTypes) => {
    const Electives = sequelize.define("Electives", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_elective",
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(40),
            field: "ds_name",
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(150),
            field: "ds_description",
            allowNull: false
        },
        school_year: {
            type: DataTypes.INTEGER,
            field: "ds_school_year",
            allowNull: false
        },
        teacher: {
            type: DataTypes.STRING(30),
            field: "ds_teacher",
            allowNull: false
        },
        vacancies: {
            type: DataTypes.INTEGER,
            field: "ds_vacancies",
            allowNull: false
        },
        schedules: {
            type: DataTypes.INTEGER,
            field: "ds_schedules",
            allowNull: false
        }
    })

    return Electives; 
}