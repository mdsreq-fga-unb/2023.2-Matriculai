'use strict';

let register = { schema: 'Registration', tableName: 'tb_registration'}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(register, {
                co_registration_period: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
                ds_is_open: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false},
                ds_start: { type: Sequelize.STRING, allowNull: false},
                ds_end: { type: Sequelize.STRING, allowNull: false},
            })
            await transaction.commit()
        }catch (e) {
            await transaction.rollback()
            throw e
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(register)
    }
}