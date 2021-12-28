import './create-new-todo.scss';
import { AddIcon } from './icon/add-icon';
import React, { useState } from 'react'

export const CreateNewTodo = ({ onNewTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoName, setTodoName] = useState('');

  const handleSwitchToCreateMode = () => setIsEditMode(true);

  const handleBlur = () => {
    setIsEditMode(false);
    setTodoName('');
    onNewTodo(todoName);
  };

  const handleInputChange = (ev) => setTodoName(ev.target.value);

  return (
    isEditMode ? (
      <input
        className="AddTodoInput"
        value={todoName}
        autoFocus
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
    ) : (
      <AddIcon onClick={handleSwitchToCreateMode} />
    )
  );
};
