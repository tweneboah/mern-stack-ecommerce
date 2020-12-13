import expressAsyncHandler from 'express-async-handler';
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

const createProductController = asyncHandler(async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.user._id,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    numReviews: req.body.numReviews,
    description: req.body.description,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//==================
//========UPDATE PRODUCT
//=================
const updateProductController = expressAsyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  res.send(updatedProduct);
});

//=============================
// DELETE PRODUCT
//=====================
const deleteProductController = expressAsyncHandler(async (req, res) => {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  res.send(deletedProduct);
});

//===========
// FIND PRODUCT BY NAME
//==========

const findProductByNameController = expressAsyncHandler(async (req, res) => {
  // const products = await Product.find({ name: req.query });
  // if (products || products.length === []) {
  //   res.json(products);
  // } else {
  //   throw new Error('Error occured');
  // }
});

export {
  getProducts,
  getProductById,
  createProductController,
  updateProductController,
  deleteProductController,
  findProductByNameController,
};
