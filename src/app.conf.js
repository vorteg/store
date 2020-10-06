import express, { json } from 'express'
import morgan from 'morgan'
const path = require("path");

// Import routes
import productsRoutes from './routes/views/products'

const app = express()


app.set("views", path.join(__dirname,  "views"));
app.set("view engine", "pug");



// Middlewares
app.use(morgan('dev'))
app.use(json())

// Routes
app.use('/products', productsRoutes)

export default app
