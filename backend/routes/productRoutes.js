import express from 'express';
import {
  createProductController,
  getProductById,
  getProducts,
} from '../controllers/productController';
import { protect } from '../middlewares/authMiddleware';
const productRoutes = express.Router();

//products
productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProductById);
productRoutes.post('/', protect, createProductController);
export default productRoutes;
