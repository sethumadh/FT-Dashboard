import express, { Express, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { corsOptions, config } from './src/config/config';
import kpiRoutes from './src/routes/kpi';
import productRoutes from './src/routes/products';
import transactionRoutes from './src/routes/transaction';
import authRoutes from './src/routes/auth';
import vendorRoutes from './src/routes/vendor';
import studentCourseRoutes from './src/routes/studentCourse';
import KPI from './src/models/KPI';
import Product from './src/models/Product';
import Transaction from './src/models/Transaction';
import { Vendor2, vendor, vendor1 } from './src/data/VendorData';
import Vendor from './src/models/Vendor';
import { kpis, products, transactions } from './src/data/data';
import { Err } from './src/types/type';
import { globalErrorHandler } from './src/controllers/errorController';
import { customError } from './src/utils/customError';
import StudentCourses from './src/models/Student';
import { Rohit } from './src/data/mockRohit';
import path from 'path';
import cookieParser from 'cookie-parser';

const url = ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];
const origin = process.env.NODE_ENV === 'development' ? ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'] : ['https://ft-dashboard-app.onrender.com','http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];

const app = express();
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: origin,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        optionsSuccessStatus: 200
    })
);
//******************************* */
// app.use(cors(corsOptions));
// app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.header('Access-Control-Allow-Credentials', 'true');

//     if (req.method == 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }

//     next();
// });

//*********************************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// unhandled exception Error
process.on('uncaughtException', (err: Err) => {
    console.log('->>>>', err.name, err.message);
    console.log('uncaughtException! shutting down.. @ksm');

    process.exit(1);
});

//Routes
app.use('/api/kpi', kpiRoutes);
app.use('/api/product', productRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/users', authRoutes);
app.use('/api/vendor', vendorRoutes);
app.use('/api/student-course', studentCourseRoutes);

// Server frontend static assets and handle catch-all route
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist/index.html')));
    app.get('*', (req: Request, res: Response) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
}

// catch all other invalid url for page not found

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    // ************** -->> resubale / or use a class customerError
    const error = customError(`cant find ${req.originalUrl}`, 'fail', 404, true);
    next(error);
});

// Global Error handler middleware
app.use(globalErrorHandler);

mongoose.connect(`${config.mongo.url}/admin_dash`, { retryWrites: true, w: 'majority' }).then(async () => {
    console.log('Mongo connected successfully.');
    // const server = app.listen(config.server.port, () => console.log(`Server Port: http://localhost:${config.server.port}`));
    // Add data one time only
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);

    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
    // Vendor.insertMany(Vendor2);
    // Vendor.insertMany(vendor);
    // Vendor.insertMany(vendor1);

    // StudentCourses.insertMany(Rohit);
});

const server = app.listen(config.server.port, () => console.log(`Server Port: http://localhost:${config.server.port}`));

// unhandled promise rejection
process.on('unhandledRejection', (err: Err) => {
    console.log('->>>>', err.name, err.message);
    console.log('unhandled rejection! shutting down.. @ksm');

    server.close(() => {
        process.exit(1);
    });
});


