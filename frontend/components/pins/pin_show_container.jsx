import { connect } from "react-redux";
import PinShow from "./pin_show";
import { openModal } from "../../actions/modal_actions";
import { requestPin } from "../../actions/pin_actions";
import { requestUsers, requestUser } from "../../actions/users_actions"

const mSTP = ( state, ownProps ) => {
  let pin = state.entities.pins[ownProps.match.params.pinId]

  return {
    pin: pin,
    pins: state.entities.pins,
    pinId: ownProps.match.params.pinId,
    sessionId: state.session.id,
    users: state.entities.users,
    pinboards: Object.keys(state.entities.pinboards).map(key => state.entities.pinboards[key]),
  }
};

const mDTP = dispatch => ({
  requestPin:id => dispatch(requestPin(id)),
  openModal: modal => dispatch(openModal(modal)),
  requestUsers: () => dispatch(requestUsers()),
  requestUser: id => dispatch(requestUser(id))
});

export default connect(mSTP,mDTP)(PinShow);