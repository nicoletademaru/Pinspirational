import { connect } from "react-redux";
import PinShow from "./pin_show";
import { openModal } from "../../actions/modal_actions";
import { requestPin } from "../../actions/pin_actions";

const mSTP = ( state, ownProps ) => {
  let pin = state.entities.pins[ownProps.match.params.pinId]
  console.log(state)
  console.log(ownProps)

  return {
    pin: pin,
    pinId: ownProps.match.params.pinId,
    sessionId: state.session.id,
    users: state.entities.users,
  }
};

const mDTP = dispatch => ({
  requestPins: id => dispatch(requestPin(id)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP,mDTP)(PinShow);