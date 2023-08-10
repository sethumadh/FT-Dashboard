import { Err } from '../types/type';

export const customError = (message: string, status: string, statusCode: number, isOperational: boolean) => {
    const err = new Error(message) as Err;
    err.status = status;
    err.statusCode = statusCode;
    err.isOperational = isOperational ? isOperational : true;
    return err;
};
