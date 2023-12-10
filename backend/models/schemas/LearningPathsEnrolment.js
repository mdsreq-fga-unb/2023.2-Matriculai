module.exports = (sequelize, DataTypes) => {
    const LearningPathsEnrolment = sequelize.define("LearningPathsEnrolment", {
        id: {
            type: DataTypes.INTEGER,
            field: "id",
            primaryKey: true,
            autoIncrement: true
        },
        learning_path_id: {
            type: DataTypes.INTEGER,
            field: "learning_path_id",
            allowNull: false,
        },
        student_id: {
            type: DataTypes.INTEGER,
            field: "student_id",
            allowNull: false,
        },
    })

    return LearningPathsEnrolment; 
}