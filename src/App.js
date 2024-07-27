import logo from './logo.svg';
import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wildfire Evacuation</h1>
        <h3>Enter your postal code</h3>
        <div className='chatinputholder'>
          <textarea rows='1' className='chatinput'></textarea>
        </div>
      </header>
    </div>
  );
}

export default App;