import express from 'express';
import {
  createProductController,
  deleteProductController,
  findProductByNameController,
  getProductById,
  getProducts,
  updateProductController,
} from '../controllers/productController';
import { isAdmin } from '../middlewares/adminMiddleware';
import { protect } from '../middlewares/authMiddleware';
const productRoutes = express.Router();

//products
productRoutes.route('/').get(getProducts);
productRoutes.route('/find').get(findProductByNameController);
productRoutes.post('/', protect, protect, isAdmin, createProductController);

productRoutes.route('/:id').get(getProductById);
productRoutes.put('/update/:id', updateProductController);
productRoutes.delete('/delete/:id', deleteProductController);
export default productRoutes;
