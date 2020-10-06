import Sequelize from 'sequelize'
// require('dotenv').config({ path: '/home/qupi/Desktop/Fazt/nodejs-postgresql-restapi/src/.env' });
require('dotenv').config('/home/qupi/Desktop/store/.env')

const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_NAME
} = process.env

export const db = new Sequelize(
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
export async function testConection () {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testConection()
