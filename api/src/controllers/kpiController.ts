import { NextFunction, Request, Response } from 'express';
import KPI from '../models/KPI';

export const getKpi = async (req: Request, res: Response, next:NextFunction) => {
    const kpis = await KPI.find();
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).json(kpis);
};
