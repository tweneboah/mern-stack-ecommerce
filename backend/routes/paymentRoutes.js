import express from 'express';
import {
  fetchAllPaymentsController,
  paystackPostRequestProxyController,
} from '../controllers/paymentController';

const paymentRoutes = express.Router();

paymentRoutes.post('/', paystackPostRequestProxyController);
paymentRoutes.get('/', fetchAllPaymentsController);

export { paymentRoutes };
