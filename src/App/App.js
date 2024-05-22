import "./App.css";
import SearchBar from "../Searchbar/Searchbar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React, { useState, useCallback } from "react";
import Spotify from "../util/Spotify";

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  // Spotify
  const search = useCallback((term) => {
    setSearchTerm(term);
    Spotify.search(term).then(setSearchResults);
  }, []);

  // Add track to playlist
  function addToPlaylist(track) {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  // Remove track from playlist
  function removeFromPlaylist(track) {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  }

  // Set state of playlist name on input change
  function onChangePlaylistName(e) {
    setInputValue(e.target.value);
  }

  // Clear playlist name on input focus
  function handleClearInput(e) {
    setInputValue("");
  }

  // Hide footer
  function toggleFooter() {
    setIsFooterVisible((prevState) => !prevState);
  }

  return (
    <div className="App">
      <header>
        <h1 className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="#e3e8fa90"
            class="bi bi-music-note-list"
            viewBox="0 0 16 16"
          >
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
            <path fill-rule="evenodd" d="M12 3v10h-1V3z" />
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
            <path
              fill-rule="evenodd"
              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <span style={{ color: "#0083ff", marginLeft: "8px" }}>J</span>
          <span style={{ color: "#319bff" }}>a</span>
          <span style={{ color: "#48a5fd" }}>m</span>
          <span style={{ color: "#79beff" }}>m</span>
          <span style={{ color: "#afd8ff" }}>m</span>
          <span style={{ color: "#d1e9ff" }}>i</span>
          ng
        </h1>
        <p className="subtitle">A new way to create Spotify playlists!</p>
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

      {isFooterVisible ? (
        <div className="footer">
          <div className="closeFooter" onClick={toggleFooter}>
            <p>Close</p>
          </div>
          <div>
            <p>
              <span style={{ fontWeight: 700 }}>
                Created by{" "}
                <a href="https://github.com/lmurr248" target="_blank">
                  Laurence Murrin&nbsp;
                </a>
                -
              </span>{" "}
              This is actually my first React App! I hope you enjoy it.
            </p>
          </div>
        </div>
      ) : (
        <div className="footer collapsed">
          <div className="closeFooter" onClick={toggleFooter}>
            <p>Show</p>
          </div>
          <div className="footerHidden">
            <p>This is my first React App! I hope you enjoy it.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
