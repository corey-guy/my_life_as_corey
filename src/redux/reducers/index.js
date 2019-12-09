import { combineReducers } from "redux";
import comments from "./comments";
import navigation from "./navigation";
import quotes from "./quotes";
import countries from "./countries";
import music from "./music";
import randompicture from "./randompicture";

export default combineReducers({ comments, navigation, quotes, countries, music, randompicture });