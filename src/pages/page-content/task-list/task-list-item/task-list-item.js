import './task-list-item.scss';

import { TaskInfo } from '../../../../components/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const TaskListItem = ({ task, onTaskSelect, onDeleteTask, isSelected }) => {
  const handleDeleteTask = (ev) => {
    ev.stopPropagation();
    onDeleteTask();
  }
  return (
    <div
      className={`TaskListItem ${isSelected ? 'isSelected' : ''}`}
      onClick={onTaskSelect}
    >
      <TaskInfo task={task} />

      <IconButton onClick={handleDeleteTask}>
        <Close className="DeleteButton" />
      </IconButton>
    </div>
  );
};
