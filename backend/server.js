import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db';
import productRoutes from './routes/productRoutes';
import { errorHandler, notFound } from './middlewares/errorMiddleware';
import userRoutes from './routes/userRoutes';

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//Error Handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is runing in ${process.env.NODE_ENV} on port ${PORT}`)
);
