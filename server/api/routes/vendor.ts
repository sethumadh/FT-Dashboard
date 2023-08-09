import express from 'express';

import { addStudents, getVendor } from '../controllers/vendorController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/authController';

const router = express.Router();

router.get('/:id', protect, asyncErrorHanlder(getVendor));
router.patch('/update/:id', protect, asyncErrorHanlder(addStudents))

export default router;

