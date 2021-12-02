import { connect } from "react-redux";
import { withRouter } from "react-router";
import PinboardShow from "./pinboard_show";
import { requestPinboard } from "../../actions/pinboard_actions";

const mSTP = (state, ownProps) => {
  return {
    pinboard: state.entities.pinboards[ownProps.match.params.pinboardId],
    sessionId: state.session.id,
  }
};

const mDTP = dispatch => ({
  requestPinboard: id => dispatch(requestPinboard(id)),
});

export default withRouter(connect(mSTP, mDTP)(PinboardShow));