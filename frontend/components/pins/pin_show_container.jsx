import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PinShow from "./pin_show";

const mSTP = ( state, { match } ) => ({
  pins: Object.keys(state.entities.pins).map(key => state.entities.pins[key]),
  pinId: parseInt(match.params.benchId)
});

const mDTP = dispatch => ({
  requestPin: id => dispatch(requestPin(id))
});

export default withRouter(connect(mSTP,mDTP)(PinShow));