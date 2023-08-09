import { Express } from 'express-serve-static-core';

import { IUserModel } from './src/models/User';
//  This same code I have reproduced on the files that required an extended req.user is required
declare module 'express-serve-static-core' {
    interface Request {
        user?: IUserModel;
    }
}
