import React from 'react';
import CountryList from './countries/CountryList';

export class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<h2>If Boston is not my home, what is?</h2>
				<h3>Click to see my all the places I've visited.</h3>
				<table>
					<CountryList/>
				</table>
			</div>
		);
	}
}
