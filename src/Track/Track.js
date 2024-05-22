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

  const { track, isLast, isInPlaylist, isFirst } = props;
  // const trackClass = isLast ? "track last" : "track";
  // const trackFirst = isFirst ? "track first" : "track";

  const getTrackClass = () => {
    if (isLast && !isFirst) {
      return "track last";
    } else if (isFirst && !isLast) {
      return "track first";
    } else if (isLast && isFirst) {
      return "track firstLast";
    } else {
      return "track";
    }
  };

  return (
    <div className={getTrackClass()}>
      <div className="trackTitle">
        <h4>{track.name}</h4>
        {isInPlaylist ? (
          <p className="removeButton" onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </p>
        ) : (
          <p className="addButton" onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </p>
        )}
      </div>
      <div className="trackDetails">
        <p>{track.artist}</p>
        <p>{track.album}</p>
      </div>
    </div>
  );
}
