import './todo-list.scss';
import { Checkbox } from '../../../components/checkbox';
import { CreateNewTodo } from './create-new-todo/create-new-todo';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const TodoList = ({ todos, onNewTodo, onDeleteTodo }) => {
  return (
    <div className="TodoList">
      {
        todos.length > 0 && (
          todos.map((todo, ind) => {
              return (
                <div className="TodoItemContainer" key={ind}>
                  <Checkbox label={todo.name} />

                  <IconButton onClick={() => onDeleteTodo(ind)}>
                    <Close className="DeleteButton"/>
                  </IconButton>

                </div>
              );
            },
          )
        )
      }

      <CreateNewTodo onNewTodo={onNewTodo} />
    </div>
  );
};
