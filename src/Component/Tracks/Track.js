import React from 'react';
import './Tracks.css'

class Tracks extends React.Component {
    state = {
        playing: false,
        audio: null,
        playingPreviewUrl: null
    };

    playAudio = previewURL => () => {
        const audio = new Audio(previewURL);

        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewURL });
        } else {
            this.state.audio.pause();

            if (this.state.playingPreviewUrl === previewURL) {
                this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewURL })
            }
        }
    }

    trackIcon = track => {
        if (!track.preview_url) {
            return <span style={{ backgroundColor: "red" }}>N/A</span>
        }
        if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
            return <span style={{ backgroundColor: "yellow" }}>| |</span>;
        }
        return <span style={{ backgroundColor: "green" }}>&#9654;</span>;
    }

    render() {
        const { tracks } = this.props;
        return (
            <div>
                {tracks.map(track => {
                    const { id, name, album, preview_url } = track;

                    return (
                        <div className="track" key={id} onClick={this.playAudio(preview_url)}>
                            <img
                                className="track-img"
                                src={album.images[0].url}
                                alt="track-img" />
                            <p className="track-text">{name}</p>
                            <p className="track-icon">{this.trackIcon(track)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Tracks;