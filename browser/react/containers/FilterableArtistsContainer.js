import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import FilterableArtists from '../components/FilterableArtists';

function mapStateToProps(state){
  return {
    artists: state.artists.list
  }
}

export default connect(mapStateToProps)(FilterableArtists);