import { Component } from 'react';
import './create-new-todo.scss';
import { AddIcon } from './icon/add-icon';

export class CreateNewTodo extends Component {
  state = {
    isEditMode: false,
    description: '',
  };

  handleSwitchToCreateMode = () => {
    this.setState({
      isEditMode: true,
    });
  };

  handleBlur = () => {
    this.setState({
      isEditMode: false,
      description: '',
    });
    this.props.onNewTodo(this.state.description);
  };

  handleInputChange = (ev) => {
    this.setState({ description: ev.target.value });
  };

  render() {
    return (
      this.state.isEditMode ? (
        <input
          className="AddTodoInput"
          value={this.state.description}
          autoFocus
          onBlur={this.handleBlur}
          onChange={this.handleInputChange}
        />
      ) : (
        <AddIcon onClick={this.handleSwitchToCreateMode} />
      )
    );
  }
}
