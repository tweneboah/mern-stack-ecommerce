import dotenv from 'dotenv';
dotenv.config();
import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport';
import crypto from 'crypto';
import User from '../models/userModel';
import generateToken from '../utils/generateToken';

//=====================
//====CONFIGURE TO SEND EMAIL=======
//====================

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SEND_GRID_KEY,
    },
  })
);

//========================
//Get all Products
//=======================
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  const userRxist = await User.findOne({ email });
  if (userRxist) {
    res.status(400);
    throw new Error('User already exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    //Send email to this user

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });

    //Send email to this user
    transporter
      .sendMail({
        to: user.email,
        from: 'twentekghana@gmail.com',
        subject: 'Register success',
        html: `<div>
        <h1>Welcome to Inovo Ecommerce. Shop with confidence</h1>
        <p>
        Good to go
        </p>
        </div>`,
      })
      .then(data => console.log('Email sent', data));
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//Get all Products
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//USER PROFILE

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate('orders').exec();
  if (user) {
    res.json(user);
  } else {
    res.status(401);
    throw new Error('User not found');
  }
});

//GET ALL USERS

const getUsersController = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//=============
//Update user profile
// NOTE: Since findByIdAndUpdate does not listen to model middleware we can't use that before the middleware  of hashing the password won't run hence we cant login if we use that API
//==================

const updateUserProfileController = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      password: updatedUser.password,
    });
  } else {
    res.status(401);
    throw new Error('User not found');
  }
});

//===================
//resetPasswordController
//===================
const resetPasswordRequestTokenController = asyncHandler(async (req, res) => {
  //Create a token
  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString('hex'); //convert buffer to string
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send('User does not exist');
    } else {
      user.resetPassworkToken = token;
      user.resetPassworkTokenExpire = Date.now() + 3600000; //valid for 1 hour

      await user.save();

      //Send mail
      transporter.sendMail({
        to: user.email,
        from: 'twentekghana@gmail.com',
        subject: 'Password Reset request',
        html: `
        <p>You requested for password reset</p>
        <h5>Click the link to reset your password <a href='http://localhost:3000/new-password-update/${token}'>password</a></h5>
        `,
      });
      res.json({ message: 'Check your email to reset your password' });
    }
  });
});

//=================
//New Password
//=================
const newPasswordResetController = asyncHandler(async (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;

  const user = await User.findOne({
    resetPassworkToken: sentToken,
    resetPassworkTokenExpire: { $gt: Date.now() }, //The saved token must be greater than now
  });
  if (!user) {
    throw new Error('Token expired');
  } else {
    user.password = newPassword;
    user.resetPassworkToken = undefined;
    user.resetPassworkTokenExpire = undefined;
    await user.save();
    res.json({ message: 'Password reset success' });
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfileController,
  getUsersController,
  resetPasswordRequestTokenController,
  newPasswordResetController,
};
