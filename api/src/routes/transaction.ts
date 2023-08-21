import express from 'express';

import { getTransaction } from '../controllers/transactionController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/auth.controller';

const router = express.Router();

router.get('/transactions', asyncErrorHanlder(getTransaction));

export default router;
