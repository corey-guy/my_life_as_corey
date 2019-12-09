import { SET_COUNTRY_FILTER } from "../actionTypes";
import { COUNTRY_FILTERS } from "../../constants";
const initialState = {
						list: [ 
									{ name: "Brazil",
									  month_visited: 3,
									  year_visited: "2016",
									  continent: "South America"
									 },
									 { name: "Brazil",
									  month_visited: 2,
									  year_visited: "2017",
									  continent: "South America"
									 },
									 { name: "Brazil",
									  month_visited: 3,
									  year_visited: "2019",
									  continent: "South America"
									 },
									 { name: "Colombia",
									  month_visited: 9,
									  year_visited: "2018",
									  continent: "South America"
									 },
									 { name: "Ecuador",
									  month_visited: 11,
									  year_visited: "2018",
									  continent: "South America"
									 },
									 { name: "Estonia",
									  month_visited: 4,
									  year_visited: "2019",
									  continent: "Europe"
									 },
									 { name: "Finland",
									  month_visited: 4,
									  year_visited: "2019",
									  continent: "Europe"
									 },
									 { name: "Germany",
									  month_visited: 9,
									  year_visited: "2018",
									  continent: "Europe"
									 },
									 { name: "Mexico",
									  month_visited: 9,
									  year_visited: "1999",
									  continent: "North America"
									 },
									 { name: "Peru",
									  month_visited: 10,
									  year_visited: "2018",
									  continent: "South America"
									 },
									 { name: "Russia",
									  month_visited: 4,
									  year_visited: "2019",
									  continent: "Europe"
									 },
									 { name: "Sweden",
									  month_visited: 4,
									  year_visited: "2019",
									  continent: "Europe"
									 },
									 { name: "United States of America",
									  month_visited: 9,
									  year_visited: "1992",
									  continent: "North America"
									 }
								    ],
						filter: COUNTRY_FILTERS.NAME
					 };

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_COUNTRY_FILTER: {
			return { ...state,
					filter: action.payload.filter
				}
		}
		default:
			return state;
	}
}
/*
<div>
					<tr>
						<th>Country</th>
						<th>Month visited</th>
						<th>Year visited</th>
						<th>Continent</th>
					</tr>
*/