'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'user_type', {
          type: Sequelize.DataTypes.BOOLEAN,
          after: "ds_token"
        }, { transaction: t }),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
