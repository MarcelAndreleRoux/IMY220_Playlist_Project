import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlaylistPage } from "./pages/PlaylistPage";
import { Navbar } from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist" element={<PlaylistPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
