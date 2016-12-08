import React from 'react';
import SongsContainer from '../containers/SongsContainer'

export default function(props){

	let stationName = props.params.stationName;
	let station = props.stations[stationName];


	return (
		<div>
			<h1>{stationName} Station</h1>
			<SongsContainer songs={station}/>
		</div>	
	)
}