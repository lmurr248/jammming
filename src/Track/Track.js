import React from "react";
import "./Track.css";

// Creates the individual track card that will appear in the list of tracks in Tracklist
export default function Track(props) {
  function handleButtonClick() {
    if (props.isInPlaylist) {
      props.onRemoveFromPlaylist(props.track);
    } else {
      props.onAddToPlaylist(props.track);
    }
  }

  const { track, isLast, isInPlaylist } = props;
  const trackClass = isLast ? "track last" : "track";

  return (
    <div className={trackClass}>
      <div className="trackTitle">
        <h4>{track.name}</h4>
        <p className="addButton" onClick={handleButtonClick}>
          {isInPlaylist ? "-" : "+"}
        </p>
      </div>
      <div className="trackDetails">
        <p>{track.artist}</p>
        <p>{track.album}</p>
      </div>
    </div>
  );
}
