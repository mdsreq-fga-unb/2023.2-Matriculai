module.exports = (sequelize, DataTypes) => {
    const LearningPath = sequelize.define("LearningPath", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_learning_paths",
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
        electives: {
            type: DataTypes.TEXT,
            field: "ds_electives",
            allowNull: false
        }
    })

    return LearningPath; 
}