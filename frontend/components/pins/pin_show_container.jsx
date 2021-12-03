import { connect } from "react-redux";
import PinShow from "./pin_show";
import { openModal } from "../../actions/modal_actions";
import { requestPin } from "../../actions/pin_actions";
import { requestUsers } from "../../actions/users_actions"

const mSTP = ( state, ownProps ) => {
  let pin = state.entities.pins[ownProps.match.params.pinId]

  return {
    pin: pin,
    pins: state.entities.pins,
    pinId: ownProps.match.params.pinId,
    sessionId: state.session.id,
    users: state.entities.users,
  }
};

const mDTP = dispatch => ({
  requestPin:id => dispatch(requestPin(id)),
  openModal: modal => dispatch(openModal(modal)),
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mSTP,mDTP)(PinShow);