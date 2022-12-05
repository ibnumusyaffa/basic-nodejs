const dotenv = require("dotenv");
const Knex = require("knex");
const cfg = require("../../config/database");

dotenv.config();

const env = process.env.NODE_ENV || "development";
const config = cfg[env];

const knex = Knex({
  client: config.dialect,
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
  },
});

module.exports = knex;
