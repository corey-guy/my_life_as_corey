import { combineReducers } from "redux";
import comments from "./comments";
import navigation from "./navigation";

export default combineReducers({ comments, navigation });