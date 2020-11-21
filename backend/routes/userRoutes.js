import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';
updateUserProfile;
const userRoutes = express.Router();

//products
userRoutes.post('/login', authUser);
userRoutes.route('/profile').get(protect, getUserProfile);
userRoutes.put('/profile', protect, updateUserProfile);
userRoutes.post('/register', registerUser);
export default userRoutes;
