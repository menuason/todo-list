import { useParams } from 'react-router-dom';
import { TaskInfo } from '../../../../components/task-info';
import { Divider } from '../../../../components/divider';
import { TodoList } from '../../todo-list';
import { useCreateTodoMutation, useDeleteTodoMutation, useFetchTaskListQuery } from '../../../../store/services/task-service';
import genUid from 'light-uid';


export const TaskDetails = () => {
  const { taskUid } = useParams();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const { data: selectedTask } = useFetchTaskListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && ({
        ...data[taskUid],
        todos:Array.from(Object.values(data[taskUid].todos ?? {})),
    }),
      ...otherInfo,
    }),
  });

  const handleDeleteTodo = (todoUid) => {
    deleteTodo({taskUid, todoUid});
  };

  const handleNewTodo = (todoName) => {
    if (todoName === '') {
      return;
    }
    createTodo({
      taskUid, todo: {
        name: todoName,
        uid: genUid,
        isDone: false,
      },
    });
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
