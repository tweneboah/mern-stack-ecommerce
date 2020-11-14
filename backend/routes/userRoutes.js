import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const userRoutes = express.Router();

//products
userRoutes.post('/login', authUser);
userRoutes.route('/profile').get(protect, getUserProfile);
userRoutes.post('/register', registerUser);
export default userRoutes;
