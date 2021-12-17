import './add-task-card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddTaskCard = ({onClick}) => {
  return (
    <div className="AddTaskCard" onClick={onClick}>
      <FontAwesomeIcon
        icon={faPlus}
        size="3x"
        className="Icon"
        color="grey"
      />
      <div className="AddADoit"> Add a doit</div>
    </div>
  )
}
