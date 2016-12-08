import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Lyrics from '../components/Lyrics';
import {searchLyrics} from '../action-creators/lyrics';

function mapStateToProps(state) {
  return {
    lyrics: state.lyrics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({searchLyrics}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);
