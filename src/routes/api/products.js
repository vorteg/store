import { Router } from 'express';
const router = Router();

// Controllers
import { getApiProducts, createApiProduct } from '../../scripts/db/products.orm';

// Routes
router.post('/api', createApiProduct);
router.get('/api', getApiProducts);
// router.put('/:id', updateProject);
// router.delete('/:id', deleteProject);
// router.get('/:id', getOneProject)

export default router;