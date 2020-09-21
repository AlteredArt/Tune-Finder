import React from 'react';
import './Artist.css'

const Artist = ({ artist }) => {
    // const { images, name, followers, genres } = artist;
    if (!artist) {
        return null;
    }
    return (
        <div>
            <h3>{artist.name}</h3>
            <p>{artist.followers.total} followers</p>
            <p>{artist.genres.join(', ')}</p>
            <img
                className="img"
                src={artist.images[0] && artist.images[0].url}
                alt="artist-profile"
            />
        </div>
    )
}

export default Artist;