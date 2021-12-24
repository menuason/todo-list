import './create-task-form.scss';
import { Component } from 'react';
import { Input } from '../../../components/Input/input';
import { Button } from '../../../components/button/button';
import { Divider } from '../../../components/divider';
import { TodoList } from '../todo-list';

export class CreateTaskForm extends Component {
  state = {
    avatar: '',
    title: '',
    description: '',
    todos: [],
  };

  handleInputChange = (ev) => {
    const { value, name } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  saveTask = () => {
    if (!this.state.description || !this.state.title) {
      return;
    }
    this.props.onAddTask(this.state);
    this.props.onHideForm();
  };

  handleAddNewTodo = (todoName) => {

    const newTodo = { name: todoName, isDone: false };
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos });
  };

  handleDeleteTodo = (ind) => {
    const selectedTodo = this.state.todos[ind];
    const newTodos = this.state.todos.filter((todo) => todo !== selectedTodo);
    this.setState({ todos: newTodos });
  };

  onKeyUp = (ev) => {
    if (ev.key === 'Enter') {
      if (!this.state.description || !this.state.title) {
        return;
      }
      this.props.onAddTask(this.state);
      this.props.onHideForm();
    }
    if (ev.key === 'Escape') {
      this.props.onHideForm();
    }
  };

  render() {
    return (
      <div className="CreateNewTaskForm" onKeyUp={this.onKeyUp}>
        <div className="ContainerForAvatarAndInputs">
          <div className="Avatar">a</div>
          <div className="InputContainer">
            <Input
              name="title"
              placeholder="add title"
              onChange={this.handleInputChange}
            />
            <Input
              name="description"
              placeholder="add description"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <Divider />

        <div className="TodosContainer">
          <TodoList
            onNewTodo={this.handleAddNewTodo}
            onDeleteTodo={this.handleDeleteTodo}
            todos={this.state.todos}
          />
        </div>

        <div className="ContainerForButton">
          <Button type="button" onClick={this.props.onHideForm}>Cancel</Button>
          <Button type="button" variant="outlined" size="Small" onClick={this.saveTask}>Save</Button>
        </div>
      </div>
    );
  }
}
