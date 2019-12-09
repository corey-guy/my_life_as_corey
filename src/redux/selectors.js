export const getIsNavigationVisibile = store => store.navigation.visible;

export const getCurrQuote = store => store.quotes.currQuote;

export const getCountriesFilter = store => store.countries.filter;

export const getCountries = store => store.countries.list;

export const getCountriesByFilter = (store, filter) => {
	switch (filter) {
		case "name":
			return 	getCountries(store).sort((a, b) => (a.name > b.name) ? 1 : -1);
		case "time_visited":
			return getCountries(store).sort((a, b) => ((a.year_visited > b.year_visited) ) ? 1 : (a.year_visited === b.year_visited) ? ((a.month_visited > b.month_visited) ? 1 : -1) : -1);
		case "continent":
			return getCountries(store).sort((a,b) => ((a.continent) > b.continent) ? 1 : -1);
		default:
			return store.countries
	}
}

export const getSongs = store => store.music.songs;

export const getCurrPic = store => store.randompicture.pic_url;