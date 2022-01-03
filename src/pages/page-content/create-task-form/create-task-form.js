import './create-task-form.scss';
import { useState } from 'react';
import { Button } from '../../../components/button';
import { Divider } from '../../../components/divider';
import { TodoList } from '../todo-list';
import { Input } from '../../../components/Input';
import { useDispatch } from 'react-redux';
import { tasksSlice } from '../../../store';
import { useNavigate } from 'react-router-dom';
import genUid from 'light-uid';

const DEFAULT_TASK_VALUE = {
  avatar: '',
  title: '',
  description: '',
  todos: [],
};

export const CreateTaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [draftTask, setDraftTask] = useState(DEFAULT_TASK_VALUE);

  const handleClose = () => navigate('/');

  const saveTask = () => {
    const { description, title } = draftTask;

    if (!description || !title) {
      return;
    }

    if (description.length >= 25 || title.length >= 25) {
      alert('not more than 25 letter');
      return;
    }

    dispatch(tasksSlice.actions.createTask(draftTask));
    handleClose();
  };

  const handleAddNewTodo = (todoName) => {
    const draftNewTodo = { uid: genUid(), name: todoName, isDone: false };
    const todos = [...draftTask.todos, draftNewTodo];

    setDraftTask({ ...draftTask, todos });
  };

  const handleDeleteTodo = (uid) => {
    const selectedTodo = draftTask.todos.find((todo) => todo.uid === uid);
    const todos = draftTask.todos.filter((todo) => todo !== selectedTodo);
    setDraftTask({ ...draftTask, todos });
  };

  const handleTaskFieldChange = (ev) => {
    const { name, value } = ev.target;
    setDraftTask({ ...draftTask, [name]: value });
  };

  const onKeyUp = (ev) => {
    if (ev.key === 'Enter') {
      saveTask();
    }
    if (ev.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <div className="CreateNewTaskForm" onKeyUp={onKeyUp}>
      <div className="ContainerForAvatarAndInputs">
        <div className="Avatar">a</div>
        <div className="InputContainer">
          <Input
            name="title"
            placeholder="add title"
            maxLength="25"
            onChange={handleTaskFieldChange}
          />
          <Input
            name="description"
            placeholder="add description"
            onChange={handleTaskFieldChange}
          />
        </div>
      </div>
      <Divider />

      <div className="TodosContainer">
        <TodoList
          todos={draftTask.todos}
          onNewTodo={handleAddNewTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>

      <div className="ContainerForButton">
        <Button type="button" onClick={handleClose}>Cancel</Button>
        <Button type="button" variant="outlined" size="Small" onClick={saveTask}>Save</Button>
      </div>
    </div>
  );
};
