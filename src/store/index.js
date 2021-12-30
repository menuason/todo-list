import { configureStore } from '@reduxjs/toolkit';

const getInitialState = () => {
  return {
    taskList: JSON.parse(localStorage.getItem('taskList')) ?? [],
  };
};

export const actions = {
  deleteTask: 'DELETE_TASK',
  createTask: 'CREATE_TASK',
  deleteTodo: 'DELETE_TODO',
  createTodo: 'CREATE_TODO',
};

export const store = configureStore({
  reducer: (state, action) => {
    if (!state) {
      return getInitialState();
    }

    switch (action.type) {
      case actions.deleteTask: {
        const index = action.payload;
        const selectedTask = state.taskList[index];
        const newTaskList = state.taskList.filter((task) => task !== selectedTask);
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
        return {
          ...state,
          taskList: newTaskList,
        };
      }

      case actions.createTask: {
        console.log(action.payload);
        const newTask = action.payload;
        const newTaskList = [...state.taskList, newTask];
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
        return {
          ...state,
          taskList: newTaskList,
        };
      }

      case actions.deleteTodo: {
        console.log(action.payload);
        const { taskIndex, todoIndex } = action.payload;
        const selectedTask = state.taskList[taskIndex];
        selectedTask.todos = selectedTask.todos.filter((todo, ind) => ind !== todoIndex);
        const newTaskList = [...state.taskList];

        // localStorage.setItem('taskList', JSON.stringify(newTaskList));
        return {
          ...state,
          taskList: newTaskList,
        };
      }

      case actions.createTodo: {
        const { todoName, taskIndex } = action.payload;
        const newTodo = { name: todoName, isDone: false };
        const newTaskList = [...state.taskList];

        newTaskList[taskIndex].todos = [...newTaskList[taskIndex].todos, newTodo];
        return {
          ...state,
          taskList: newTaskList,
        };
      }

      default:
        return state;
    }
  },
});
