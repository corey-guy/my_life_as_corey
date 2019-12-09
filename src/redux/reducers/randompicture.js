import { CHANGE_PIC } from "../actionTypes";
const initialState = {
						pic_url: "https://picsum.photos/200/300"
					 };

export default function(state = initialState, action) {
	switch(action.type) {
		case CHANGE_PIC: {
			return { pic_url: action.pic };
		}
		default:
			return state;
	}
}