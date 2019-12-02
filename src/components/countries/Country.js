import React from "react";
import { connect } from "react-redux";

const Country = ({ country }) => (
	<tr className="country-item">
		<td>{ country.name }</td>
		<td>{ country.month_visited }</td>
		<td>{ country.year_visited }</td>
		<td>{ country.continent }</td>
	</tr>
);

export default connect(
	null,
	null
)(Country);