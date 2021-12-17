import { Component } from 'react';

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
    this.props.onAddTask(this.state)
  }


  render() {
    return (
      <div>
        <input
          name="title"
          placeholder="add title"
          onChange={this.handleInputChange}
        />
        <input
          name="description"
          placeholder="add description"
          onChange={this.handleInputChange}
        />
        <div>
          <button onClick={this.props.onHideForm}> cancel </button>
          <button onClick={this.saveTask} > save </button>
        </div>
      </div>
    );
  }
}
