import './task-list.scss';
import { TaskListItem } from './task-list-item';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store';

export const TaskList = ({ taskList, onTaskSelect, selectedTaskIndex }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch({ type: actions.deleteTask, payload: index });
  };

  return (
    <div className="TaskList">
      {
        taskList.map((task, ind) =>
          <TaskListItem
            key={ind}
            task={task}
            isSelected={ind === selectedTaskIndex}
            onTaskSelect={() => onTaskSelect(ind)}
            onDeleteTask={() => handleDeleteTask(ind)}
          />,
        )
      }
    </div>
  );
};
