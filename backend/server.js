import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db';
import productRoutes from './routes/productRoutes';
// import { notFound, errorHandler } from './middlewares/errorMiddleware';
import userRoutes from './routes/userRoutes';
import { orderRoutes } from './routes/orderRoutes';
import { paymentRoutes } from './routes/paymentRoutes';
import { paystackWebhookRoute } from './routes/paymentWebHookRoute';

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/pay', paymentRoutes);
app.use('/paystack/webhook', paystackWebhookRoute);
//Error Handler
// app.use(notFound);
// app.use(errorHandler);

app.get('/', (req, res) => res.json({ app: 'MERN ECOMMERCE' }));
const PORT = process.env.PORT || 6000;

app.listen(PORT, () =>
  console.log(`Server is runing in ${process.env.NODE_ENV} on port ${PORT}`)
);
