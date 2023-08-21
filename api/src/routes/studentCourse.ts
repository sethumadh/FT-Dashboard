import express from 'express';

import { addStudentCourse, getStudentCourse, updateCourse } from '../controllers/studentCourseController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect } from '../controllers/auth.controller';

const router = express.Router();

router.get('/:id', asyncErrorHanlder(getStudentCourse));
router.post('/add', asyncErrorHanlder(addStudentCourse));
router.patch('/:id', asyncErrorHanlder(updateCourse));

export default router;
