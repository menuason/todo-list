import { makeStyles } from '@mui/styles';
import { TaskList } from './task-list';
import { AddTaskCard } from './todo-list/add-task-card';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  PageContent: {
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
  },

  TaskListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

export const PageContent = ({ children }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="PageContent">
        <div className="TaskListContainer">
          <AddTaskCard />

          <TaskList />
        </div>

        {children}
      </div>
    </PatchStyles>
  );
};
