'use strict';

let learning_paths = { schema: 'learning_paths', tableName: 'tb_learning_paths'}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(learning_paths, {
                co_learning_paths: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
                ds_name: { type: Sequelize. STRING(40), allowNull: false },
                ds_description: { type: Sequelize.STRING(150),allowNull: false },
                ds_school_year: { type: Sequelize.INTEGER, allowNull: false },
                ds_electives:   { type: Sequelize.TEXT, allowNull: false}
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