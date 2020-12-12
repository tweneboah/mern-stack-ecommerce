import express from 'express';
import {
  addOrderItemsController,
  getOrderByIdController,
  getMyOrdersController,
  getAllOrdersController,
  updateOrderToDeliveredController,
} from '../controllers/orderController';
import { protect } from '../middlewares/authMiddleware';

const orderRoutes = express.Router();

//products
orderRoutes.get('/myorders', protect, getMyOrdersController);
orderRoutes.get('/:id', protect, getOrderByIdController);
orderRoutes.route('/').post(protect, addOrderItemsController);
orderRoutes.get('/', protect, getAllOrdersController);
orderRoutes.put(
  '/update-order-to-delivered/:id',
  updateOrderToDeliveredController
);

export { orderRoutes };
