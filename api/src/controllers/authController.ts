import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import util from 'util';
import crypto from 'crypto';

import { asyncErrorHanlder } from '../utils/asyncErrorHandler';
import User, { IUserModel } from '../models/User';
import { customError } from '../utils/customError';
import { DecodeToken } from '../types/type';
import { sendEmail } from '../utils/email';

//  This is the solution that is working for extending the request body with custom property --> user.
// Adding index.d.ts is not a success at this point. The index.d.ts is left in the root directory for reference
declare module 'express-serve-static-core' {
    interface Request {
        user?: IUserModel;
    }
}

// **************Register a new User or Sign up as new user**************
export const signup = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    const { password, confirmPassword, email, name } = req.body;

    if (!email || !name || !password || !confirmPassword) {
        const error = customError('name or email or Password or confirm password not provided @ksm', 'fail', 400, true);
        return next(error);
    }
    if (password != confirmPassword) {
        const error = customError('Password and confirm password does not match', 'fail', 400, true);
        return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const error = customError('A user with this email already exists in the Database', 'fail', 400, true);
        return next(error);
    }

    const newUser: IUserModel = await User.create(req.body);
    const token = jwt.sign({ email: newUser.email, name: newUser.name, id: newUser._id }, process.env.SECRET_STR!, {
        expiresIn: process.env.LOGIN_EXPIRES
    });

    // set the jwt inside the cookie to send to the client
    // res.cookie('jwt', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV != 'development',
    //     sameSite: 'strict',
    //     maxAge: 1 * 24 * 60 * 60 * 1000
    // });
    res.status(201).json({
        status: 'Success',
        _id: newUser._id,
        access_token: token,
        name: newUser.name,
        email: newUser.email,
        message: `user account for ${newUser.name} is created`
    });
});

// **************Login an existing account**************
export const login = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        const error = customError('email or Password  NOT provided for loggin in @ksm', 'fail', 400, true);
        return next(error);
    }
    const existingUser: IUserModel = (await User.findOne({ email }).select('+password')) as IUserModel;
    if (!existingUser) {
        const error = customError('No such user exists @ksm', 'fail', 400, true);
        return next(error);
    }
    const isMatch = await existingUser.comparePassword(password, existingUser.password);
    if (!isMatch) {
        const error = customError('Password is incorrect for loggin in @ksm', 'fail', 400, true);
        return next(error);
    }
    const token = jwt.sign({ email: existingUser.email, name: existingUser.name, id: existingUser._id }, process.env.SECRET_STR!, {
        expiresIn: process.env.LOGIN_EXPIRES
    });
    // res.cookie('jwt', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV != 'development',
    //     sameSite: 'strict',
    //     maxAge: 1 * 24 * 60 * 60 * 1000
    // });
    res.status(201).json({
        status: 'Success',
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        access_token: token,
        message: `${existingUser.name} is logged in successfully`
    });
});

//************** Get one user**************

export const getUser = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    const existingUser = await User.findById({ _id: req.params._id });
    if (!existingUser) {
        const error = customError('No such user exists @ksm', 'fail', 400, true);
        return next(error);
    }
    res.status(200).json(existingUser);
});

//************** Update user**************
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const existingUser = await User.findOne({ email: req.params._id });
    if (!existingUser) {
        const error = customError('No such user exists @ksm', 'fail', 400, true);
        return next(error);
    }
    const { email, password, confirmPassword, ...rest } = req.body;
    existingUser.email = email || existingUser.email;
    if (password != confirmPassword) {
        const error = customError('Password and confirm password does not match', 'fail', 400, true);
        return next(error);
    }
    existingUser.password = password || existingUser;
    const updateUser = await existingUser.save();
    res.status(200).json(updateUser);
};

//************** Log out user**************

export const logout = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'logged out' });
});

