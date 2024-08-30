import React from "react";
import { useNavigate } from "react-router-dom";

export function AddSongPlaylist() {
  const navigate = useNavigate();

  const handleAddToPlaylist = () => {
    navigate("/explore");
  };

  return <button onClick={handleAddToPlaylist}>Add to Playlist</button>;
}
