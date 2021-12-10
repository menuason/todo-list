import './task-info.scss';

export const TaskInfo = ({ task }) => {
  return (
    <div className="TaskInfo">
      <div className="Avatar">{task.avatar}</div>
      <div className="Text">
        <div className="PersonaTodoes">{task.title}</div>
        <div className="Discription">{task.description}</div>
      </div>
    </div>
  );
};

