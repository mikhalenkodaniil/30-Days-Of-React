
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main></Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
