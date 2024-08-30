import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export class ProfilePage extends React.Component {
  render() {
    const { username, email, playlists } = this.props;

    return (
      <div className="profile container">
        <Navbar />
        <h1>Profile Page</h1>
        <div className="profile-details">
          <h2>User Information</h2>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
        <div className="profile-playlists">
          <h2>Your Playlists</h2>
          <ul>
            {playlists && playlists.length > 0 ? (
              playlists.map((playlist) => (
                <li key={playlist.id}>{playlist.name}</li>
              ))
            ) : (
              <p>You have no playlists yet.</p>
            )}
          </ul>
          <Link to="/profile/edit">
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
    );
  }
}
