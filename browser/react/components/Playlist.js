import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default function (props) {

  const playlist = props.selectedPlaylist;

  return (
    <div>
      <h3>{ playlist.name }</h3>
      <SongsContainer songs={playlist.songs}/>
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
    </div>
  );

}

