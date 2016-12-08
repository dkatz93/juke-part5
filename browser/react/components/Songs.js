import React from 'react';
import SongContainer from '../containers/SongContainer';

export default function (props) {

  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggle = props.actions.toggleSong;
  
  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          songs && songs.map(song => (
            <SongContainer key={song.id} song={song} songs={songs} />
          ))
        }
      </tbody>
    </table>
  );
}
