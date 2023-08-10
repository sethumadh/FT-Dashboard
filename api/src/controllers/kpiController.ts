import { NextFunction, Request, Response } from 'express';
import KPI from '../models/KPI';

export const getKpi = async (req: Request, res: Response, next:NextFunction) => {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
};
