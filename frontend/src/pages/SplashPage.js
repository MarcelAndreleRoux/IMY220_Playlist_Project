import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/images/Muzik_Full_Logo.png";

export class SplashPage extends React.Component {
  render() {
    return (
      <div className="home container">
        <h1>Welcome To</h1>
        <img width={300} src={logo} alt="Muzik Full Logo" />
        <br />
        <p>
          Dive into a world where music lovers connect and share their favorite
          tunes. Whether you're into pop, rock, jazz, or classical, MUZIK is the
          place for you.
        </p>
        <p>
          Create your own playlists, explore those made by others, and find new
          songs that match your mood and style.
        </p>
        <button>
          <Link to="/login">Explore Now</Link>
        </button>
      </div>
    );
  }
}
