import './task-list.scss';
import { TaskListItem } from './task-list-item';

export const TaskList = ({ taskList, onTaskSelect, selectedTaskId, onDeleteTask }) => {
  return (
    <div className="TaskList">
      {
        taskList.map((task, ind) =>
          <TaskListItem
            key={ind}
            task={task}
            isSelected={ind === selectedTaskId}
            onTaskSelect={() => onTaskSelect(ind)}
            onDeleteTask={() => onDeleteTask(ind)}
          />,
        )
      }
    </div>
  );
};
