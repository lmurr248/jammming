import React, { useRef, useEffect } from "react";
import "./TrackPreview.css";

export default function TrackPreview(props) {
  const audioRef = useRef(null);

  useEffect(() => {
    // Pause the audio if the current track is different from the playing track
    if (props.isPlaying && audioRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [props.isPlaying]);

  const handleAudioPlay = () => {
    if (props.onTrackPreviewPlay) {
      props.onTrackPreviewPlay(props.track.uri);
    }
  };

  return (
    <div className="track-preview-container">
      <audio
        ref={audioRef}
        src={props.track.preview}
        controls
        onPause={props.onTrackPreviewStop}
        onPlay={handleAudioPlay}
      />
    </div>
  );
}
