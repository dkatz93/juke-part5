import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSongsToStations} from '../utils'

function mapStateToProps(state){
	return {
		stations: convertSongsToStations(state.songs),
		isPlaying: state.player.isPlaying,
		currentSong: state.player.currentSong
	}
}

function mapDispatchToProps(dispatch){
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);