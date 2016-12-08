import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NewPlaylist from '../components/NewPlaylist';
import {addNewPlaylist} from '../action-creators/playlists';

function mapStateToProps(state) {
  return {
  	playlists: state.playlists.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addNewPlaylist
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylist);
