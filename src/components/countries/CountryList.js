import React from "react";
import Country from "./Country";
import { connect } from "react-redux";
import { getCountries, getCountriesFilter, getCountriesByFilter } from "../../redux/selectors"
import { COUNTRY_FILTERS } from "../../constants";
import { setCountriesFilter } from "../../redux/actions";

const CountryList = ( { countriesByFilter, setCountriesFilter, filter} ) => (
	<div>
		<tr>
			<th id='country-table-name-header' onClick={() => { setCountriesFilter( COUNTRY_FILTERS.NAME ) } }>Country</th>
			<th id='country-table-month-header' onClick={() => { setCountriesFilter( COUNTRY_FILTERS.TIME_VISITED ) } }>Month visited</th>
			<th id='country-table-year-header' onClick={() => { setCountriesFilter( COUNTRY_FILTERS.TIME_VISITED ) } } >Year visited</th>
			<th id='country-table-continent-header' onClick={() => { setCountriesFilter( COUNTRY_FILTERS.CONTINENT ) } }>Continent</th>
		</tr>
		{countriesByFilter && countriesByFilter.length && filter
			? countriesByFilter.map((country, index) => {
					return <Country key={`country-${country.name}-${country.year_visited}`} country={country} />;
			})
			: "No countries present" }
	</div>
);

const mapStateToProps = state => {
	const filter = getCountriesFilter(state);
	const countriesByFilter = getCountriesByFilter(state, filter);
	return { countriesByFilter, filter }
};

export default connect(
	mapStateToProps, 
	{ setCountriesFilter } 
)(CountryList);