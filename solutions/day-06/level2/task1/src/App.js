import './App.css';
import Numbers from './components/numbers/Numbers';

function App() {
  return (
    <div className="App">
      <h1>30 days of react</h1>
      <p>Number generator</p>
      <div className='section'>
        <Numbers></Numbers>
      </div>
    </div>
  );
}

export default App;
