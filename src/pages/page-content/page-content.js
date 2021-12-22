import './page-content.scss';
import { TaskList } from './task-list';
import { TaskDetails } from './task-list/task-details';
import { Component } from 'react';
import { CreateTaskForm } from './create-task-form/create-task-form';
import { AddTaskCard } from './todo-list/add-task-card/add-task-card';

export class PageContent extends Component {
  state = {
    isEditMode: false,
    taskList: JSON.parse(localStorage.getItem('taskList')) ?? [],
    selectedTaskIndex: null,
  };


  render() {
    // console.log(this.state);

    const handleTaskSelect = (ind) => {
      this.setState({ selectedTaskIndex: ind });
    };

    const handleNewTodo = (description) => {
      if (description === '') {
        return;
      }

      const newTodo = { name: description, isDone: false };
      const newTaskList = [...this.state.taskList];

      newTaskList[this.state.selectedTaskIndex].todos = [...newTaskList[this.state.selectedTaskIndex].todos, newTodo];

      this.setState({ taskList: newTaskList });
    };

    const handleNewTask = (task) => {
      const newTaskList = [...this.state.taskList, task];
      this.setState({ taskList: newTaskList });
      localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    const handleShowCreateForm = () => {
      this.setState({ isEditMode: true });
      this.setState({ selectedTaskIndex: null });
    };

    const handleHideCreateForm = () => {
      this.setState({ isEditMode: false });
    };

    const handleDeleteTodo = (todoIndex) => {
      const selectedTask = this.state.taskList[this.state.selectedTaskIndex];
      selectedTask.todos = selectedTask.todos.filter((todo, ind) => ind !== todoIndex);
      const newTaskList = this.state.taskList;
      this.setState({ taskList: newTaskList });
      localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    const handleDeleteTask = (index) => {
      const selectedTask = this.state.taskList[index];
      const newTaskList = this.state.taskList.filter((task) => task !== selectedTask);

      this.setState({ taskList: newTaskList });
      localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    return (
      <div className="PageContent">
        <div className="TaskListContainer">

          <AddTaskCard onClick={handleShowCreateForm} />
          <TaskList
            taskList={this.state.taskList}
            selectedTaskId={this.state.selectedTaskIndex}
            onTaskSelect={handleTaskSelect}
            onDeleteTask={handleDeleteTask}
          />
        </div>
        {
          !!this.state.taskList[this.state.selectedTaskIndex] ? (
            <TaskDetails
              selectedTask={this.state.taskList[this.state.selectedTaskIndex]}
              onNewTodo={handleNewTodo}
              onDeleteTodo={(ind) => handleDeleteTodo(ind)}
            />
          ) : (
            (this.state.isEditMode &&
              <CreateTaskForm
                taskList={this.state.taskList}
                onAddTask={handleNewTask}
                onHideForm={handleHideCreateForm}
              />
            )
          )
        }
      </div>
    );
  }
}
