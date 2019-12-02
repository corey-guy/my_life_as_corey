import React from "react";
import { connect } from "react-redux";
import ProMetronome from 'react-pro-metronome'


const Song = ({ song }) => (
	<tr className="song-item">
		<td>{ song.name }</td>
		<td>{ song.guitarist }</td>
		<td>{ song.difficulty }</td>
		<td>{ song.tempo }bpm</td>
		<td>{ song.key } </td>
		<td>
			<ProMetronome
			  bpm={ song.tempo }
			  subdivision={2}
			  soundEnabled={true}
			  soundPattern="31313131"
			  render={(props, state) => (
			    <div>
			      {state.qNote}/{state.subNote}
			    </div>
			  )}
			/>
		</td>
		<td>
		<img src={song.img_src} height="240px" width="300px"/></td>
	</tr>
);

export default connect(
	null,
	null
)(Song);