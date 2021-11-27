import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PinsReducer from "./pins_reducer";

export default combineReducers({
  users: UsersReducer,
  pins: PinsReducer,
});