import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

//Get all Products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//Get all Products
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404); //You can ignore this and it will set to 500 bease on our configuration inside our error handler middleware
    //Since we have our custom middleware we can pass our own error to the error handler because we are making use of express-async-handler
    throw new Error('Product Not found');
  }
});

export { getProducts, getProductById };
