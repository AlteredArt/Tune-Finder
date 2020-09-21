import React from 'react';
import Artist from './Component/Artist/Artist';
import Tracks from './Component/Tracks/Track';
import Search from './Component/Search/Search'

const API = 'https://spotify-api-wrapper.appspot.com'
class App extends React.Component {

  state = {
    artist: null,
    tracks: []
  }

  searchArtist = artistQuery => {
    fetch(`${API}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist })
          fetch(`${API}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message))
        }
      })
      .catch(error => alert(error.message));
  }


  render() {
    return (
      <div className="App" style={{ "textAlign": "center" }}>
        <h2>Tune Finder</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div >
    );
  }

}

export default App;
