import React from "react";
import { connect } from "react-redux";
import Metronome from './Metronome';

const Song = ({ song }) => (

	<tr className="song-item">
		<td>{ song.name }</td>
		<td>{ song.guitarist }</td>
		<td>{ song.difficulty }</td>
		<td>{ song.tempo }bpm</td>
		<td>{ song.key } </td>
		<td>
			<Metronome song={song}/>
		</td>
		<td>
		<img src={song.img_src} height="240px" width="300px"/></td>
	</tr>
);

export default connect(
	null,
	null
)(Song);