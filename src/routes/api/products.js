import { Router } from 'express';

const router = Router();


// Controllers
import { getApiProducts, createApiProduct } from '../../scripts/db/products.orm';

// Routes
function productsApi(app){
    import app from '../../app.conf'
    app.use('/products', router);
    router.post('/api', createApiProduct);
    router.get('/api', getApiProducts);
    // router.put('/:id', updateProject);
    // router.delete('/:id', deleteProject);
    // router.get('/:id', getOneProject)
    }


export default productsApi;