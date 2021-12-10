import './todo-list.scss';
import { Checkbox } from '../../../components/input';

export const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {
        todos.map((todo) => {
          return (
            <div className="CheckList">
              <Checkbox label={todo.name} />
            </div>
          );
        })
      }
    </div>
  );
};
