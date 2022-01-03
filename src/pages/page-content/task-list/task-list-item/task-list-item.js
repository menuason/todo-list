import './task-list-item.scss';

import { TaskInfo } from '../../../../components/task-info';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { tasksSlice } from '../../../../store';
import { NavLink, useNavigate } from 'react-router-dom';

export const TaskListItem = ({ task, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDeleteTask = (ev) => {
    ev.preventDefault();

    dispatch(tasksSlice.actions.deleteTask(index));
    navigate('/');
  };

  return (
    <NavLink
      to={`/${index}`}
      className={({ isActive }) => `TaskListItem ${isActive ? 'Selected' : ''}`}
    >
      <TaskInfo task={task} />

      <IconButton onClick={handleDeleteTask}>
        <Close className="DeleteButton" />
      </IconButton>
    </NavLink>
  );
};
