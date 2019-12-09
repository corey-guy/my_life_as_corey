import React from "react";
import { useMetronome } from 'react-metronome-hook';
import click1 from '../../sounds/Click-1.wav';
import click2 from '../../sounds/Click-1.wav';
 
function Metronome({song}) {
 
  const {
    startMetronome,
    isTicking,
    stopMetronome,
    setBpm
  } = useMetronome(120, 4, [click1, click2]);
 
  setBpm(song.tempo);
  return (
    <div>
      <button onClick={isTicking ? stopMetronome : startMetronome}>
        {isTicking ? "Stop" : "Start"}
      </button>
      <div>{song.tempo}</div>
    </div>
  );
}

export default Metronome; 