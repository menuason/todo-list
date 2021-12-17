import './page-content.scss';
import { TaskList } from './task-list';
import { TaskDetails } from './task-list/task-details';
import { Component } from 'react';

export class PageContent extends Component {
  state = {
    isEditMode: true,
    taskList: [
      {
        avatar: 'A',
        title: 'bla',
        description: 'blablabla',
        todos: [
          {
            name: 'wash the dishes1',
            isDone: false,
          },
          {
            name: 'wash the dishes2',
            isDone: false,
          },
        ],
      },
      {
        avatar: 'B',
        title: 'kla',
        description: 'klaklakla',
        todos: [
          {
            name: 'wash the dishes',
            isDone: false,
          },
        ],
      },
      {
        avatar: 'c',
        title: 'vla',
        description: 'vlavlavla',
        todos: [
          {
            name: 'wash the dishes',
            isDone: false,
          },
        ],
      },
    ],
    selectedTask: 0,
  };

  render() {
    console.log(this.state);

    const handleTaskSelect = (ind) => {
      this.setState({ selectedTask: ind });
    };

    const handleNewTodo = (description) => {
      const newTodo = { name: description, isDone: false };
      const newTaskList = [...this.state.taskList];

      newTaskList[this.state.selectedTask].todos = [...newTaskList[this.state.selectedTask].todos, newTodo];
      // this.setState({ taskList: newTaskList[this.state.selectedTask].todos.concat(newTodo) });
      // this.setState({ taskList: [...newTaskList[this.state.selectedTask].todos, newTodo] });

      this.setState({ taskList: newTaskList });
    };


    return (
      <div className="PageContent">
        <TaskList
          taskList={this.state.taskList}
          selectedTaskId={this.state.selectedTask}
          onTaskSelect={handleTaskSelect}
        />
        <TaskDetails
          selectedTask={this.state.taskList[this.state.selectedTask]}
          onNewTodo={handleNewTodo}
        />
      </div>
    );
  }
}
