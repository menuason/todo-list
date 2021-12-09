import './page-content.scss'
import { TaskList } from './task-list/task-list';

export const PageContent = () => {
  return(
    <div className="PageContent">
      <TaskList/>
    </div>
  )
}
