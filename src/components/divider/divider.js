import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  Divider: {
    width: '100%',
    height: 0,
    margin: [theme.spacing(3), 0],
    borderTop: 'lightgrey 1px solid',
  },

}));

export const Divider = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="Divider"></div>
    </PatchStyles>
  );
};
