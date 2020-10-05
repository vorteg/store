import express, { json } from 'express'
import morgan from 'morgan'


const app = express();

// Import routes
import productsRoutes from '../routes/api/products';


// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/products', productsRoutes);


export default app;