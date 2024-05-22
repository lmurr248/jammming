import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

// This component is a list of Tracks
export default function Tracklist(props) {
  return (
    <div className="tracklist">
      {props.tracks.map((track, index) => (
        <Track
          key={index}
          track={track}
          isLast={index === props.tracks.length - 1}
          isFirst={index === 0}
          onAddToPlaylist={props.onAddToPlaylist}
          onRemoveFromPlaylist={props.onRemoveFromPlaylist}
          isInPlaylist={props.playlistTracks.some((t) => t.id === track.id)}
        />
      ))}
    </div>
  );
}
