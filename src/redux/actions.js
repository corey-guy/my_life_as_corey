import { TOGGLE_NAVIGATION, CHANGE_QUOTE, SET_COUNTRY_FILTER, ADD_SONG, DELETE_SONG, CHANGE_PIC } from './actionTypes';

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

export const addSong = song => ({
	type: ADD_SONG,
	payload: { song }
});

export const deleteSong = song => ({
	type: DELETE_SONG,
	payload: { song }
});

export const changePic = pic => ({
	type: CHANGE_PIC,
	payload: { pic }
});