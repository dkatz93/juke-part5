import React, {Component} from 'react';

const selectStyles = {
	margin: 0,
	marginRight: '0.2em',
	height: 'auto'
};
const buttonStyles = {
	margin: 0,
	height: 'auto',
	paddingTop: 0,
	paddingBottom: 0
};

export default class Song extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playlistId: 'null',
			formVisible: false
		};
	}

	toggleForm() {
		console.log('toggleForm');
		this.setState({
			formVisible: !this.state.formVisible
		})
	}

	submitHandler(e) {
		e.preventDefault();
		if (this.state.playlistId !== 'null')
			this.props.actions.addSongToPlaylist(this.state.playlistId, this.props.song.id);
	}

	changeHandler(e) {
		this.setState({playlistId: Number(e.target.value)});
	}

	render() {
		const toggle = this.props.actions.toggleSong;
		const toggleForm = this.toggleForm.bind(this);
		const changeHandler = this.changeHandler.bind(this);
		const submitHandler = this.submitHandler.bind(this);
		const playlists = this.props.playlists;
		const songs = this.props.songs;
		const song = this.props.song;
		const isPlaying = this.props.isPlaying;
		const currentSong = this.props.currentSong;
		const formVisible = this.state.formVisible;
		return (
			<tr key={song.id}>
				<td>
					<button className="btn btn-default btn-xs" onClick={() => toggle(song, songs)}>
						<span className={song.id === currentSong.id && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}></span>
					</button>

					<button className="btn btn-default btn-xs" onClick={toggleForm}>
						<span className="glyphicon glyphicon-plus"></span>
					</button>
                </td>
                <td>{ song.name }</td>
                {
	              	!formVisible &&
						<td>
						<span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
						</td>
	         	}
	         	{
		          	!formVisible &&
	              		<td>{ song.genre }</td>
	            }
	            {
		          	formVisible &&
		          		<td colSpan="2">
		          			<form onSubmit={submitHandler}>
			          			<fieldset>
						          <div className="col-xs-8" style={{padding: 0}}>
						              <select
						                className="form-control"
						                style={selectStyles}
						                name="song"
						                required
						                defaultValue={'null'}
						                onChange={changeHandler}>
						                <option value={'null'} disabled>Select A Playlist</option>
						                {
						                  playlists && playlists.map(playlist => (
						                    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
						                  ))
						                }
						              </select>
						          </div>
						          <div className="col-xs-4">
						              <button type="submit" className="btn btn-success" style={buttonStyles}>Add</button>
						          </div>
						        </fieldset>
		          			</form>
		          		</td>
	            }
            </tr>
		); 
	}
}