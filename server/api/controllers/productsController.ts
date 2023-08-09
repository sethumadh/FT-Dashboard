import { NextFunction, Request, Response } from 'express';

import Product from '../models/Product';
import { customError } from '../utils/customError';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find();
    res.status(200).json(products);
};
export const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        const error = customError(`No product  available in that name`, 'fail', 404, true);
        return next(error);
    }
    res.status(200).json(product);
};

export const addOneproduct = async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.create(req.body);
    res.send(200).json(product);
};
export const deleteOneproduct = async (req: Request, res: Response, next: NextFunction) => {
    const product = await Product.findById(req.params.id);

    console.log(req.params.id, '--> product to be deleted');
    // next();

    if (!product) {
        const error = customError(`No product  available in that name`, 'fail', 404, true);
        return next(error);
    }
    const result= await Product.deleteOne({_id:product.id})
    res.status(201).json(result);
};
