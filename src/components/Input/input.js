import './input.scss';

export const Input = ({ name, placeholder, onChange, maxLength}) => {

  return (
    <div className="Input">
      <input
        className="InputInput"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength ?? ''}
      />
    </div>
  );
};
