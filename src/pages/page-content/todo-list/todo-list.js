import './todo-list.scss';
import { Checkbox } from '../../../components/checkbox';
import { CreateNewTodo } from './create-new-todo/create-new-todo';

export const TodoList = ({ todos, onNewTodo }) => {

  return (
    <div className="TodoList">
      {
        todos.map((todo, ind) => {
          return (
            <Checkbox key={ind} label={todo.name} />
          );
        })
      }

      <CreateNewTodo onNewTodo={onNewTodo} />
    </div>
  );
};
