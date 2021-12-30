import { TaskInfo } from '../../../../components/task-info';
import { Divider } from '../../../../components/divider';
import { TodoList } from '../../todo-list';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store';
import { selectTaskByIndex } from '../../../../store/selectors';

export const TaskDetails = ({ selectedTaskIndex }) => {
  const selectedTask = useSelector((state) => selectTaskByIndex(state, selectedTaskIndex));
  const dispatch = useDispatch();

  const handleDeleteTodo = (ind) => {
    dispatch({
      type: actions.deleteTodo,
      payload: {
        taskIndex: selectedTaskIndex,
        todoIndex: ind,
      }
    })
  };

  const handleNewTodo = (todoName) => {
    if (todoName === '') {
      return;
    }

    dispatch({
      type: actions.createTodo,
      payload: {
        todoName,
        taskIndex: selectedTaskIndex
      }
    })
  }

  if (!selectedTask) {
    return null;
  }

  return (
    <div className="TaskDetails">
      <TaskInfo task={selectedTask} />

      <Divider />

      <TodoList
        todos={selectedTask.todos}
        onNewTodo={handleNewTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};
