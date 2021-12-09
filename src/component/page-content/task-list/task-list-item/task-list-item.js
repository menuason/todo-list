import './task-list-item.scss';

export const TaskListItem = ({task}) => {
  return (
    <div className="TaskListItem">
      <div className="Avatar">{task.avatar}</div>
      <div className="Text">
        <div className="PersonaTodoes">{task.title}</div>
        <div className="Discription">{task.description}</div>
      </div>
    </div>
  );
};
