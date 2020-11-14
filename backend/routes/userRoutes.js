import express from 'express';
import authUser from '../controllers/userController';

const userRoutes = express.Router();

//products
userRoutes.post('/login', authUser);

export default userRoutes;
