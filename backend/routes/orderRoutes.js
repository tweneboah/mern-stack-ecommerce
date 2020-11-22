import express from 'express';
import { addOrderItemsController } from '../controllers/orderController';
import { protect } from '../middlewares/authMiddleware';

const orderRoutes = express.Router();

//products
orderRoutes.post('/', protect, addOrderItemsController);

export { orderRoutes };
