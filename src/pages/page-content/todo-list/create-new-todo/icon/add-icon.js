import './add-icon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddIcon = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={faPlus}
      size="2x"
      className="Icon"
      color="grey"
    />
  );
};
