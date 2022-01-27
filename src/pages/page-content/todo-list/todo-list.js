import { Checkbox } from '../../../components/checkbox';
import { CreateNewTodo } from './create-new-todo';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

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

  DeleteButton: {
    color: '#D3D3D3FF',
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
              <div
                key={todo.uid}
                className="TodoItemContainer"
              >
                <Checkbox label={todo.name} />

                <IconButton onClick={() => onDeleteTodo(todo.uid)}>
                  <Close className="DeleteButton" />
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
