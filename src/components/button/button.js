import './button.scss';

const variantClassNames = {
  text: 'Text',
  contained: 'Contained',
  outlined: 'Outlined',
};

const sizeClassNames = {
  small: 'Small',
  normal: 'Normal',
  big: 'Big',
};

export const Button = ({ children, variant, size, ...buttonProps }) => {
  const variantClassName = variantClassNames[variant] ?? variantClassNames.text;
  const sizeClassName = sizeClassNames[size] ?? sizeClassNames.normal;

  return (
    <button
      type="button"
      className={`Button ${variantClassName} ${sizeClassName}`}
      {...buttonProps}
    >
      {children}
    </button>
  );

};
