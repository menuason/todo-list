import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  Header: {
    height: '64px',
    display: 'flex',
    background: '#1f2227',
    color: 'white',
    padding: [theme.spacing(2), theme.spacing(3)],
  },
  labelText: {
    margin: 0,
  }
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="Header">
        <h2 className="labelText">Doit</h2>
      </div>
    </PatchStyles>
  );
};
