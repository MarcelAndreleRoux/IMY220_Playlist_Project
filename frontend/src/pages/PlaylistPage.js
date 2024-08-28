import React from "react";

// Playlist Component (contains all required information on a single playlist)
// You would need to be able to list all of the songs (hint: song
// component) that belong to a playlist. This could be done in the playlist
// component itself, or in a separate component, depending on how you
// manage this functionality.

export class PlaylistPage extends React.Component {
  render() {
    return (
      <div className="home container">
        <h1>This is my playlist</h1>
      </div>
    );
  }
}
