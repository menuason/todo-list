import './task-list-item.scss';
import { TaskInfo } from '../../../../components/task-info';

export const TaskListItem = ({ task }) => {

  return (
    <div className="TaskListItem">
      <TaskInfo task={task} />
    </div>

  );
};
