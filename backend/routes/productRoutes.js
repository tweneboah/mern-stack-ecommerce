import express from 'express';
import {
  createProductController,
  getProductById,
  getProducts,
  fileUploadController,
} from '../controllers/productController';
import { protect } from '../middlewares/authMiddleware';
const productRoutes = express.Router();

//products
productRoutes.route('/').get(getProducts);
productRoutes.post('/', protect, createProductController);
productRoutes.post('/uploads', fileUploadController);
productRoutes.route('/:id').get(getProductById);

export default productRoutes;
