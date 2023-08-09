import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { YourRootState } from 'redux/types';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:1337',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as YourRootState).user.accessToken; // Step 2: Get the accessToken from the Redux store
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});


export const api = createApi({
  baseQuery,
  tagTypes: ['User',"Kpis", "Products", "Transactions"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});