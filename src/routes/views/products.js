import { Router } from 'express';
const routerView = Router();

// Controllers
import { getProducts } from '../../scripts/db/orm';
var products = null

const pro = [
    {
      name: "Red shoes",
      price: 75,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e44599932dce6b8440e26fb91e10a69&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Black bike",
      price: 300,
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53d820e6622fadd53b8638d60f468ccd&auto=format&fit=crop&w=800&q=60"
    }
  ];



// Routes
async function test(){
    await getProducts().then(val => products=val)
    //console.log(typeof(products))
    //console.log(products)
    //console.log( JSON.parse(products))
    //JSON.parse(products)
    return products
}

test()

routerView.get('/', function(req, res){
    res.render('products', {products});
})
// router.put('/:id', updateProject);
// router.delete('/:id', deleteProject);
// router.get('/:id', getOneProject)

export default routerView;