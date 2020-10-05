import { Router } from 'express'
const router = Router();

// Controllers
import { getProducts, createProduct} from '../../scripts/db/products.orm';

// Routes
router.post('/', createProduct);
router.get('/', getProducts);


export default router;