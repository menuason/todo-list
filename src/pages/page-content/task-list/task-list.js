import { TaskListItem } from './task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../../store';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';
import { useAthorQuery } from '../../../store/services/task-service';

const useStyles = makeStyles((theme) => ({
  TaskList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const TaskList = () => {
  const {isFetching, data} = useAthorQuery(null)
  const classes = useStyles();
  const taskList = useSelector(tasksSlice.selectors.selectAll);

console.log('fetch, data', isFetching, data )

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskList">
        {
          taskList.map((task) => (
            <TaskListItem
              key={task.uid}
              task={task}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
