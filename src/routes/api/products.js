import { Router } from 'express'

// Controllers
import { getProducts, createProduct } from '../../scripts/db/products.orm'
const router = Router()

// Routes
router.post('/', createProduct)
router.get('/', getProducts)

export default router
