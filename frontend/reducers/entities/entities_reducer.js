import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import PinsReducer from "./pins_reducer";
import PinboardsReducer from "./pinboards_reducer";
import PinningsReducer from "./pinnings_reducer";

export default combineReducers({
  users: UsersReducer,
  pins: PinsReducer,
  pinboards: PinboardsReducer,
  pinnings: PinningsReducer,
});