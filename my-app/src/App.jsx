import React, { Component } from "react";
import Card from "/.Card";
import Standards from "./Standards";
import Container from "./Container";

function App() {
  const [ksb] = [];

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ksb: null,
      };
    }

    async componentDidMount() {
      let response = await fetch(ksb);
      let data = await response.json();
      this.setState({ ksb: data.results[0] });
    }
    catch(error) {
      console.log(error);
    }
  }
}
render();
{
  return (
    <div className={container}>
      <h1 className={ksb.title}>Render Here</h1>
      <h2 className={ksb.name}>Render Here</h2>
    </div>
  );
}
{
  ksb.map((card) => <Card ksb={ksb.title} />);
}

/*OR?

  <div>
  fetch({ ksb })
      .then((res) => res.json())
      .then((data) => {
        ksbData(data.results);
      });
      </div>
  });

  return (
    <div>
      <h1>Render Here</h1>
      {ksb.map((card) => (
        <Card ksb={ksb.title} />
      ))}
    </div>
  );
}*/

/* HELPFUL FOR BONUS GOALS AT SOME POINT?

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

export { App };
