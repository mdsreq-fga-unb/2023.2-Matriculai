'use strict';

let users = { schema: 'Users', tableName: 'Users'}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(users, {
                co_user: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
                ds_superuser: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false},
                ds_name: { type: Sequelize.TEXT, allowNull: false},
                ds_registry: { type: Sequelize.INTEGER, allowNull: true},
                ds_school_year: { type: Sequelize.INTEGER, allowNull: true},
                ds_email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: {isEmail: {args: true, msg: "O formato do e-mail é inválido",},},},
                ds_password: { type: Sequelize.STRING, allowNull: false, validate: {len: [8, Infinity],},},
                ds_token: { type: Sequelize.STRING },
            })
            await transaction.commit()
        }catch (e) {
            await transaction.rollback()
            throw e
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(users)
    }
}