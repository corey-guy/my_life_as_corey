import React from "react";
import Song from "./Song";
import { connect } from "react-redux";
import { getSongs } from "../../redux/selectors"
import './SongList.css';
const SongList = ( { songs } ) => (
	<div>
		<tr>
			<th id='song-table-name-header'>Song Name</th>
			<th id='song-table-month-header'>Guitarist</th>
			<th id='song-table-year-header'>Difficulty (1-10)</th>
			<th id='song-table-continent-header'>Tempo</th>
			<th id='song-table-key-header'>Key</th>
			<th id='song-metronome-header'>Metronome</th>
			<th id='song-table-image-header'></th>
		</tr>
		{songs && songs.length
			? songs.map((song, index) => {
					return <Song key={`song-${song.name}-${song.guitarist}`} song={song} />;
			})
			: "No songs present" }
	</div>

	//hardest difficulty

);

const mapStateToProps = state => {
	const songs = getSongs(state);
	return { songs }
};

export default connect(
	mapStateToProps, 
	null
)(SongList);