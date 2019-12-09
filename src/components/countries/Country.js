import React from "react";
import { connect } from "react-redux";
import './country.css';
/*
let continentCssMap = new Map();
	continentCssMap.set("Europe", "blue");
	continentCssMap.set("North America", "red");
	continentCssMap.set("South America", "green");
	continentCssMap.set("Africa", "yellow");
	continentCssMap.set("Asia", "orange");
	continentCssMap.set("Antarctica", "violet");
	continentCssMap.set("Australia", "brown");
*/

	//chain map set calls
	let continentCssMap = new Map();
	continentCssMap.set("Europe", "europe")
	.set("North America", "north-america")
	.set("South America", "south-america")
	.set("Africa", "africa")
	.set("Asia", "asia")
	.set("Antarctica", "antarctica")
	.set("Australia", "australia");

const Country = ({ country }) => (
	<tr className="country-item">
		<td> <a country={ country.name }> {country.name} </a></td>
		<td><a month= { getMonthText( country.month_visited ) }> { getMonthText( country.month_visited )} </a></td>
		<td> <a decade={ getDecade(country.year_visited) }> { country.year_visited } </a></td>
		<td> <a continent={ continentCssMap.get(country.continent) }>{ country.continent }</a></td>
	</tr>
);

function getDecade(year) {
	return year.substring(0,3);
}
function getMonthText(month) {
	switch(month) {
		case 1:
			return "January";
		case 2:
			return "Febuary";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";	
		default:
			return "Mystery Month";
	}
}

export default connect(
	null,
	null
)(Country);