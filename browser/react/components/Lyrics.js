import React from 'react';

export default class Lyrics extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    console.log(this.props);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.actions.searchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    const text = this.props.lyrics.text;
    const artistQuery = this.state.artistQuery;
    const songQuery = this.state.songQuery;

    const artistChange = e => this.handleArtistInput(e.target.value);
    const songChange = e => this.handleSongInput(e.target.value);

    return (
      <div style={{marginTop: '20px'}}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className="col-md-6 col-xs-12">
              <label className="col-xs-2 control-label">Artist</label>
              <input
                className="form-control"
                type="text"
                value={artistQuery}
                placeholder="Enter an artist name"
                onChange={artistChange}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <label className="col-xs-2 control-label">Song</label>
              <input
                className="form-control"
                type="text"
                value={songQuery}
                placeholder="Enter a song name"
                onChange={songChange}
              />
            </div>
          </div>
          <pre>{text || 'Search above!'}</pre>
          <button type="submit" className="btn btn-success">
            Search for Lyrics
          </button>
        </form>
      </div>
    );
  }
}
