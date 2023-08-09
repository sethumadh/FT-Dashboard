import mongoose, { Schema, Document } from 'mongoose';

// }

// Define the profileImage schema
interface IProfileImage {
    path: string;
    name: string;
    mimeType: string;
}
// Define the student schema
export interface IStudent {
    profileImage?: IProfileImage;
    social: {
        platform: string;
    };
    savedCourses: string[];
    reseller: boolean;
    isGuest: boolean;
    starsAvailable: number;
    roles: string[];
    isDeleted: boolean;
    isActive: boolean;
    istakeAssisment: boolean;
    isProfileUpdate: boolean;
    skills_interested_in_developing: string[];

    name: string;
    email: string;
    password: string;
    qualification: string;
    intro?: string;
    mobileNumber?: number;
    gender?: string;
    city?: string;
    pincode?: number;
    createdAt?: string;
    updatedAt?: string;

    contentDownloadTime?: string[];
}

// Define the main schema
export interface IVendorDetailDocument extends Document {
    studentsEnrolled: IStudent[];
    contactNumber: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    name: string;
}

export interface IVendorDetailModel extends IVendorDetailDocument, Document {}
const ProfileSchema = new Schema<IProfileImage>({ path: String, name: String, mimeType: String });
const StudentSchema = new Schema<IStudent>({
    profileImage: ProfileSchema,
    social: {
        platform: String
    },
    savedCourses: [String],
    reseller: Boolean,
    isGuest: Boolean,
    starsAvailable: Number,
    roles: [String],
    isDeleted: Boolean,
    isActive: Boolean,
    istakeAssisment: Boolean,
    isProfileUpdate: Boolean,
    skills_interested_in_developing: [String],
    name: String,
    email: String,
    password: String,
    qualification: String,
    intro: String,
    mobileNumber: Number,
    gender: String,
    city: String,
    pincode: Number,
    createdAt: String,
    updatedAt: String,
    contentDownloadTime: [String]
});

const VendorSchema = new Schema<IVendorDetailModel>({
    studentsEnrolled: [StudentSchema],
    contactNumber: String,
    createdAt: String,
    updatedAt: String,
    email: String,
    name: String
});
const Vendor = mongoose.model<IVendorDetailModel>('Vendor', VendorSchema)
export default Vendor
