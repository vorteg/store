const Sequelize = require('sequelize');
const { db } = require('../../lib/postgresql.conf');


//Ejemplo de tabla
    const Users = db.define('Users', {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });


console.log(Users === db.models.Users);
module.exports = Users;