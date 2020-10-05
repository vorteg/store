const Sequelize = require('sequelize')
const { db } = require('../../../lib/postgresql.conf')

// Ejemplo de tabla
const Animals = db.define('Animals', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.INTEGER
  }
}
  // Other model options go here
)

console.log(Animals === db.models.Animals)
module.exports = Animals
