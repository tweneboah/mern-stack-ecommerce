import express from 'express';
import { fileUploadController } from '../controllers/productController';

import { protect } from '../middlewares/authMiddleware';

const fileUploadFile = express.Router();

//products
fileUploadFile.get('/uploads', fileUploadController);

export { fileUploadFile };