// Auth middleware for Route protection
export const protect = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    // if we were to use cookie
    //token = req.cookies.jwt

    // 1. Check whether Token exists
    const authHeadersValue = req.headers.authorization;
    let token;
    if (authHeadersValue && authHeadersValue.startsWith('Bearer')) {
        token = authHeadersValue.split(' ')[1] as string;
    }
    if (!authHeadersValue) {
        const error = customError('No Token available in header/authorize. This is because the user is not logged in or token is not present in the protected route. @ksm', 'fail', 400, true);
        return next(error);
    }

    // 2. Validate the jwt token
    let decodedToken!: DecodeToken;
    jwt.verify(token as string, process.env.SECRET_STR! as string, function (err: any, decoded: any) {
        if (err) {
            console.log(err, "---->>>>>>server")
            return next(err);
        }
        decodedToken = decoded;
    });

    // 3. If the user exists
    const existingUser: IUserModel = (await User.findOne({ email: decodedToken.email }).select('+passwordChangedAt')) as IUserModel;

    if (!existingUser) {
        const error = customError('No such user with this token exists @ksm', 'fail', 400, true);
        return next(error);
    }

    // 4: If the user has changed the password after the token is verified
    const isPasswordMofified = await existingUser.isPasswordChanged(existingUser.passwordChangedAt!, decodedToken.iat);

    if (isPasswordMofified) {
        const error = customError('The password is changed after login. Please login again to continue', 'fail', 401, true);
        return next(error);
    }
    req.user = existingUser as IUserModel;
    next();
});

// *************Authorization based on roles middleware*************//
export const restrict = (...role: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (!role.includes(req.user?.role!)) {
            const error = customError('The user has no permission for this request - Forbidden', 'Fail', 403, true);
            return next(error);
        }
        next();
    };
};

// **************create a middleware for forgotPassword --> email to be  send on user's POST requst for forgot password.**************
export const forgotPassword = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    // 1. Get the user's email from req.user.email
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
        const error = customError('No such user exists for this email@ksm', 'fail', 404, true);
        return next(error);
    }

    // 2. Create a random password reset token
    const resetToken = existingUser.createResetPasswordToken();

    await existingUser.save();

    // 3. send email to user with the reset token and the reset URL or api? to reset password
    const resetUrl = `${req.protocol}://${req.get('host')}/users/resetPassword/${resetToken}`;
    const subject = `Reset your Password at Future APP`;
    const text = ` We have received a request to reset password . Please visit ${resetUrl}  to complete your reset password`;
    try {
        await sendEmail({
            email: existingUser.email,
            subject,
            text
        });
        res.status(201).json({ status: 'success', message: 'Reset Password link send' });
    } catch (err) {
        existingUser.resetPasswordToken = undefined;
        existingUser.resetPasswordTokenExpiresAt = undefined;
        existingUser.save({ validateBeforeSave: false });
        const error = customError(`${err} -->> There is an error sending rest password. Please try again`, 'fail', 500, true);
        return next(error);
    }
});

//************** Reset Password **************
export const resetPassword = asyncErrorHanlder(async (req: Request, res: Response, next: NextFunction) => {
    const token = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const existingUser: IUserModel = (await User.findOne({ resetPasswordToken: token, resetPasswordTokenExpiresAt: { $gt: Date.now() } })) as IUserModel;
    if (!existingUser) {
        const error = customError('The reset token has expired. Please try again@ksm', 'fail', 404, true);
        return next(error);
    }

    const { password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
        const error = customError('Password or confirm password not provided @ksm', 'fail', 400, true);
        return next(error);
    }
    if (password != confirmPassword) {
        const error = customError('Password and confirm password does not match Please try again', 'fail', 400, true);
        return next(error);
    }
    existingUser.resetPasswordToken = undefined;
    existingUser.resetPasswordTokenExpiresAt = undefined;
    existingUser.password = password;
    existingUser.passwordChangedAt = new Date();
    await existingUser.save();

    res.status(200).json({ existingUser });
});
