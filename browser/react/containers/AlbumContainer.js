import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';


function mapStateToProps(state){
  return {
    selectedAlbum: state.albums.selected,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({toggleSong}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
