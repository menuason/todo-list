import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  Icon: {
    paddingBottom: theme.spacing(1),
  },
}));

export const AddIcon = ({ onClick }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <FontAwesomeIcon
        onClick={onClick}
        icon={faPlus}
        size="2x"
        className="Icon"
        color="grey"
      />
    </PatchStyles>
  );
};
