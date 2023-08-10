import express from 'express';

import { getTransaction } from '../controllers/transactionController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/authController';

const router = express.Router();

router.get('/transactions',protect, asyncErrorHanlder(getTransaction));

export default router;
