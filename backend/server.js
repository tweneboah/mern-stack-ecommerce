import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();
dbConnect();

const app = express();
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is runing in ${process.env.NODE_ENV} on port ${PORT}`)
);
