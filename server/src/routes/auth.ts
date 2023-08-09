import express, { Request, Response } from 'express';

import { forgotPassword, getUser, login, logout, protect, resetPassword, signup, updateUser } from '../controllers/authController';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(protect, logout);

router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

router.route('/user/:_id').get(protect, getUser);
router.route('/update/:_id').post(protect,updateUser)
export default router;
