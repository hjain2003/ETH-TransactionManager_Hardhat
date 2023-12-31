import express from 'express';
import { login, logout, signup, welcome } from '../controllers/user_controllers.js';
import { Authenticate } from '../middlewares/auth.js';
// const Authenticate = require('../middlewares/auth.cjs')
const userRouter =express.Router();

userRouter.get('/',Authenticate,welcome);
userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.get('/logout',logout);

export default userRouter;