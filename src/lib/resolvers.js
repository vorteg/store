// Resolvers

const Products = require('../utils/models/products')
const holi =[
    {
        saludo: "Hola desde objeto"
    }
]

const produc =[
    {
        id:1,
        name:"Hat",
        price:7.5,
        image:"https://images.pexels.com/photos/744365/pexels-photo-744365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        tag:null
    }
]

module.exports = {
    Query:{
        getHoli: () => {
            return holi
        },
        getProducts: async () => {
            
            try {
                const products = await Products.findAll()
                return products
            } catch (error) {
                console.log(error)
            }
            
        },
        getProduct: async (root, idparse) => {
            
            let id  = idparse["id"]
            try {
                
                let product = await Products.findOne({
                    where: {
                      id: id
                    }
                  })
                return product
            } catch (error) {
                console.log(error)
            }
            
        },

        
        
    }
    
} 