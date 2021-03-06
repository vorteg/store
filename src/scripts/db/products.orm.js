const Products = require('../../utils/models/products')
const db  = require('../../lib/postgresql.conf')

//  Get all products
async function getApiProducts (req, res) {
  try {
    const products = await Products.findAll({
      atributes: ['id', 'name', 'price', 'image', 'tags']
    })
    res.json({
      data: products
    })
  } catch (error) {
    console.log(error)
    res.json({
      data: {},
      message: 'something goes wrong getting all products'
    })
  }
}

// Get only one product

async function getApiProdut (req, res) {
  const { id } = req.params
  try {
    const project = await Products.findOne({
      where: {
        id
      }
    })
    res.json(project)
  } catch (error) {
    console.log(error)
    res.json({
      data: {},
      message: 'something goes wrong getting one product'
    })
  }
}

// Creat a new product

async function createApiProduct (req, res) {
  const { name, price, image, tags } = req.body
  try {
    //await modelSync () para limpiar tabla
    await Products.create({
      name,
      price,
      image,
      tags
    })
    res.send('received')
  } catch (error) {
    console.log('Error parsing data', error)
    await modelSync ()
    console.log('Send request again')
    res.send('Error 500 , Send request again')

  }
};
module.exports = {getApiProdut,getApiProducts,createApiProduct }

async function modelSync () {
  try {
    await db.sync({ force: true })
    console.log('All models were synchronized successfully.')
  } catch (error) {
    console.error('Unable to synchronize the models:', error)
  }
};

async function testConection () {
  try {
    await db.authenticate()
    console.log('Connection to DB has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testConection()

async function testCreate () {
  // Products.sync({force: true});
  try {
    const jane = await Products.create({ name: 'Jane', price: 3, image: 'Hola' })
    // Jane exists in the database now!
    console.log(jane instanceof Products) // true
    console.log(jane.name) // "Jane"
  } catch (error) {
    modelSync()
    console.log('Hubo un error al crear tabla', error)
  }
}

// testCreate()
