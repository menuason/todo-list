import './todo-list.scss';
import { Checkbox } from '../../../components/checkbox';
import { CreateNewTodo } from './create-new-todo';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const TodoList = ({ todos, onNewTodo, onDeleteTodo }) => {
  return (
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
                  <Close className="DeleteButton"/>
                </IconButton>
              </div>
            );
          },
        )
      }

      <CreateNewTodo onNewTodo={onNewTodo} />
    </div>
  );
};
