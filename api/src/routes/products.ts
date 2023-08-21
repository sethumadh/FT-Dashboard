import express from 'express';

import { getProducts, getOneProduct, addOneproduct, deleteOneproduct } from '../controllers/productsController';
import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import { protect, restrict } from '../controllers/auth.controller';

const router = express.Router();

router.route('/products').get(asyncErrorHanlder(getProducts));
router.route('/:id').get(asyncErrorHanlder(getOneProduct));
router.route('/create').post(asyncErrorHanlder(addOneproduct));
router.route('/delete/:id').delete(restrict('admin', 'dev'), asyncErrorHanlder(deleteOneproduct));

export default router;
