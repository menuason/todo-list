import './task-list.scss';
import { TaskListItem } from './task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../../store';

export const TaskList = ({ onTaskSelect, selectedTaskIndex }) => {
  const taskList = useSelector(tasksSlice.selectors.selectAll);

  return (
    <div className="TaskList">
      {
        taskList.map((task, ind) => (
          <TaskListItem
            key={ind}
            task={task}
            index={ind}
          />
        ))
      }
    </div>
  );
};
