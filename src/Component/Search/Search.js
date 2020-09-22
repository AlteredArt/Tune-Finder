import React from 'react';
import './Search.css'

class Search extends React.Component {
    state = {
        artistQuery: ''
    }

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }


    render() {
        return (
            <div>
                <input id="search" onChange={this.updateArtistQuery} onKeyPress={this.handleKeyPress} placeholder="Search Artist"></input>
                <button id="button" onClick={this.searchArtist}>Search</button>
            </div>
        )
    }

}

export default Search;