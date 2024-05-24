import React from "react";
import "./Track.css";
import TrackPreview from "../TrackPreview/TrackPreview";

export default function Track(props) {
  function handleButtonClick() {
    if (props.isInPlaylist) {
      props.onRemoveFromPlaylist(props.track);
    } else {
      props.onAddToPlaylist(props.track);
    }
  }

  const {
    track,
    isLast,
    isInPlaylist,
    isFirst,
    currentPlayingTrack,
    onTrackPreviewPlay,
  } = props;

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
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
</svg>
            Remove
          </p>
        ) : (
          <p className="addButton" onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
            Add
          </p>
        )}
      </div>
      <div className="trackDetails">
        <div className="trackArtist">
          <p>{track.artist}</p>
          <p>{track.album}</p>
        </div>
        {/* </div>
      <div className="trackPreview"> */}
        <TrackPreview
          track={track}
          isPlaying={currentPlayingTrack === track.uri}
          onTrackPreviewPlay={onTrackPreviewPlay}
        />
      </div>
    </div>
  );
}
