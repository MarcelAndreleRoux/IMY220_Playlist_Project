import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlaylistPage } from "./pages/Playlist";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
        </div>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
