import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from './Product';
export interface ITransaction {
    buyer: string;
    amount: number;
    productIds: IProduct;
}

export interface ITransactionModel extends ITransaction, Document {}

const TransactionSchema = new Schema<ITransaction >(
    {
        buyer: {
            type: String,
            required: true
        },
        amount: {
            type:Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v * 100

        },
        productIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model<ITransactionModel>('Transaction', TransactionSchema);

export default Transaction;
