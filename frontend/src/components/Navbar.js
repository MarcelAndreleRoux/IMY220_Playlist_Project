import React from "react";
import { Link } from "react-router-dom";

// contains your page routing - the ‘navbar’ and must be present on all pages besides the Splash page

export class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/playlist">Playlist</Link>
      </nav>
    );
  }
}
