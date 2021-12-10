import { TaskInfo } from '../../../../components/task-info';
import { Divider } from '../../../../components/divider';
import { TodoList } from '../../todo-list';

export const TaskDetails = ({ selectedTask }) => {
  return (
    <div className="TaskDetails">
      <TaskInfo task={selectedTask} />
      <Divider />
      <TodoList todos={selectedTask.todos} />
    </div>
  );
};
