import logo from './logo.svg';
import './App.scss';
import { Header } from './component/header/header';
import { PageContent } from './component/page-content/page-content';

function App() {
  return (
    <div className="App">
      <Header/>
      <PageContent/>
    </div>
  );
}

export default App;
