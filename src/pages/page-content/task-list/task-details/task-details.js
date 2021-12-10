import { TaskInfo } from '../../../../components/task-info';
import { Divider } from '../../../../components/divider';
import { TodoList } from '../../todo-list';

export const TaskDetails = () => {
  const task = {
    avatar: 'B',
    title: 'kla',
    description: 'klaklakla',
    todos: [
      {
        name: 'wash the dishes',
        isDone: false,
      },
      {
        name: 'wash the dishes',
        isDone: false,
      },
      {
        name: 'wash the dishes',
        isDone: false,
      },
    ],
  };
  return (
    <div className="TaskDetails">
      <TaskInfo task={task} />
      <Divider />
      <TodoList todos={task.todos} />
    </div>
  );
};
