import React from "react";
import { connect } from "react-redux";
import Metronome from './Metronome';
import './SongList.css';
const Song = ({ song }) => (

	<tr className="song-item">
		<td><a song={lowerCase(removeWhiteSpace(song.name))}>{ song.name }</a></td>
		<td>{ song.guitarist }</td>
		<td>{ song.difficulty }</td>
		<td>{ song.tempo }bpm</td>
		<td>{ song.key } </td>
		<td>
			<Metronome song={song}/>
		</td>
		<a><td> <img src={song.img_src} height="240px" width="300px"/></td></a>
	</tr>
);

function lowerCase(string) {
	return string.toLowerCase();
}

function removeWhiteSpace(string) {
	return string.replace(/ /g, "");
}

export default connect(
	null,
	null
)(Song);