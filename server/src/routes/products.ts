import express from 'express';

import { getProducts, getOneProduct, addOneproduct, deleteOneproduct } from '../controllers/productsController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect, restrict } from '../controllers/authController';

const router = express.Router();

router.route('/products').get(protect, asyncErrorHanlder(getProducts));
router.route('/:id').get(protect, asyncErrorHanlder(getOneProduct));
router.route('/create').post(protect, asyncErrorHanlder(addOneproduct));
router.route('/delete/:id').delete(protect, restrict('admin','dev'), asyncErrorHanlder(deleteOneproduct));

export default router;
