import logo from './my_image.JPG'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Haylin and I'm going to master React!!
        </p>
        <a
          className="App-link"
          href="https://github.com/h04032013"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
