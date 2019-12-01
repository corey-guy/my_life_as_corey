import { TOGGLE_NAVIGATION, CHANGE_QUOTE } from './actionTypes';

export const toggleNavigation = navigation => ({
	type: TOGGLE_NAVIGATION,
	payload: { } //empty payload
});

export const changeQuote = quote => ({
	type: CHANGE_QUOTE,
	payload: { } //empty payload
});