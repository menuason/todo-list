import './task-list.scss';
import { TaskListItem } from './task-list-item';

export const TaskList = ({ taskList, handleTaskSelect, selectedTaskId }) => {

  return (
    <div className="TaskList">
      {
        taskList.map((task, ind) =>
          <TaskListItem
            key={ind}
            task={task}
            isSelected={ind === selectedTaskId}
            onTaskSelect={() => handleTaskSelect(ind)}
          />
        )
      }
    </div>
  );
};

