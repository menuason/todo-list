import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  Checkbox: {
    cursor: 'pointer',
    height: theme.spacing(3),
    width: theme.spacing(3),
    border: 'lightgrey 1px solid',
    borderRadius: theme.spacing(0.5),
    boxSizing: 'border-box',
  },

  CheckboxContainer: {
    display: 'flex',
    gap: theme.spacing(1),
    cursor: 'pointer',
    alignItems: 'center',
  },

  Label: {
    color: 'lightgrey',
  },
}));

export const Checkbox = ({ label }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="CheckboxContainer">
        <input type="checkbox" hidden />
        <div className="Checkbox" />
        <span className="Label">{label}</span>
      </div>
    </PatchStyles>
  );
};
