module.exports = (sequelize, DataTypes) => {
    const LearningPaths = sequelize.define("LearningPaths", {
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
            type: DataTypes.JSON,
            field: "ds_electives",
            allowNull: false
        }
    })

    return LearningPaths; 
}