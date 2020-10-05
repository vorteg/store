const { DataTypes } = require('sequelize')
const { db } = require('../../lib/postgresql.conf')

// Ejemplo de tabla
// const Products = db.define('products', {
//     // Model attributes are defined here
//     id: {
//         type: DataTypes.INTEGER,
//        // autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.TEXT
//     },
//     price: {
//         type: DataTypes.INTEGER
//     },
//     image: {
//         type: DataTypes.TEXT
//     },
//     tags: {
//         type: DataTypes.TEXT
//     },
//     timestamps: false
//       });

const Products = db.define('Products', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  name: {

    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  tag: {
    type: DataTypes.STRING
  }

}, {
  timestamps: false
})

// `sequelize.define` also returns the model
console.log(Products === db.models.Products) // true

module.exports = Products
// console.log(Products === db.models.Products);
