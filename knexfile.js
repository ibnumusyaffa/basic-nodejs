
const config = require('./config/database')

const migrations = {
  tableName: 'migrations',
  directory: './db/migrations',
}
const seeds = {
  directory: './db/seeders',
}

module.exports = {
  development: {
    client: config.development.dialect,
    connection: config.development,
    migrations,
    seeds,
  },

  test: {
    client: config.test.dialect,
    connection: config.test,
    migrations,
    seeds,
  },

  production: {
    client: config.production.dialect,
    connection: config.production,
    migrations,
    seeds,
  }

};
