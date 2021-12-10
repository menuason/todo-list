import './task-list.scss';
import { TaskListItem } from './task-list-item';
import { Component } from 'react';

export class TaskList extends Component {
  taskList = [
    {
      avatar: 'A',
      title: 'bla',
      description: 'blablabla',
      todos: [
        {
          name: 'wash the dishes',
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
  ];

  render() {

    return (
      <div className="TaskList">
        {
          this.taskList.map((task) => <TaskListItem task={task} />)
        }
      </div>
    );
  }
}
