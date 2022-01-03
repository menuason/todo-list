import './App.scss';
import { Header } from './pages/header';
import { PageContent } from './pages/page-content';
import { Route, Routes } from 'react-router-dom';
import { CreateTaskForm } from './pages/page-content/create-task-form';
import { TaskDetails } from './pages/page-content/task-list/task-details';

function App() {
  return (
    <div className="App">
      <Header />

      <PageContent>
        <Routes>
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/:taskUid" element={<TaskDetails />} />
        </Routes >
      </PageContent>
    </div>
  );
}

export default App;
