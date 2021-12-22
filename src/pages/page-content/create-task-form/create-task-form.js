import './create-task-form.scss';
import { Component } from 'react';
import { Input } from '../../../components/Input/input';
import { Button } from '../../../components/button/button';

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
    this.props.onAddTask(this.state);
    this.props.onHideForm();
  };


  render() {
    return (
      <div className="CreateNewTaskForm">
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

        <div className="ContainerForButton">
          <Button type="button" onClick={this.props.onHideForm}> cancel </Button>
          <Button type="button" variant="outlined" size="Small" onClick={this.saveTask}> save </Button>
        </div>
      </div>
    );
  }
}
