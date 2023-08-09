import express, { Express, NextFunction, Request, Response } from 'express';

import { Err } from '../types/type';
import { customError } from '../utils/customError';

const devErrors = (err: Err, res: Response) => {
    res.status(err.statusCode).json({ status: err.status, message: `${err.message}`, stackTrace: err.stack, error: err });
};
const prodErrors = (err: Err, res: Response) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({ status: err.status, message: err.message });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'something went wrong. try again later'
        });
    }
};
const castErrorHandler = (err: Err) => {
    const msg = `invalid value ${err?.value} for the path : ${err?.path}`;
    err.message = msg;
    err.isOperational = true;
    customError(msg, 'Fail', 400, true);
};
const ValidationErrorHandler = (err: Err) => {
    const errorProperties = Object.values(err?.errors as { [key: string]: any })
        .map((e) => e.message)
        .join('. ');
    const msg = `Validation error  ${err?._message} for  : ${errorProperties}`;
    err.isOperational = true;
    customError(msg, 'Fail', 400, true);
};
const duplicationErrorHandler = (err: Err) => {
    const msg = `duplicate Key or mongoose ID error with Duplicate key/ID ${err?.keyValue?._id} for the Post/create request`;
    err.message = msg;
    err.isOperational = true;
    customError(msg, 'Fail', 400, true);
};
const handleExpiredJwt = (err: Err) => {
    const msg = `TokenExpired`;
    err.message = msg;
    err.isOperational = true;
    customError(msg, 'Fail', 400, true);
};
const handleJwtError = (err: Err) => {
    const msg = `Jwt Token has been tampered with`;
    err.message = msg;
    err.isOperational = true;
    customError(msg, 'Fail', 400, true);
};

// globakl error handler
export const globalErrorHandler = (err: Err, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.statusCode >= 400 && err.statusCode < 500 ? 'Fail' : 'server error';

    Error.captureStackTrace(err);

    if (process.env.NODE_ENV === 'development') devErrors(err, res);
    else if (process.env.NODE_ENV === 'production') {
        // CAST ERROR
        if (err.name === 'CastError') castErrorHandler(err);

        // Validation ERROR
        if (err.name === 'ValidationError') ValidationErrorHandler(err);

        // Mongoose ID duplication error
        if (err?.code == 11000) duplicationErrorHandler(err);

        // jwt token expired error
        if (err.name == 'TokenExpiredError') handleExpiredJwt(err);

        // jwt tampered with
        if (err.name == 'JsonWebTokenError') handleJwtError(err);

        prodErrors(err, res);
    }
};
