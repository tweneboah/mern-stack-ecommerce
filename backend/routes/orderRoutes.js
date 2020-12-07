import express from 'express';
import {
  addOrderItemsController,
  getOrderByIdController,
  getMyOrdersController,
} from '../controllers/orderController';
import { protect } from '../middlewares/authMiddleware';

const orderRoutes = express.Router();

//products
orderRoutes.get('/myorders', protect, getMyOrdersController);
orderRoutes.get('/:id', protect, getOrderByIdController);
orderRoutes.route('/').post(protect, addOrderItemsController);

export { orderRoutes };
