import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db';
import productRoutes from './routes/productRoutes';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

dotenv.config();
dbConnect();

const app = express();

app.use((req, res, next) => {
  next();
});

app.use('/api/products', productRoutes);

//Error Handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is runing in ${process.env.NODE_ENV} on port ${PORT}`)
);
