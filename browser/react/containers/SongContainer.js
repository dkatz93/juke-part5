import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Song from '../components/Song';
import {toggleSong} from '../action-creators/player';
import {addSongToPlaylist} from '../action-creators/playlists';

function mapStateToProps(state) {
	return {
		playlists: state.playlists.list,
		isPlaying: state.player.isPlaying,
		currentSong: state.player.currentSong
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({toggleSong, addSongToPlaylist}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);