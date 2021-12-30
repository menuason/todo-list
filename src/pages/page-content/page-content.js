import './page-content.scss';
import { TaskList } from './task-list';
import { TaskDetails } from './task-list/task-details';
import { useState } from 'react';
import { CreateTaskForm } from './create-task-form';
import { AddTaskCard } from './todo-list/add-task-card';
import { useSelector } from 'react-redux';
import { selectTaskList } from '../../store/selectors';

export const PageContent = () => {
  const taskList = useSelector(selectTaskList)
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const handleTaskSelect = (ind) => {
    setSelectedTaskIndex(ind);
  };

  const handleShowCreateForm = () => {
    setIsEditMode(true);
    setSelectedTaskIndex(null);
  };

  const handleClose = () => setIsEditMode(false);

  return (
    <div className="PageContent">
      <div className="TaskListContainer">
        <AddTaskCard onClick={handleShowCreateForm} />

        <TaskList
          taskList={taskList}
          selectedTaskIndex={selectedTaskIndex}
          onTaskSelect={handleTaskSelect}
        />
      </div>

      <TaskDetails selectedTaskIndex={selectedTaskIndex} />

      {
        isEditMode && (
          <CreateTaskForm onClose={handleClose} />
        )
      }
    </div>
  );
};
