const Sequelize = require('sequelize') 

require('dotenv').config('../../.env')

const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_NAME
} = process.env

module.exports = new Sequelize(
  // 'postgres',
  // 'postgres',
  // 'password123',
  DB_NAME, // db name,
  DB_USER, // username
  DB_PASSWD, // password
  {
    host: DB_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
)

