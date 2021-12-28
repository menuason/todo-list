import './page-content.scss';
import { TaskList } from './task-list';
import { TaskDetails } from './task-list/task-details';
import { useState } from 'react';
import { CreateTaskForm } from './create-task-form';
import { AddTaskCard } from './todo-list/add-task-card';

export const PageContent = () => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) ?? []);

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);


  const handleTaskSelect = (ind) => {
    setSelectedTaskIndex(ind);
  };

  const handleNewTodo = (description) => {
    if (description === '') {
      return;
    }

    const newTodo = { name: description, isDone: false };
    const newTaskList = [...taskList];

    newTaskList[selectedTaskIndex].todos = [...newTaskList[selectedTaskIndex].todos, newTodo];

    setTaskList(newTaskList);
  };

  const handleNewTask = (task) => {
    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  const handleShowCreateForm = () => {
    setIsEditMode(true);
    setSelectedTaskIndex(null);
  };

  const handleHideCreateForm = () => {
    setIsEditMode(false);
  };

  const handleDeleteTodo = (todoIndex) => {
    const selectedTask = taskList[selectedTaskIndex];
    selectedTask.todos = selectedTask.todos.filter((todo, ind) => ind !== todoIndex);
    const newTaskList = taskList;
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  const handleDeleteTask = (index) => {
    const selectedTask = taskList[index];
    const newTaskList = taskList.filter((task) => task !== selectedTask);
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  return (
    <div className="PageContent">
      <div className="TaskListContainer">

        <AddTaskCard onClick={handleShowCreateForm} />
        <TaskList
          taskList={taskList}
          selectedTaskId={selectedTaskIndex}
          onTaskSelect={handleTaskSelect}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      {
        !!taskList[selectedTaskIndex] ? (
          <TaskDetails
            selectedTask={taskList[selectedTaskIndex]}
            onNewTodo={handleNewTodo}
            onDeleteTodo={(ind) => handleDeleteTodo(ind)}
          />
        ) : (
          isEditMode && (
            <CreateTaskForm
              taskList={taskList}
              onAddTask={handleNewTask}
              onHideForm={handleHideCreateForm}
            />
          )
        )
      }
    </div>
  );
};
