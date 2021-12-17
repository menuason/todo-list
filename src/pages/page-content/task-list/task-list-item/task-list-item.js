import './task-list-item.scss';
import { TaskInfo } from '../../../../components/task-info';

export const TaskListItem = ({ task, onTaskSelect, isSelected }) => {

  return (
    <div
      className={`TaskListItem ${isSelected ? 'isSelected' : ''}`}
      onClick={() => onTaskSelect()}
    >
      <TaskInfo task={task} />
    </div>

  );
};
