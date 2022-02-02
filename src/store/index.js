import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './slices/tasks.slice';
import { tasksService } from './services/task-service';

export const store = configureStore({
  reducer: {
    [tasksService.reducerPath]: tasksService.reducer,
    tasks: tasksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => ([
    ...getDefaultMiddleware(),
    tasksService.middleware,
  ]),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('taskList', JSON.stringify(state.tasks.allTasks));
});

export {
  tasksSlice,
};
