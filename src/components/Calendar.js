import React from "react";
import { connect } from 'react-redux';
import { changePic } from '../redux/actions';
import { getCurrPic } from "../redux/selectors"


export const Calendar = ( {currPic} ) => { 

		return (
			<div>
				<h1>Calendar</h1>
				<h2>There are 24 hours in the day</h2>
				<h3>Get on with it then...</h3>
				<h3>Random Image</h3>
				<img src="https://picsum.photos/200/300" alt="random"></img>
			</div>
		);
}

async function getImage() {
	console.log("enter get image");
	let response = await fetch("https://picsum.photos/200/300");
	let blob = await response.blob();
	console.log(response);
	console.log(blob);
	console.log("return");
	return response.url;
}

function getURL() {
	let url = getImage();
	setTimeout(3000);
	console.log("return");
	return url;
}

const mapStateToProps = state => {
	const currPic = getCurrPic(state);
	return { currPic }
};

export default connect ( 
	mapStateToProps,
	{ changePic }
)(Calendar);