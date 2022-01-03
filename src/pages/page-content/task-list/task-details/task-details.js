import { TaskInfo } from '../../../../components/task-info';
import { Divider } from '../../../../components/divider';
import { TodoList } from '../../todo-list';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../../../store';
import { useParams } from 'react-router-dom';


export const TaskDetails = () => {
  const { taskIndex } = useParams();
  const selectedTask = useSelector((state) => tasksSlice.selectors.selectByIndex(state, taskIndex));
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoIndex) => {
    dispatch(tasksSlice.actions.deleteTodo({ taskIndex, todoIndex }));
  };

  const handleNewTodo = (todoName) => {
    if (todoName === '') {
      return;
    }

    dispatch(tasksSlice.actions.createTodo({ taskIndex, todoName }));
  };

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
