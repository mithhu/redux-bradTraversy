import { combineReducers } from "redux";
import postReducer from "./postRedcuer";

export default combineReducers({
  posts: postReducer
});
