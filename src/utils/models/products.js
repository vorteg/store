const Sequelize = require('sequelize');
const { db } = require('../../lib/postgresql.conf');


//Ejemplo de tabla
    const Products = db.define('products', {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.STRING
        }
    });


console.log(Products === db.models.Products);
module.exports = Products;