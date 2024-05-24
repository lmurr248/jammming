import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./SearchResults.css";

export default function SearchResults(props) {
  return (
    <div className="container">
      <h4>
        {props.tracks.length > 0
          ? `Showing results for "${props.searchTerm}"`
          : "No results to show"}
          
      </h4>
      <Tracklist
        tracks={props.tracks}
        playlistTracks={props.playlistTracks}
        onAddToPlaylist={props.onAddToPlaylist}
        onRemoveFromPlaylist={props.onRemoveFromPlaylist}
      />
    </div>
  );
}
