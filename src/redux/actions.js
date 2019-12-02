import { TOGGLE_NAVIGATION, CHANGE_QUOTE, SET_COUNTRY_FILTER } from './actionTypes';

export const toggleNavigation = navigation => ({
	type: TOGGLE_NAVIGATION,
	payload: { } //empty payload
});

export const changeQuote = quote => ({
	type: CHANGE_QUOTE,
	payload: { } //empty payload
});

export const setCountriesFilter = filter => ({
	type: SET_COUNTRY_FILTER,
	payload: { filter }
});