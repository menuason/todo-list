import './task-list.scss'
import { TaskListItem } from './task-list-item/task-list-item';
import { Component } from 'react';

export class TaskList extends Component {
  taskList =[
    {
      avatar: 'A',
      title: 'bla',
      description:'blablabla'
    },
    {
      avatar: 'B',
      title: 'kla',
      description:'klaklakla'
    },
    {
      avatar: 'c',
      title: 'vla',
      description:'vlavlavla'
    }
  ]
  render() {

    return (
      <div className="TaskList">
        {
          this.taskList.map((task) => <TaskListItem task={task}/>)
        }
      </div>
    );
  }
}
