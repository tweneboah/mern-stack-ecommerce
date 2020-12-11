import express from 'express';

import { paystackWebhookController } from '../controllers/paymentWebHook';

const paystackWebhookRoute = express.Router();

//This will be called by paystack automatically
paystackWebhookRoute.post('/', paystackWebhookController);

export { paystackWebhookRoute };
