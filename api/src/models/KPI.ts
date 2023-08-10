import mongoose, { Schema, Document } from 'mongoose';

export interface IDay {
    date: string;
    revenue: number;
    expenses: number;
}
export interface IMonth {
    month: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
}
export interface IKPI {
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: Map<string, number>;
    monthlyData: IMonth[];
    dailyData: IDay[];
}

export interface IKPIModel extends IKPI, Document {}

const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        expenses: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        }
    },
    { toJSON: { getters: true } }
);

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        expenses: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        operationalExpenses: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        nonOperationalExpenses: {
            type: Number,
            set: (v: string) => parseFloat(v.replace('$', '')),
            currency: 'USD',
            get: (v: number) => v / 100
        }
    },
    { toJSON: { getters: true } }
);

const KPISchema = new Schema<IKPIModel>(
    {
        totalProfit: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        totalRevenue: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        totalExpenses: {
            type: Number,
            currency: 'USD',
            set: (v: string) => parseFloat(v.replace('$', '')),
            get: (v: number) => v / 100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: Number,
                currency: 'USD',
                set:(v:string)=>parseFloat(v.replace("$","")),
                get: (v: number) => v / 100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema]
    },
    { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model<IKPIModel>('KPI', KPISchema);

export default KPI;
