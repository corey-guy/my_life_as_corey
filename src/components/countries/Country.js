import React from "react";
import { connect } from "react-redux";

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

export default connect(
	null,
	null
)(Country);