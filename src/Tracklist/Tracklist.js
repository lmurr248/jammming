import React, { useState } from "react";
import Track from "../Track/Track";

export default function Tracklist(props) {
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState(null);

  const handleTrackPreviewPlay = (trackUri) => {
    setCurrentPlayingTrack(trackUri);
  };

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
          currentPlayingTrack={currentPlayingTrack}
          onTrackPreviewPlay={handleTrackPreviewPlay}
        />
      ))}
    </div>
  );
}
