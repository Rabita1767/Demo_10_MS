import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.10minuteschool.com/discovery-service/api/v1/products/',
  }),
  endpoints: (builder) => ({
    getIeltsCourse: builder.query<any, void>({
      query: () => 'ielts-course',
    }),
  }),
});

export const { useGetIeltsCourseQuery } = productsApi;
