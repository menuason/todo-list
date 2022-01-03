import './page-content.scss';
import { TaskList } from './task-list';
import { AddTaskCard } from './todo-list/add-task-card';

export const PageContent = ({ children }) => {
  return (
    <div className="PageContent">
      <div className="TaskListContainer">
        <AddTaskCard />

        <TaskList />
      </div>

      {children}
    </div>
  );
};
