import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TaskDetails: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  TaskInfo: {
    display: 'flex',
    gap: theme.spacing(2),
  },

  Avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'blueviolet',
    borderRadius: '100%',
    border: 'white solid 1px',
  },

  Text: {
    display: 'flex',
    flexDirection: 'column',
  },

  PersonaTodoes: {
    color: 'white',
  },

  Description: {
    marginTop: '16px',
    color: 'rgba(211, 211, 211, 0.69)',
  },
}));

export const TaskInfo = ({ task }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TaskInfo">
        <div className="Avatar">{task.avatar}</div>
        <div className="Text">
          <div className="PersonaTodoes">{task.title}</div>
          <div className="Description">{task.description}</div>
        </div>
      </div>
    </PatchStyles>
  );
};
