// interface IObjectKeys {
//   [key: string]: string | number
// }
// types.ts

// Define the interface for the root state of your Redux store
export interface YourRootState {
  user: {
    accessToken: string;
    // Add other properties of the user slice if any
  };
  // Add other slices of the state if any
}

export interface ExpensesByCategory {
  salaries: number
  supplies: number
  services: number
}

export interface Month {
  id: string
  month: string
  revenue: number
  expenses: number
  nonOperationalExpenses: number
  operationalExpenses: number
}

export interface Day {
  id: string
  date: string
  revenue: number
  expenses: number
}

export interface GetKpisResponse {
  id: string
  _id: string
  __v: number
  totalProfit: number
  totalRevenue: number
  totalExpenses: number
  expensesByCategory: ExpensesByCategory
  monthlyData: Array<Month>
  dailyData: Array<Day>
  createdAt: string
  updatedAt: string
}

export interface GetProductsResponse {
  id: string
  _id: string
  __v: number
  price: number
  expense: number
  transactions: Array<string>
  createdAt: string
  updatedAt: string
}

export interface GetTransactionsResponse {
  id: string
  _id: string
  __v: number
  buyer: string
  amount: number
  productIds: Array<string>
  createdAt: string
  updatedAt: string
}

export interface User {
  _id:string
  name?: string
  email: string
  password: string
}

export interface LoginUser {
  email: string
  password: string
}
