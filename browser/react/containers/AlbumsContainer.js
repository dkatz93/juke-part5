import React from 'react';
import {connect} from 'react-redux';
import Albums from '../components/Albums';

function mapStateToProps(state){
	console.log(state);
  return {
    albums: state.albums.list
  }
}

export default connect(mapStateToProps)(Albums);
