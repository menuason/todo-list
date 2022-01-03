import './add-task-card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const AddTaskCard = () => {
  return (
    <Link
      to="/create"
      className="AddTaskCard"
    >
      <FontAwesomeIcon
        icon={faPlus}
        size="3x"
        className="Icon"
        color="grey"
      />
      <span className="AddADoit"> Add a doit</span>
    </Link>
  )
}
