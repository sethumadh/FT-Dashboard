import mongoose, { Schema, Document } from 'mongoose';
import crypto from 'crypto';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import { customError } from '../utils/customError';

enum Team {
    Yellow = 'yellow',
    Blue = 'blue',
    Green = 'green',
    Red = 'red'
}
enum Roles {
    User = 'user',
    Admin = 'admin',
    Dev = 'dev'
}
export interface IUser {
    name: string;
    email: string;
    photo?: string;
    password: string;
    role: string;
    age?: number;
    team?: Team;
    passwordChangedAt?: Date;
    resetPasswordToken?: string;
    resetPasswordTokenExpiresAt?: Date;
    comparePassword: (password: string, dbPassword: string) => boolean;
    isPasswordChanged: (psw: Date, jwtIat: string) => boolean;
    createResetPasswordToken: () => string;
}
export interface IUserModel extends IUser, Document {}

const UserSchema = new Schema<IUserModel>({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please Enter an email'],
        validate: [validator.isEmail, 'Please enter a valid Email']
    },
    photo: String,
    role: { type: String, enum: [Roles.Admin, Roles.User, Roles.Dev], default: Roles.User },
    age: {
        type: Number,
        min: [5, 'age must be more than 5'],
        max: [90, 'age must be less than 90'],
        select: false
    },
    password: {
        type: String,
        required: [true, 'Enter a password'],
        minlength: [3, 'Password must be minimum 3 characters'],
        select: false
    },
    passwordChangedAt: { type: Date, select: false },
    team: {
        type: String,
        // required: [1, 'Atleast one team is required'],
        enum: { values: [Team.Blue, Team.Yellow, Team.Red, Team.Green], message: 'no such team exists @ksm' }
    },
    resetPasswordToken: { type: String, select: false },
    resetPasswordTokenExpiresAt: { type: Date }
});
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    //hash the password  using then/catch
    // bcrypt
    //     .hash(this.password, 12)
    //     .then((hash) => {
    //         this.password = hash;
    //         this.passwordChangedAt = new Date();
    //         // this.confirmPassword= undefined // this is done so that the confirmPassword is not stored in the database
    //         return next();
    //     })
    //     .catch((err) => {
    //         const error = customError(`Hashing of password did not happend because of bcrypt error @ksm`, 'fail', 400, true);
    //         return next(error);
    //     });

    // hash with await
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.passwordChangedAt = new Date();
    return next();
});
UserSchema.methods.comparePassword = async function (password: string, dbPassword: string) {
    return await bcrypt.compare(password, dbPassword);
};
UserSchema.methods.isPasswordChanged = async function (psw: Date, jwtIat: number) {
    const temp = psw.getTime();
    const pswdChgdTime = parseInt((temp / 1000).toFixed(0));

    return pswdChgdTime > jwtIat ? true : false;
};

UserSchema.methods.createResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordTokenExpiresAt = Date.now() + 10 * 60 * 1000;
    return resetToken;
};
const User = mongoose.model<IUserModel>('User', UserSchema);
export default User;
