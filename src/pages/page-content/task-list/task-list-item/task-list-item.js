import './task-list-item.scss';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { TaskInfo } from '../../../../components/task-info';
import { makeStyles } from '@mui/styles';
import { useDeleteTaskMutation } from '../../../../store/services/task-service';
import { WithLoader } from '../../../../components/whith-loader';

const useStyles = makeStyles(() => ({
  DeleteButton: {
    color: 'gray'
  }
}));

export const TaskListItem = ({ task }) => {
  const [deleteTasks, { isLoading }] = useDeleteTaskMutation();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleDeleteTask = (ev) => {
    ev.preventDefault();
    deleteTasks(task.uid)
    navigate('/');
  };

  return (
    <NavLink
      to={`/${task.uid}`}
      className={({ isActive }) => `TaskListItem ${isActive ? 'Selected' : ''}`}
    >
      <TaskInfo task={task} />

      <WithLoader isLoading={isLoading}>
        <IconButton onClick={handleDeleteTask}>
          <Close className={classes.DeleteButton} />
        </IconButton>
      </WithLoader>
    </NavLink>
  );
};
