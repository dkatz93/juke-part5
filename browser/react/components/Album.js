import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default function (props) {

  const album = props.selectedAlbum;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.actions.toggleSong;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail"/>
      </div>
      <SongsContainer songs={album.songs} />
    </div>
  );

}