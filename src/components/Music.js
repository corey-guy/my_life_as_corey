import React from 'react';
import './Music.css';
import SongList from './songs/SongList';
export class Music extends React.Component {
	render() {
 
		//songs you've learned
		//songs you want to learn
		//things to practice for technical skills (scales, metronome, inside picking etc.)
		return(
			<div>
				<h1>Music</h1>
				<h2>So I've been playing guitar for a long time...why isn't this list longer?</h2>
				<h3>Because it's hard to stay organized...as a musician/artist...scatterbrain</h3>
				<h3>It's also fun to just play.</h3>
				<h3>Relax, destress and just...play</h3>
				<SongList/>
			</div>

		);
	}
}
