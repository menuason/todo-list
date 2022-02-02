import { CreateNewTodo } from './create-new-todo';
import { FormControlLabel, IconButton, Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';
import { Close } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  TodoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },

  TodoItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  DeleteButtonIcon: {
    color: '#d3d3d3ff',
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  DeleteButton: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  }
}));

export const TodoList = ({ todos, onNewTodo, onDeleteTodo }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TodoList">
        {
          todos.map((todo) => {
              return (
                <>
                  <FormControlLabel
                    key={todo.uid}
                    control={(
                      <Checkbox />)}
                    label={todo.name}
                  />
                  <IconButton className="DeleteButton" onClick={() => onDeleteTodo(todo.uid)}>
                    <Close className="DeleteButtonIcon" />
                  </IconButton>
                </>
              );
            },
          )
        }
        <CreateNewTodo onNewTodo={onNewTodo} />
      </div>
    </PatchStyles>
  );
};
