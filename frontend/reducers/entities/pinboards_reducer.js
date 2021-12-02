import { RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from "../../actions/pinboard_actions";

const PinboardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return action.pinboards;
    case RECEIVE_BOARD:
      nextState[action.pinboard.id] = action.pinboard;
      return nextState;
    case REMOVE_BOARD:
      delete nextState[action.pinboardId];
      return nextState;
    default:
      return state;
  }
}

export default PinboardsReducer;