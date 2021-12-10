import './page-content.scss';
import { TaskList } from './task-list';
import { TaskDetails } from './task-list/task-details';
import { Component } from 'react';

export class PageContent extends Component {
  state = {
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

    const onTaskSelect = (ind) => {
      this.setState({ selectedTask: ind });
    };

    return (
      <div className="PageContent">
        <TaskList
          taskList={this.state.taskList}
          handleTaskSelect={onTaskSelect}
          selectedTaskId={this.state.selectedTask}
        />
        <TaskDetails selectedTask={this.state.taskList[this.state.selectedTask]} />
      </div>
    );
  }
}
