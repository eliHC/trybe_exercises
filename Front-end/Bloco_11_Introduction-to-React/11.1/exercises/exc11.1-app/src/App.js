import logo from './logo.svg';
import './App.css';

const tasks = [
  'do first thing',
  'do second thing',
  'avoid existential dread',
  'do fourth thing'
];

const Tasks = (oneArray) => {
  return (oneArray.map((task) => <li>{task}</li>));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ol>
        {Tasks(tasks)}
      </ol>
    </div>
  );
}

export default App;
