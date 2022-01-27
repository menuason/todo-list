import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  Input: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    border: 'unset',
    background: '#23262c',
  },

  InputInput: {
    color: 'lightgray',
    background: '#23262c',

    '&:focus': {
      border: 'unset',
      outline: 'none',
    },
  },
}));

export const Input = ({ name, placeholder, onChange, maxLength }) => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="Input">
        <input
          className="InputInput"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength ?? ''}
        />
      </div>
    </PatchStyles>
  );
};
