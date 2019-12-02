import { ADD_SONG, DELETE_SONG } from "../actionTypes";

const initialState = {
						songs: [ {
									name: "Snow (Hey Oh)",
									guitarist: "John Frusciante",
									img_src: "https://assets.radiox.co.uk/2018/04/john-frusciante-with-red-hot-chili-peppers-in-2006-1517578088-article-0.jpg",
									difficulty: 7,
									key: "G#m",
									tempo: 105
								},
								{
									name: "Nothing Else Matters",
									guitarist: "Kirk Hammett",
									img_src: "https://townsquare.media/site/366/files/2017/06/Metallica-Metlife-Loudwire-IMG-02.jpg?w=980&q=75",
									difficulty: 5,
									key: "E",
									tempo: 142
								},
								{
									name: "Who Do You Think I Was",
									guitarist: "John Mayer",
									img_src: "http://thumbor-prod-us-east-1.photo.aws.arc.pub/-a1IH0mFdUrO_RijHLdWbfjdoIE=/arc-anglerfish-arc2-prod-dmn/public/QUCQFCK3WEVDHKELMUTKNKAUF4.jpg",
									difficulty: 4,
									key: "D",
									tempo: 96
								},
								{
									name: "7empest",
									guitarist: "Adam Jones",
									img_src: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-217398-GettyImages-2297627.jpg?resize=900,600&w=450",
									difficulty: 5,
									key: "G",
									tempo: 145
								},
								{
									name: "Little Wing",
									guitarist: "Jimi Hendrix",
									img_src: "https://www.rollingstone.com/wp-content/uploads/2018/11/jimi-hendrix-performing-in-1969.jpg?resize=900,600&w=450",
									difficulty: 8,
									key: "G",
									tempo: 90
								}
							  ]
					 };

export default function(state = initialState, action) {
	switch(action.type) {
		case ADD_SONG: {
			return { ...state.songs };
		}
		case DELETE_SONG: {
			return { ...state.songs };
		}
		default:
			return state;
	}
}