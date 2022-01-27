import { Route, Routes } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import { Header } from './pages/header';
import { PageContent } from './pages/page-content';
import { CreateTaskForm } from './pages/page-content/create-task-form';
import { TaskDetails } from './pages/page-content/task-list/task-details';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  App: {
    height: '100%',
    backgroundColor: '#272A31',
  },
  Page: {
    display: 'flex',
    flexDirection: 'column',
  },
  PageContent: {
    display: 'flex',
    padding: [0, theme.spacing(3)],
    gap: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="App">
        <Header />
        <PageContent>
          <Routes>
            <Route path="/create" element={<CreateTaskForm />} />
            <Route path="/:taskUid" element={<TaskDetails />} />
          </Routes>
        </PageContent>
      </div>
    </PatchStyles>
  );
}

export default App;
