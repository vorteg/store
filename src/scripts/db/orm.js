const Products = require('../../utils/models/products')
const { db } = require('../../lib/postgresql.conf')

export async function getProduct (id) {
  const product = await Products.findOne({
    where: {
      id
    }
  })
  return product
}

export async function getProducts () {
  const products = await Products.findAll({
    atributes: ['id', 'name', 'price', 'image', 'tags']
  })
  return products
}
// try {

//     res.json(product)
//   } catch (error) {
//     console.log(error)
//     res.json({
//       data: {},
//       message: 'something goes wrong getting one product'
//     })
//   }
