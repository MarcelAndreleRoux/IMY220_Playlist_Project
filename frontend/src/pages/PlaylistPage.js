import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Song } from "../components/Song";

// Playlist Component (contains all required information on a single playlist)
// You would need to be able to list all of the songs (hint: song
// component) that belong to a playlist. This could be done in the playlist
// component itself, or in a separate component, depending on how you
// manage this functionality.

const songs = [
  { id: "1", name: "Song 1" },
  { id: "2", name: "Song 2" },
  { id: "3", name: "Song 3" },
];

export class PlaylistPage extends React.Component {
  render() {
    return (
      <div className="home container">
        <Navbar />
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <Link to={`/song/${song.id}`}>Song</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
