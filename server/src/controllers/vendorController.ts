import { NextFunction, Request, Response } from 'express';
import Vendor from '../models/Vendor';

export const getVendor = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const vendor = await Vendor.findById(id);
    res.status(200).json(vendor);
};

export const addStudents = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const vendor = await Vendor.findById(id);

    if (vendor) {
        for (const student of mockStd6) {
            await vendor.studentsEnrolled.push(student);
            await vendor.save();
            console.log(student);
        }
    } else {
        throw new Error('no such vendor');
    }
    res.status(201).json(vendor);
};

const mockStd6 = [
    {
        profileImage: {
            path: 'https://example.com/images/user1.jpg',
            name: 'user1.jpg',
            mimeType: 'image/jpeg',
            _id: '64c39ee2b865ab2124162fdc' // Valid ObjectId as a string
        },
        social: {
            platform: 'twitter'
        },
        savedCourses: ['5f322091b69b0b50c62a66d8', '5f48c61811bb0f43daa39fdb', '5f4dc34e11bb0f43daa3aacc'],
        reseller: true,
        isGuest: false,
        starsAvailable: 3,
        roles: ['student', 'premium'],
        isDeleted: false,
        isActive: true,
        istakeAssisment: true,
        isProfileUpdate: true,
        skills_interested_in_developing: ['JavaScript', 'React', 'Node.js'],
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '$2b$10$ABCDEF1234567890AbCdEfGhIjKlMnOpQrStUvWxYz0123456789',
        qualification: '5f1fb60103e01b4774620fa9',
        intro: "Hello, I'm John Doe. A software developer.",
        mobileNumber: 9876543210,
        gender: 'Male',
        city: 'New York',
        pincode: 10001,
        createdAt: '2021-07-06T12:34:56.789Z',
        updatedAt: '2021-07-06T12:34:56.789Z',
        contentDownloadTime: ['2021-07-06T12:34:56.789Z', '2021-07-06T14:45:23.456Z'],
        _id: '5f43b920578c461327ae8deb' // Valid ObjectId as a string
    },
    {
        profileImage: {
            path: 'https://example.com/images/user2.jpg',
            name: 'user2.jpg',
            mimeType: 'image/jpeg',
            _id: '64c39ee2b865ab2124162fde' // Valid ObjectId as a string
        },
        social: {
            platform: 'facebook'
        },
        savedCourses: ['5f322091b69b0b50c62a66d8'],
        reseller: false,
        isGuest: true,
        starsAvailable: 0,
        roles: ['guest'],
        isDeleted: true,
        isActive: false,
        istakeAssisment: false,
        isProfileUpdate: false,
        skills_interested_in_developing: [],
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: '$2b$10$ZXCVBNM0987654321AsDfGhJkLpOqWeRtYuIx2wVcBn',
        qualification: '5f1fb60103e01b4774620fab',
        intro: "Hi there! I'm Jane Smith, a student.",
        mobileNumber: 1234567890,
        gender: 'Female',
        city: 'Los Angeles',
        pincode: 90001,
        createdAt: '2021-08-15T09:00:00.000Z',
        updatedAt: '2021-09-20T16:30:00.000Z',
        contentDownloadTime: [],
        _id: '5f4dc34e11bb0f43daa3aadd' // Valid ObjectId as a string
    },
    {
        social: {
            platform: 'none'
        },
        savedCourses: [],
        reseller: false,
        isGuest: false,
        starsAvailable: 0,
        roles: [],
        isDeleted: false,
        isActive: true,
        istakeAssisment: false,
        isProfileUpdate: false,
        skills_interested_in_developing: [],
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: '$2b$10$QWErTyU7IOPASDFG123aSdfg4567HJKlZxcvBnm89yui',
        qualification: '5f1fb60103e01b4774620fac',
        createdAt: '2021-09-01T12:00:00.000Z',
        updatedAt: '2021-09-10T18:15:00.000Z',
        contentDownloadTime: [],
        _id: '5f3b643e63c6657afca14c3e' // Valid ObjectId as a string
    },
    {
        profileImage: {
            path: 'https://example.com/images/user4.jpg',
            name: 'user4.jpg',
            mimeType: 'image/jpeg',
            _id: '64c39ee2b865ab2124162fe1' // Valid ObjectId as a string
        },
        social: {
            platform: 'linkedin'
        },
        savedCourses: ['5f48c61811bb0f43daa39fdb', '5f4dc34e11bb0f43daa3aadd'],
        reseller: false,
        isGuest: false,
        starsAvailable: 2,
        roles: ['student', 'premium'],
        isDeleted: false,
        isActive: true,
        istakeAssisment: true,
        isProfileUpdate: true,
        skills_interested_in_developing: ['Python', 'Data Science'],
        name: 'Michael Anderson',
        email: 'michael.anderson@example.com',
        password: '$2b$10$3rFgHyU7asDfghjKlQwErtzXcVbnmy1U2wVcBnXcvb',
        qualification: '5f1fb60103e01b4774620fad',
        intro: "Hello, I'm Michael Anderson, a data scientist.",
        mobileNumber: 9876543210,
        gender: 'Male',
        city: 'Chicago',
        pincode: 60601,
        createdAt: '2021-10-15T11:11:11.111Z',
        updatedAt: '2021-10-20T15:15:15.555Z',
        contentDownloadTime: ['2021-10-15T11:11:11.111Z', '2021-10-20T15:15:15.555Z'],
        _id: '5f4dc34e11bb0f43daa3aade' // Valid ObjectId as a string
    },
    {
        social: {
            platform: 'none'
        },
        savedCourses: ['5f322091b69b0b50c62a66d8', '5f4dc34e11bb0f43daa3aade'],
        reseller: true,
        isGuest: false,
        starsAvailable: 1,
        roles: ['student'],
        isDeleted: false,
        isActive: true,
        istakeAssisment: true,
        isProfileUpdate: false,
        skills_interested_in_developing: ['JavaScript', 'React', 'TypeScript'],
        name: 'Emily Wilson',
        email: 'emily.wilson@example.com',
        password: '$2b$10$9yuiJHGFASDFGbnmlKwErtyuZXcVbWxYzvCzr4aq5',
        qualification: '5f1fb60103e01b4774620fae',
        createdAt: '2021-11-25T08:08:08.888Z',
        updatedAt: '2021-12-01T09:09:09.999Z',
        contentDownloadTime: ['2021-11-25T08:08:08.888Z', '2021-12-01T09:09:09.999Z'],
        _id: '5f43b920578c461327ae8ded' // Valid ObjectId as a string
    },
    {
        profileImage: {
            path: 'https://example.com/images/user6.jpg',
            name: 'user6.jpg',
            mimeType: 'image/jpeg',
            _id: '64c39ee2b865ab2124162fe4' // Valid ObjectId as a string
        },
        social: {
            platform: 'twitter'
        },
        savedCourses: [],
        reseller: false,
        isGuest: false,
        starsAvailable: 0,
        roles: [],
        isDeleted: false,
        isActive: true,
        istakeAssisment: false,
        isProfileUpdate: false,
        skills_interested_in_developing: ['Java', 'Spring Boot'],
        name: 'Daniel Smith',
        email: 'daniel.smith@example.com',
        password: '$2b$10$5tgbHGFaSDFghKLqWeRtYXCvbnm89yUiuHJKlZxc',
        qualification: '5f1fb60103e01b4774620faf',
        createdAt: '2022-01-10T10:10:10.101Z',
        updatedAt: '2022-02-20T12:12:12.121Z',
        contentDownloadTime: [],
        _id: '5f4dc34e11bb0f43daa3aadf' // Valid ObjectId as a string
    }
];
