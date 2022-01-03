import { TaskInfo } from '../../../../components/task-info';
import { Divider } from '../../../../components/divider';
import { TodoList } from '../../todo-list';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../../../store';
import { useParams } from 'react-router-dom';


export const TaskDetails = () => {
  const { taskUid } = useParams();
  const selectedTask = useSelector((state) => tasksSlice.selectors.selectByUid(state, taskUid));
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoUid) => {
    dispatch(tasksSlice.actions.deleteTodo({ taskUid, todoUid }));
  };

  const handleNewTodo = (todoName) => {
    if (todoName === '') {
      return;
    }

    dispatch(tasksSlice.actions.createTodo({ taskUid, todoName }));
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
