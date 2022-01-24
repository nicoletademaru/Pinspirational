import { RECEIVE_BOARD, REMOVE_BOARD } from "../../actions/pinboard_actions";
import { RECEIVE_USER } from "../../actions/users_actions";

const PinboardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user.pinboards;
    case RECEIVE_BOARD:
      nextState[action.pinboard.pinboard.id] = action.pinboard.pinboard;
      return nextState;
    case REMOVE_BOARD:
      delete nextState[action.pinboardId];
      return nextState;
    default:
      return state;
  }
}

export default PinboardsReducer;