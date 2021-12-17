import './todo-list.scss';
import { Checkbox } from '../../../components/input';
import { CreateNewTodo } from './create-new-todo/create-new-todo';

export const TodoList = ({ todos, onNewTodo }) => {

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

      <CreateNewTodo onNewTodo={onNewTodo}/>
    </div>
  );
};
