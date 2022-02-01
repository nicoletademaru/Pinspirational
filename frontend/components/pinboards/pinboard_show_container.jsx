import { connect } from "react-redux";
import { withRouter } from "react-router";
import PinboardShow from "./pinboard_show";
import { requestPinboard } from "../../actions/pinboard_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  let currPinboardId = ownProps.match.params.pinboardId

  return {
    pinboard: state.entities.pinboards[currPinboardId],
    pins: Object.keys(state.entities.pinnings).map(key => state.entities.pinnings[key]),
    sessionId: state.session.id,
    pinboardId: currPinboardId,
  }
};

const mDTP = dispatch => ({
  requestPinboard: id => dispatch(requestPinboard(id)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mSTP, mDTP)(PinboardShow));