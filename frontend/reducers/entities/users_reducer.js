import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../../actions/users_actions";

const UsersReducer =  (state={}, action) => {
  Object.freeze(state);
  

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.user.id]: action.user.user })
    case RECEIVE_ALL_USERS: 
      return action.users;
    default:
      return state;
  }
}

export default UsersReducer;