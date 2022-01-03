const { createSlice } = require('@reduxjs/toolkit');

const getInitialState = () => {
  return {
    allTasks: JSON.parse(localStorage.getItem('taskList')) ?? [],
  };
};


const slice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    createTask: (state, { payload }) => {
      state.allTasks.push(payload);
    },
    deleteTask: (state, { payload: index }) => {
      state.allTasks.splice(index, 1);
    },
    deleteTodo: (state, { payload }) => {
      const { taskIndex, todoIndex } = payload;
      state.allTasks[taskIndex].todos.splice(todoIndex, 1);
    },
    createTodo: (state, { payload }) => {
      const { todoName, taskIndex } = payload;
      const newTodo = { name: todoName, isDone: false };
      state.allTasks[taskIndex].todos.push(newTodo);
    },

  }
});

const selectors = {
  selectAll: (state) => state.tasks.allTasks,
  selectByIndex: (state, index) => state.tasks.allTasks[index],
};

export const tasksSlice = {
  ...slice,
  selectors,
};
