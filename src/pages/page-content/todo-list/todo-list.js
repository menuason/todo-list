import './todo-list.scss';
import { Checkbox } from '../../../components/input';

export const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {
        todos.map((todo, ind) => {
          return (
            <div className="CheckList" key={ind}>
              <Checkbox label={todo.name} />
            </div>
          );
        })
      }
    </div>
  );
};
