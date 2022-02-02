import genUid from 'light-uid';

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
    // createTask: (state, { payload }) => {
    //   state.allTasks.push({ uid: genUid(), ...payload });
    // },
    // deleteTask: (state, { payload: uid }) => {
    //   state.allTasks = state.allTasks.filter((task) => task.uid !== uid);
    // },
    deleteTodo: (state, { payload }) => {
      const { taskUid, todoUid } = payload;
      const task = state.allTasks.find((task) => task.uid === taskUid);
      task.todos = task.todos.filter((todo) => todo.uid !== todoUid);
    },
    // createTodo: (state, { payload }) => {
    //   const { taskUid, todoName } = payload;
    //   const task = state.allTasks.find((task) => task.uid === taskUid);
    //   const newTodo = { uid: genUid(), name: todoName, isDone: false };
    //   task.todos.push(newTodo);
    // },
  },
});

export const tasksSlice = {
  ...slice,
};
