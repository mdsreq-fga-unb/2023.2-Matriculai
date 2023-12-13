module.exports = (sequelize, DataTypes) => {
    const LearningPathsEnrolment = sequelize.define("LearningPathsEnrolment", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_learning_path_enrolment",
            primaryKey: true,
            autoIncrement: true
        },
        learning_path_id: {
            type: DataTypes.INTEGER,
            field: "ds_learning_path_id",
            allowNull: false,
        },
        student_id: {
            type: DataTypes.INTEGER,
            field: "ds_student_id",
            allowNull: false,
        },
        student_name: {
            type: DataTypes.TEXT,
            field: "ds_student_name",
            allowNull: false,
        },
        student_registry: {
            type: DataTypes.INTEGER,
            field: "ds_student_registry",
            allowNull: false,
        },
    })

    return LearningPathsEnrolment; 
}