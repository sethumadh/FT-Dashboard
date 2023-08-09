import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "../types"
import { api } from "./api"

export const servicesSliceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "/kpi/kpis",
      
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "/product/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "/transaction/transactions",
      providesTags: ["Transactions"],
    }),
  }),
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  servicesSliceApi
