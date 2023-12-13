'use strict';

let learning_paths = { schema: 'LearningPathsEnrolment', tableName: 'tb_learning_path_enrolment'}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(learning_paths, {
                co_learning_path_enrolment: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
                ds_learning_path_id: { type: Sequelize. INTEGER, allowNull: false },
                ds_student_id: { type: Sequelize.INTEGER, allowNull: false },
                ds_student_name: { type: Sequelize.TEXT, allowNull: false },
                ds_student_registry:{ type: Sequelize.INTEGER, allowNull: false}
            })

            await transaction.commit()
        }catch (e) {
            await transaction.rollback()
            throw e
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(learning_paths)
    }
}