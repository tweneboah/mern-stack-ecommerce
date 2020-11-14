import express from 'express';
import { authUser, getUserProfile } from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const userRoutes = express.Router();

//products
userRoutes.post('/login', authUser);
userRoutes.route('/profile').get(protect, getUserProfile);

export default userRoutes;
