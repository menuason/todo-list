import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksService = createApi({
  reducerPath: 'tasksService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-list-b0c85-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['tasks'],
  endpoints: (build) => ({
    fetchTaskList: build.query({
      query: () => 'tasks.json',

      providesTags: ['tasks'],
    }),
    createTask: build.mutation({
      query: (task) => ({
        url: `tasks/${task.uid}.json`,
        method: 'PUT',
        body: {
          ...task,
          todos: task.todos?.reduce((result, todo) => ({
            ...result,
            [todo.uid]: todo
          }), {}),
        },
      }),
      invalidatesTags: ['tasks'],
    }),
    deleteTask: build.mutation({
      query: (taskUid) => ({
        url: `tasks/${taskUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks'],
    }),
    createTodo: build.mutation({
      query: ({ todo, taskUid }) => ({
        url: `tasks/${taskUid}/todos/${todo.uid}.json`,
        method: 'PUT',
      }),
      invalidatesTags: ['tasks'],
    }),
    deleteTodo: build.mutation({
      query: ({ todoUid, taskUid }) => ({
        url: `tasks/${taskUid}/todos/${todoUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useFetchTaskListQuery,
  useDeleteTaskMutation,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} = tasksService;
