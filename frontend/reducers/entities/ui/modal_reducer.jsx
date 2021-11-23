import { OPEN_MODAL, CLOSE_MODAL } from '../../../actions/modal_actions'

const modalReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case OPEN_MODAL:
      return nextState = "";
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer