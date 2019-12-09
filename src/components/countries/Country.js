import React from "react";
import { connect } from "react-redux";
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
	continentCssMap.set("Europe", "blue")
	.set("North America", "red")
	.set("South America", "green")
	.set("Africa", "yellow")
	.set("Asia", "orange")
	.set("Antarctica", "violet")
	.set("Australia", "brown");

const Country = ({ country }) => (
	<tr className="country-item">
		<td>{ country.name }</td>
		<td>{ getMonthText( country.month_visited )}</td>
		<td>{ country.year_visited }</td>
		<td>{ country.continent }</td>
	</tr>
);

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

function getContinentCssBackgroundColor(continent) {
	return continentCssMap.get(continent);
}

function getContinentCssFontColor(continent) {

}

export default connect(
	null,
	null
)(Country);