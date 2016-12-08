import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {convertSongsToStations} from '../utils'

function mapStateToProps(state){
	console.log('this is state:', state)
	return {
		stations: convertSongsToStations(state.songs)
	}
}

function mapDispatchToProps(dispatch){
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);