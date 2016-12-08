import React from 'react';

export default class NewPlaylist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      dirty: false,
      playlistExists: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value,
      dirty: true,
      playlistExists: false
    });

  }

  handleSubmit(e) {

    e.preventDefault();


    if(this.props.playlists.find(playlist => playlist.name === this.state.inputValue)){
      this.setState({playlistExists: true})
    }

    else {
      this.props.actions.addNewPlaylist(this.state.inputValue);

      this.setState({
        inputValue: '',
        dirty: false,
        playlistExists: false
      });  
    }
  }

  render() {
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const inputValue = this.state.inputValue;
    const dirty = this.state.dirty;
    const warnings = [];

    if (!inputValue && dirty) warnings.push('You must enter a name');
    if (inputValue.length > 16) warnings.push('Name must be less than 16 characters');
    if(this.state.playlistExists) warnings.push('You already have a playlist with that name.')


    return (
      <div className="well" style={{marginTop: '20px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            { !!warnings.length && warnings.map((warning, i) => <div key={i} className="alert alert-warning">{warning}</div>) }
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={handleChange}
                  value={inputValue}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!!warnings.length || !inputValue}>
                  Create Playlist
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
};
