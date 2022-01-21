import { RECEIVE_BOARD } from "../../actions/pinboard_actions";
import { RECEIVE_PINNING, REMOVE_PINNING } from "../../actions/pinning_actions";

const PinningsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PINNING:
      nextState[action.pinning.id] = action.pinning;
      return nextState;
    case RECEIVE_BOARD:
      nextState = action.pinboard.pinnings;
      return nextState;
    case REMOVE_PINNING:
      delete nextState[action.pinningId];
      return nextState;
    default:
      return state;
  }
}

export default PinningsReducer;