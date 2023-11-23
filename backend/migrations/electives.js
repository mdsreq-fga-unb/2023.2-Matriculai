'use strict';

let electives = { schema: 'electives', tableName: 'tb_electives'}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(electives, {
                co_elective: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
                ds_name: { type: Sequelize. STRING(40), allowNull: false },
                ds_description: { type: Sequelize.STRING(150),allowNull: true },
                ds_school_year: { type: Sequelize.INTEGER, allowNull: false },
                ds_teacher: { type: Sequelize.STRING(30), allowNull: false },
                ds_vacancies: { type: Sequelize.INTEGER, allowNull: false },
                ds_schedules: { type: Sequelize.INTEGER, allowNull: false }
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