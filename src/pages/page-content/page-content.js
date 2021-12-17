import './page-content.scss';
import { TaskList } from './task-list';
import { TaskDetails } from './task-list/task-details';
import { Component } from 'react';
import { CreateTaskForm } from './create-task-form/create-task-form';
import { AddTaskCard } from './todo-list/add-task-card/add-task-card';

export class PageContent extends Component {
  state = {
    isEditMode: false,
    // taskList: [
    //   {
    //     avatar: 'A',
    //     title: 'bla',
    //     description: 'blablabla',
    //     todos: [
    //       {
    //         name: 'wash the dishes1',
    //         isDone: false,
    //       },
    //       {
    //         name: 'wash the dishes2',
    //         isDone: false,
    //       },
    //     ],
    //   },
    //   {
    //     avatar: 'B',
    //     title: 'kla',
    //     description: 'klaklakla',
    //     todos: [
    //       {
    //         name: 'wash the dishes',
    //         isDone: false,
    //       },
    //     ],
    //   },
    //   {
    //     avatar: 'c',
    //     title: 'vla',
    //     description: 'vlavlavla',
    //     todos: [
    //       {
    //         name: 'wash the dishes',
    //         isDone: false,
    //       },
    //     ],
    //   },
    // ],
    taskList: JSON.parse(localStorage.getItem('taskList')) ?? [],
    selectedTask: null,
  };

  render() {
    // console.log(this.state);

    const handleTaskSelect = (ind) => {
      this.setState({ selectedTask: ind });
    };

    const handleNewTodo = (description) => {
      if (description === '') {
        return;
      }

      const newTodo = { name: description, isDone: false };
      const newTaskList = [...this.state.taskList];

      newTaskList[this.state.selectedTask].todos = [...newTaskList[this.state.selectedTask].todos, newTodo];

      this.setState({ taskList: newTaskList });
    };

    const handleNewTask = (task) => {
      const newTaskList = [...this.state.taskList, task];
      this.setState({ taskList: newTaskList });
      localStorage.setItem('taskList', JSON.stringify(newTaskList));
    };

    const handleShowCreateForm = () => {
      this.setState({ isEditMode: true });
    };

    const handleHideCreateForm = () => {
      this.setState({isEditMode: false});
    }

    return (
      <div className="PageContent">
        <div className="TaskListContainer">

          <AddTaskCard onClick={handleShowCreateForm}/>
          <TaskList
            taskList={this.state.taskList}
            selectedTaskId={this.state.selectedTask}
            onTaskSelect={handleTaskSelect}
          />
        </div>
        {
          this.state.selectedTask ? (
            <TaskDetails
              selectedTask={this.state.taskList[this.state.selectedTask]}
              onNewTodo={handleNewTodo}
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
