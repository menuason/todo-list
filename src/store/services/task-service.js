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
    createTask: build.mutation({
      query: (task) => ({
        url: `tasks/${task.uid}.json`,
        method:'PUT',
        body: task,
      }),
    })
  }),
});

export const { useAthorQuery, useCreateTaskMutation } = tasksService;
