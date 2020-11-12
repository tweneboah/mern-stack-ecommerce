import express from 'express';
import asyncHandler from 'express-async-handler';
const productRoutes = express.Router();
import Product from '../models/productModel';

//get all products
productRoutes.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//Get a product
productRoutes.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product Not Found' });
    }
  })
);

export default productRoutes;
