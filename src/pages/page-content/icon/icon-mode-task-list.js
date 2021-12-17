import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const IconModeTaskList = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={faPlus}
      size="3x"
      className="Icon"
      color="grey"
    />
  );
};
