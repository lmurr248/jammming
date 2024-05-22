import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

export default function Playlist(props) {
  const savePlaylistButton = () => {
    return <button className="addPlaylist">Add Playlist</button>;
  };

  return (
    <div className="container">
      <h4>Create Your Playlist</h4>
      <div className="playlistName">
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          onClick={props.onClick}
          placeholder="Enter a playlist name"
        />
        {props.value ? savePlaylistButton() : null}
      </div>
      <Tracklist
        tracks={props.tracks}
        playlistTracks={props.tracks}
        onAddToPlaylist={props.onAddToPlaylist}
        onRemoveFromPlaylist={props.onRemoveFromPlaylist}
      />
    </div>
  );
}
