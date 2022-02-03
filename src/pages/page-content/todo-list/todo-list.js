import { CreateNewTodo } from './create-new-todo';
import { Checkbox, FormControlLabel, IconButton, Typography } from '@mui/material';
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

  ToDoInfo: {
    width: '100%',
  },

  InputContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  DeleteButtonIcon: {
    color: '#d3d3d3ff',
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
  DeleteButton: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));

export const TodoList = ({ todos, onNewTodo, onDeleteTodo }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TodoList">
        {
          todos.map((todo) => {

              return (
                <div className="InputContainer" key={todo.uid}>
                  <FormControlLabel
                    className="ToDoInfo"
                    key={todo.uid}
                    control={(
                      <Checkbox />)}
                    label={(<Typography color="lightgrey"> {todo.name}</Typography>)}
                  />
                  <IconButton className="DeleteButton" onClick={() => onDeleteTodo(todo.uid)}>
                    <Close className="DeleteButtonIcon" />
                  </IconButton>
                </div>
              );
            },
          )
        }
        <CreateNewTodo onNewTodo={onNewTodo} />
      </div>
    </PatchStyles>
  );
};
