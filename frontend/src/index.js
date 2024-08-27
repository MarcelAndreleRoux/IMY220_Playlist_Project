import React from "react";
import ReactDOM from "react-dom";

import { HomePage } from "./pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HomePage />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
