import express from 'express';
import { getProductById, getProducts } from '../controllers/productController';
const productRoutes = express.Router();

//products
productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProductById);

export default productRoutes;
