import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export class HomePage extends React.Component {
  render() {
    const { username, isAuthenticated, ExplorePlaylists } = this.props;

    return (
      <div className="home container">
        <Navbar />
        <h1>Welcome to Your Home Page</h1>

        {isAuthenticated ? (
          <div>
            <h2>Hello, {username}!</h2>
            <p>Here are some playlists you might enjoy:</p>
            <div className="playlists-grid">
              {ExplorePlaylists.length > 0 ? (
                ExplorePlaylists.map((playlist) => (
                  <div key={playlist.id} className="playlist-card">
                    <Link to={`/playlist/${playlist.id}`}>
                      <div>
                        <img
                          src={playlist.image}
                          alt={playlist.name}
                          className="playlist-image"
                        />
                      </div>
                      <div>
                        <strong>Playlist:</strong> {playlist.name}
                      </div>
                      <div>
                        <strong>Author:</strong> {playlist.author}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No playlists available.</p>
              )}
            </div>
          </div>
        ) : (
          <p>Please log in to see your personalized content.</p>
        )}
      </div>
    );
  }
}

HomePage.defaultProps = {
  username: "General",
  isAuthenticated: true,
  playlist: [],
};
