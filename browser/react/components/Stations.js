import React, {Component} from 'react';
import {Link} from 'react-router'

export default function Stations(props){
	return (
		<div>
	      <h3>Stations</h3>
	      <div className="list-group">
	      {
	        Object.keys(props.stations).map(stationName => {
	          let station = props.stations[stationName]
	          return (
	            <div className="list-group-item" key={stationName}>
	              <Link to={`/stations/${stationName}`}>{stationName}</Link>
	            </div>
	          );
	        })
	      }
	      </div>
	    </div>

	)
}
