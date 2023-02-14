/* NEEDS CARD/COMPONENTS/ASSETS/LAYOUT/PAGES SUBFOLDERS IN DIRECTORY?/jsX file not js? */
// import Standards from './pages/Standards'
// import Container from './layout/Container'

// export default function App() {
// return (
// <Container>
// <Standards />
// </Container>
// )

//FROM CREATE REACT APP SETUP AUTO INSTALLED BELOW
import logo from "./logo.svg";
import "./App.css";

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
    </div>
  );
}

/* HELPFUL FOR BONUS GOALS?

/*function App() {
  const [theme, setTheme] = useState('light');
  const [showHidden, setShowHidden] = useState(false);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }

  function toggleHidden() {
    setShowHidden(!showHidden);
  }

  const color = theme === 'light' ? '#333' : '#FFF';
  const backgroundColor = theme === 'light' ? '#FFF' : '#333';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <div className='container'>
      <h1>   MESSAGE HERE?          </h1>
      <p>Click the button to toggle the theme</p>

      <button onClick={toggleTheme}>Current theme: {theme}</button>

      <button onClick={toggleHidden}>
        {showHidden ? 'Hide' : 'Show'} hidden content
      </button>

      {showHidden && (
        <div>
          <p>this content is hidden by default</p>
        </div>
      )}
    </div>
  );
}*/

export default App;
