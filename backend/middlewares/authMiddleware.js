import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    //We need to decode the token so we will put them in try/catch
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get the user and attach to req object
      req.user = await User.findById(decoded.id).select('-password'); //neglect password
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not Authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not Authorised, no token found');
  }
  next();
});

export { protect };
