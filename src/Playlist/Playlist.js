import React, { useCallback } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

export default function Playlist({
  playlistName,
  value,
  tracks,
  onNameChange,
  onSave,
  onAddToPlaylist,
  onRemoveFromPlaylist,
  successMessage,
}) {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event);
    },
    [onNameChange]
  );

  return (
    <div className="container">
      <h4>Create Your Playlist</h4>
      <div className="playlistName">
        <input
          onChange={handleNameChange}
          type="text"
          value={value}
          placeholder="Enter a playlist name"
        />
        {value ? (
          <button className="addPlaylist" onClick={onSave}>
            Add Playlist
          </button>
        ) : null}
      </div>

      {successMessage && (
        <div className="successBox">
          <p className="successMessage">{successMessage}</p>
        </div>
      )}
      <Tracklist
        tracks={tracks}
        playlistTracks={tracks}
        onAddToPlaylist={onAddToPlaylist}
        onRemoveFromPlaylist={onRemoveFromPlaylist}
      />
    </div>
  );
}
