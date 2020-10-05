import express, { json } from 'express'
import morgan from 'morgan'

// Import routes
import productsRoutes from '../routes/api/products'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(json())

// Routes
app.use('/products', productsRoutes)

export default app
