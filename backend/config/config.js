require("dotenv").config();

const config = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || "database",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: "mysql",
};

module.exports = config;
