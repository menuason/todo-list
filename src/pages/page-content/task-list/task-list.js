import { TaskListItem } from './task-list-item';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';
import { useFetchTaskListQuery } from '../../../store/services/task-service';

const useStyles = makeStyles((theme) => ({
  TaskList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const TaskList = () => {
  const classes = useStyles();
  const { data: taskList } = useFetchTaskListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskList">
        {
          taskList?.map((task) => (
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
