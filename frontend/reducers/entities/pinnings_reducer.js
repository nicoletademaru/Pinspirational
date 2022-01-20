import { RECEIVE_PINNING, REMOVE_PINNING } from "../../actions/pinning_actions";

const PinningsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PINNING:
      nextState[action.pinning.id] = action.pinning;
      return nextState;
    case REMOVE_PINNING:
      delete nextState[action.pinningId];
      return nextState;
    default:
      return state;
  }
}

export default PinningsReducer;