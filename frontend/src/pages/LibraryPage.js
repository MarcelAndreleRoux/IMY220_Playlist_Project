import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPlaylist = this.handleAddPlaylist.bind(this);
  }

  handleAddPlaylist() {
    const newPlaylist = {
      id: this.props.playlists.length + 1,
      name: `New Playlist ${this.props.playlists.length + 1}`,
      createdBy: this.props.username,
    };

    this.props.addPlaylist(newPlaylist);
  }

  render() {
    const { playlists } = this.props;

    return (
      <div className="home container">
        <Navbar />
        <button onClick={this.handleAddPlaylist}>Add New Playlist</button>
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
