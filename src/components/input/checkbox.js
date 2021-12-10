import './checkbox.scss';

export const Checkbox = ({ label }) => {
  return (
    <div className="CheckboxContainer">
      <input type="checkbox" hidden />
      <div className="Checkbox" />
      <span className="Label">{label}</span>
    </div>
  );
};
