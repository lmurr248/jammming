import "./App.css";
import SearchBar from "../Searchbar/Searchbar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React, { useState, useCallback } from "react";
import Spotify from "../util/Spotify";

const TRACKS = [
  {
    artist: "Neil Young",
    song: "Out On The Weekend",
    album: "Harvest",
  },
  {
    artist: "Led Zeppelin",
    song: "Stairway To Heaven",
    album: "Led Zeppelin 3",
  },
];

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [inputValue, setInputValue] = useState("Enter playlist name");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Spotify
  const search = useCallback((term) => {
    setSearchTerm(term);
    Spotify.search(term).then(setSearchResults);
  }, []);

  // Add track to playlist
  function addToPlaylist(track) {
    if (!playlistTracks.some((t) => t.name === track.name)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  // Remove track from playlist
  function removeFromPlaylist(track) {
    setPlaylistTracks(playlistTracks.filter((t) => t.name !== track.name));
  }

  // Set state of playlist name on input change
  function onChangePlaylistName(e) {
    setInputValue(e.target.value);
  }

  // Clear playlist name on input focus
  function handleClearInput(e) {
    setInputValue("");
  }

  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
      </header>
      <div className="search">
        <SearchBar onSearch={search} />
      </div>
      <div className="main-container">
        <div className="card results">
          <SearchResults
            tracks={searchResults}
            playlistTracks={playlistTracks}
            onAddToPlaylist={addToPlaylist}
            onRemoveFromPlaylist={removeFromPlaylist}
            searchTerm={searchTerm}
          />
        </div>
        <div className="card playlist">
          <Playlist
            tracks={playlistTracks}
            onAddToPlaylist={addToPlaylist}
            onRemoveFromPlaylist={removeFromPlaylist}
            onChange={onChangePlaylistName}
            value={inputValue}
            onClick={handleClearInput}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
