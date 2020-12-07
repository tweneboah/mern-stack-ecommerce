import express from 'express';
import {
  authUser,
  getUserProfile,
  getUsersController,
  registerUser,
  updateUserProfile,
} from '../controllers/userController';
import { isAdmin } from '../middlewares/adminMiddleware';
import { protect } from '../middlewares/authMiddleware';
updateUserProfile;
const userRoutes = express.Router();

//products
userRoutes.post('/login', authUser);
userRoutes.route('/profile').get(protect, getUserProfile);
userRoutes.put('/profile', protect, updateUserProfile);
userRoutes.post('/register', registerUser);
userRoutes.get('/', protect, isAdmin, getUsersController);
export default userRoutes;
