import React, { useState } from "react";
import { KsbCard } from "./KsbCard";
import { ksb } from "./ksbData";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    const nextTheme = theme === "secondary" ? "light" : "secondary";
    setTheme(nextTheme);
  }
  /*const [ksb] = [];

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
*/
  const { knowledge, skills, behaviours } = ksb;
  return (
    <div>
      <Button variant="primary" onClick={toggleTheme}>
        Light/Dark
      </Button>
      <Container>
        <Row>
          <Col>
            {knowledge.map((each) => (
              <KsbCard ksb={each} theme={theme} />
            ))}
          </Col>
          <Col>
            {skills.map((each) => (
              <KsbCard ksb={each} theme={theme} />
            ))}
          </Col>
          <Col>
            {behaviours.map((each) => (
              <KsbCard ksb={each} theme={theme} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
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
