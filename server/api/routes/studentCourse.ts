import express from 'express';

import { addStudentCourse, getStudentCourse, updateCourse } from '../controllers/studentCourseController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/authController';

const router = express.Router();

router.get('/:id', protect, asyncErrorHanlder(getStudentCourse));
router.post('/add', protect, asyncErrorHanlder(addStudentCourse));
router.patch('/:id', protect, asyncErrorHanlder(updateCourse))

export default router;