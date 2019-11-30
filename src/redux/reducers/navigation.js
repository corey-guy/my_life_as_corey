import { TOGGLE_NAVIGATION } from "../actionTypes";

const initialState = {
						visible: false
					 };

export default function(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_NAVIGATION: {
			return visible: !state.visible;
		}
		default:
			return state;
	}
}