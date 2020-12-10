import express from 'express';
import { paystackPostRequestProxyController } from '../controllers/paymentController';

const paymentRoutes = express.Router();

paymentRoutes.post('/', paystackPostRequestProxyController);

export { paymentRoutes };
