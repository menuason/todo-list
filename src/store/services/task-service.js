import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksService = createApi({
  reducerPath: 'tasksServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-list-b0c85-default-rtdb.firebaseio.com/',
  }),
  endpoints: (build) => ({
    athor: build.query({
      query: (arg) => 'athor.json',
    }),
  }),
});

export const { useAthorQuery } = tasksService;
