import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.searchTermHere = React.createRef();
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();

    const sendSearchTerm = this.searchTermHere.current.value;

    this.props.handleSearch(sendSearchTerm);
  }

  render() {
    const { playlists } = this.props;

    const filteredPlaylists = playlists.filter(
      (playlist) =>
        playlist.name
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        playlist.author
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase())
    );

    return (
      <div className="feed container">
        <Navbar />
        <h1>Explore Playlists</h1>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            placeholder="Search playlists..."
            ref={this.searchTermHere}
            className="search-bar"
          />
          <input type="submit" value="Search" />
        </form>
        <div className="playlists-grid">
          {filteredPlaylists.length > 0 ? (
            filteredPlaylists.map((playlist) => (
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
            <p>No playlists found</p>
          )}
        </div>
      </div>
    );
  }
}
