import { CHANGE_QUOTE } from "../actionTypes";

const initialState = {
						quoteList: [ '"Walk this Way" - Aerosmith',
									 '"Who are you...who who, who who" - The Who',
									 '"I don’t tip because society says I have to. All right, if someone deserves a tip, if they really put forth an effort, I’ll give them a little something extra. But this tipping automatically, it’s for the birds. As far as I’m concerned, they’re just doing their job." - Mr. Pink',
									 '"That’s a pretty f****** good milkshake. I don’t know if it’s worth five dollars, but it’s pretty f****** good." - Vincent',
									 '"Oooh, that’s a bingo! Is that the way you say it? “That’s a bingo?”" - Col. Hans Landa',
									 '"Every journey begins with a single step." - basicbjab',
									 '"And we\'ll see you tomorrow night" - Jack Buck (game 6 of 1991 world series)',
									 '"It\s a long way to the top if you want to rock and roll" - AC/DC',
									 '"You can\'t always get what you want" - The Rolling Stones'
								    ],
						currQuote: '"Walk this Way" - Aerosmith'
					 };

export default function(state = initialState, action) {
	switch(action.type) {
		case CHANGE_QUOTE: {
			let index = Math.floor(Math.random() * initialState.quoteList.length);
			const newQuote = initialState.quoteList[index];
			return { ...state,
					 currQuote: newQuote
					};
		}
		default:
			return state;
	}
}