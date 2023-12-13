'use strict';

import mysql2 from 'mysql2';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const config = require(__dirname + '/../../config/config.js');
const db = {};

const sequelize = new Sequelize(
  'matriculai',
  'root',
  'banco',
  {
    host: '104.154.26.234',
    dialect: 'mysql',
    dialectModule: mysql2// Por exemplo, 'mysql', 'postgres', 'sqlite', etc.
    // Outras opções, se necessário
  }
);


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
