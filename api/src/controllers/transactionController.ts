import { NextFunction, Request, Response } from 'express';

import Transaction from '../models/Transaction';

export const getTransaction = async (req: Request, res: Response,next:NextFunction) => {
    const transactions = await Transaction.find().limit(250).sort({ createdOn: -1 });
    res.status(200).json(transactions);
};
