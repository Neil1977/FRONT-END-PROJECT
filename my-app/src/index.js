import React, { Component } from "react";
import { Card } from "Card.jsx";

/*createRoot(document.getElementById('root')).render(<App />); - REPLACE BELOW?*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
