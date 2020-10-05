const Product = require('../../utils/models/products');


//  Get all products
export async function getProducts(req, res){
    try {
        const products = await Products.findAll({
            atributes:['id','name', 'price', 'image', 'tags']
        });
        res.json({
            data: products
        });
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'something goes wrong getting all products'
        });
    }
}

// Get only one product

export async function getOneProdut(req, res) {
    const { id } = req.params;
    try {
        const project = await Products.findOne({
            where: {
                id
            }
        })
        res.json(project);
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'something goes wrong getting one product'
        });
    }
}

// Creat a new product

export async function createProduct(req, res) {
    const { name, price, image, tags} = req.body;
    try {
        let newProduct = await Products.create({
            name,
            price, 
            image, 
            tags
        }, {
                fields: ['name', 'price', 'image', 'tags']
            });
        if (newProduct) {
            return res.json({
                message: 'New Product created',
                data: newProduct
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong creating a new product. Try Again.',
            data: {},
        })
    }
    res.json('received');
};

