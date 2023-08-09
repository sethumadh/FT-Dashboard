import mongoose, { Schema, Document } from 'mongoose';
import { ITransaction } from './Transaction';

export interface IProduct {
    price: number;
    expense: number;
    transaction: ITransaction;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema = new Schema<IProductModel>(
    {
        price: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        expense: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        transaction: {
            type: mongoose.Types.ObjectId,
            ref: 'Transaction'
        }
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model<IProductModel>('Product', ProductSchema);
export default Product;
