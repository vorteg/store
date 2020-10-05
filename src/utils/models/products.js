const { DataTypes } = require('sequelize')
const { db } = require('../../lib/postgresql.conf')

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

console.log('Status Model DB in products: ',Products === db.models.Products) // true
module.exports = Products

