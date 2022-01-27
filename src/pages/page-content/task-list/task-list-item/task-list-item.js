import './task-list-item.scss';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { tasksSlice } from '../../../../store';
import { TaskInfo } from '../../../../components/task-info';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  DeleteButton: {
    color: 'gray'
  }
}));

export const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleDeleteTask = (ev) => {
    ev.preventDefault();

    dispatch(tasksSlice.actions.deleteTask(task.uid));
    navigate('/');
  };

  return (
    <NavLink
      to={`/${task.uid}`}
      className={({ isActive }) => `TaskListItem ${isActive ? 'Selected' : ''}`}
    >
      <TaskInfo task={task} />

      <IconButton onClick={handleDeleteTask}>
        <Close className={classes.DeleteButton} />
      </IconButton>
    </NavLink>
  );
};
