import express from 'express';

import { getKpi } from '../controllers/kpiController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/authController';

const router = express.Router();

router.get('/kpis', asyncErrorHanlder(getKpi));

export default router;
