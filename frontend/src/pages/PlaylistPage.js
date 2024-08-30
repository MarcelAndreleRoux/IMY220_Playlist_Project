import React from "react";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";
import { AddSongPlaylist } from "../components/AddSongPlaylist";

class PlaylistPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  handleAddSong(song) {
    const { playlistId } = this.props.params;
    this.props.addSongToPlaylist(parseInt(playlistId), song);
  }

  render() {
    const { playlistId, explorePlaylistId } = this.props.params;
    const playlist = explorePlaylistId
      ? this.props.playlists.find((pl) => pl.id === parseInt(explorePlaylistId))
      : this.props.playlists.find((pl) => pl.id === parseInt(playlistId));

    if (!playlist) {
      return <div>Playlist not found</div>;
    }

    return (
      <div className="playlist container">
        <Navbar />
        <h1>{playlist.name}</h1>
        <ul>
          {playlist.songs.map((song) => (
            <li key={song.id}>
              {song.name}
              {explorePlaylistId && (
                <button onClick={() => this.handleAddSong(song)}>Add</button>
              )}
            </li>
          ))}
        </ul>
        {!explorePlaylistId && <AddSongPlaylist playlistId={playlistId} />}
      </div>
    );
  }
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export default withParams(PlaylistPage);
