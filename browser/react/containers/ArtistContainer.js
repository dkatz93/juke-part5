import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Artist from '../components/Artist';
import { toggleSong } from '../action-creators/player';

function mapStateToProps(state){
  return {
    selectedArtist: state.artists.selected
  }
}

export default connect(mapStateToProps)(Artist);
