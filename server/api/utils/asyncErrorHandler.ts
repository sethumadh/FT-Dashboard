import express, { Request, Response, NextFunction } from 'express';
import { Err } from '../types/type';

export const asyncErrorHanlder = (fn: any) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch((err: Err) => next(err));
