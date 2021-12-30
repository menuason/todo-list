import './create-task-form.scss';
import { useState } from 'react';
import { Button } from '../../../components/button';
import { Divider } from '../../../components/divider';
import { TodoList } from '../todo-list';
import { Input } from '../../../components/Input';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store';

const DEFAULT_TASK_VALUE = {
  avatar: '',
  title: '',
  description: '',
  todos: [],
};

export const CreateTaskForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [draftTask, setDraftTask] = useState(DEFAULT_TASK_VALUE);

  const saveTask = () => {
    dispatch({ type: actions.createTask, payload: draftTask })
    const { description, title } = draftTask;

    if (!description || !title) {
      return;
    }
    if (description.length >= 25 || title.length >= 25) {
      return alert('not more than 25 letter');
    }

    onClose();
  };

  const handleAddNewTodo = (todoName) => {
    const draftNewTodo = { name: todoName, isDone: false };
    const todos = [...draftTask.todos, draftNewTodo];

    setDraftTask({ ...draftTask, todos });
  };

  const handleDeleteTodo = (ind) => {
    const selectedTodo = draftTask.todos[ind];
    const newTodos = draftTask.todos.filter((todo) => todo !== selectedTodo);
    setDraftTask({ ...draftTask, newTodos });
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
      onClose();
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
        <Button type="button" onClick={onClose}>Cancel</Button>
        <Button type="button" variant="outlined" size="Small" onClick={saveTask}>Save</Button>
      </div>
    </div>
  );
};
