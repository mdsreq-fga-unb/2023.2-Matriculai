'use strict';

let electives = { schema: 'ElectivesStudents', tableName: 'tb__student_electives'}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(electives, {
                co_elective_student: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
                ds_student_id: { type: Sequelize.INTEGER, allowNull: false},
                ds_name: { type: Sequelize.TEXT, allowNull: false },
            })

            await transaction.commit()
        }catch (e) {
            await transaction.rollback()
            throw e
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(electives)
    }
}