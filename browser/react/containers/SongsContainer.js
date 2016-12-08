import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Songs from '../components/Songs';
import {convertSongsToStations} from '../utils';
import { toggleSong } from '../action-creators/player';

function mapStateToProps(state){
	return {
		stations: convertSongsToStations(state.songs),
		isPlaying: state.player.isPlaying,
		currentSong: state.player.currentSong
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators({toggleSong}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);