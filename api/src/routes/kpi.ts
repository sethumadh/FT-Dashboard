import express from 'express';

import { getKpi } from '../controllers/kpiController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/auth.controller';

const router = express.Router();

router.get('/kpis', asyncErrorHanlder(getKpi));

export default router;
