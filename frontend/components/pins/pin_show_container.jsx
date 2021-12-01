import { connect } from "react-redux";
import PinShow from "./pin_show";
import { openModal } from "../../actions/modal_actions";
import { requestPin } from "../../actions/pin_actions";

const mSTP = ( state, ownProps ) => {
  let pin = state.entities.pins[ownProps.match.params.pinId]

  return {
    pin: pin,
    sessionId: state.session.id,
    author: state.entities.users[pin.author_id],
  }
};

const mDTP = dispatch => ({
  requestPin: id => dispatch(requestPin(id)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP,mDTP)(PinShow);