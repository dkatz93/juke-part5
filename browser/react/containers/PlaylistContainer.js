import React, {Component} from 'react';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state) {
  return {
    selectedPlaylist: state.playlists.selected
  };
}

export default connect(mapStateToProps)(Playlist);
