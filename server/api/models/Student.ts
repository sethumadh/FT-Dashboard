import mongoose, { Schema, Document } from 'mongoose';
interface IProfileImage {
    path: string;
    name: string;
    mimeType: string;
}

interface ISocial {
    platform: string;
}

interface IBasicDetails {
    profileImage: IProfileImage;
    social: ISocial;
    savedCourses: string[]; // Array of course IDs (assuming course IDs are strings)
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
    qualification: string; // Assuming qualification ID is a string
    intro: string;
    mobileNumber: number;
    gender: string;
    city: string;
    pincode?: number;
    createdAt: Date;
    updatedAt: Date;
    contentDownloadTime: string[]; // Array of date strings for content download times
}

// Define the profileImage schema
const profileImageSchema = new mongoose.Schema<IProfileImage>({
    path: { type: String },
    name: { type: String },
    mimeType: { type: String }
});

// Define the social schema
const socialSchema = new mongoose.Schema({
    platform: { type: String, required: true }
});

const BasicDetailsSchema = new mongoose.Schema<IBasicDetails>({
    profileImage: profileImageSchema,
    social: socialSchema,
    savedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    reseller: { type: Boolean },
    isGuest: { type: Boolean },
    starsAvailable: { type: Number },
    roles: [{ type: String }],
    isDeleted: { type: Boolean },
    isActive: { type: Boolean },
    istakeAssisment: { type: Boolean },
    isProfileUpdate: { type: Boolean },
    skills_interested_in_developing: [{ type: String }],
    name: { type: String },
    email: { type: String },
    qualification: { type: String },
    intro: { type: String },
    mobileNumber: { type: Number },
    gender: { type: String },
    city: { type: String },
    pincode: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    contentDownloadTime: [String]
});
// **************** courses schema ans typescript

interface IFile {
    name: string;
    mimeType: string;
    path?: string;
}

interface IQuizQuestion {
    id: string;
    options: { option: string }[];
    question: string;
    answer: string;
}

interface IContent {
    id: string;
    timeRequired: number;
    isDownloadable: boolean;
    isUnlocked: boolean;
    isDeleted: boolean;
    file?: IFile;
    quizQuestions: IQuizQuestion[];
    name: string;
    type: string;
    timestamp: number;
    status: string;
    isCompleted: boolean;
    quizAnswers: { id: string; isAnswered: boolean; answer: string }[];
    contentId: string;
    lastAccess?: string;
    startTime?: string;
    completedTime?: string;
}

interface IChapter {
    id: string;
    timeRequired: number;
    isMandatory: boolean;
    isDeleted: boolean;
    name: string;
    status: string;
    isCompleted: boolean;
    completedContent: IContent[];
    chapterId: string;
    startTime?: string;
    completedTime?: string;
}

interface ICourse {
    name: string;
    slug: string;
    _id: string;
    currentPrice: number;
    currentDiscount: number;
    category: string;
    isActive: boolean;
    isDeleted: boolean;
    language: string;
    offerText: string | null;
    thumbnail: string;
}

export interface IPurchase {
    purchasedOn: string;
    status: boolean;
    isCompleted: boolean;
    isPaidCourse: boolean;
    course: ICourse;
    completedChapters: IChapter[];
}

const fileSchema = new Schema<IFile>({
    name: { type: String },
    mimeType: { type: String },
    path: { type: String }
});

const quizQuestionSchema = new Schema<IQuizQuestion>({
    id: { type: String },
    options: [{ option: { type: String } }],
    question: { type: String },
    answer: { type: String }
});

const contentSchema = new Schema<IContent>({
    id: { type: String },
    timeRequired: { type: Number },
    isDownloadable: { type: Boolean },
    isUnlocked: { type: Boolean },
    isDeleted: { type: Boolean },
    file: { type: fileSchema },
    quizQuestions: { type: [quizQuestionSchema] },
    name: { type: String },
    type: { type: String },
    timestamp: { type: Number },
    status: { type: String },
    isCompleted: { type: Boolean },
    quizAnswers: [{ id: { type: String }, isAnswered: { type: Boolean }, answer: { type: String } }],
    contentId: { type: String },
    lastAccess: { type: String },
    startTime: { type: String },
    completedTime: { type: String }
});

const chapterSchema = new Schema<IChapter>({
    id: { type: String },
    timeRequired: { type: Number },
    isMandatory: { type: Boolean },
    isDeleted: { type: Boolean },
    name: { type: String },
    status: { type: String },
    isCompleted: { type: Boolean },
    completedContent: { type: [contentSchema] },
    chapterId: { type: String },
    startTime: { type: String },
    completedTime: { type: String }
});

const courseSchema = new Schema<ICourse>({
    name: { type: String },
    slug: { type: String },
    _id: { type: String },
    currentPrice: { type: Number },
    currentDiscount: { type: Number },
    category: { type: String },
    isActive: { type: Boolean },
    isDeleted: { type: Boolean },
    language: { type: String },
    offerText: { type: String },
    thumbnail: { type: String }
});

export const purchaseSchema = new Schema<IPurchase>({
    purchasedOn: { type: String },
    status: { type: Boolean },
    isCompleted: { type: Boolean },
    isPaidCourse: { type: Boolean },
    course: { type: courseSchema },
    completedChapters: { type: [chapterSchema] }
});

// **************** courses schema ans typescript

// **************** StudentCourses schema ans typescript
export interface IStudentCourses {
    basicDetails: IBasicDetails;
    courses: IPurchase[];
}
export interface IStudentCoursesModel extends IStudentCourses, Document {}

const StudentCoursesSchema = new Schema<IStudentCoursesModel>({
    basicDetails: BasicDetailsSchema,
    courses: [purchaseSchema]
});

const StudentCourses = mongoose.model<IStudentCoursesModel>('StudentCourse', StudentCoursesSchema);
export default StudentCourses;

// **************** StudentCourses schema ans typescript
