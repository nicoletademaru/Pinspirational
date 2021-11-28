import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PinShow from "./pin_show";

const mSTP = state => ({
  pins: Object.keys(state.entities.pins).map(key => state.entities.pins[key])
});

const mDTP = dispatch => ({
  requestPin: pin => dispatch(requestPin(pin))
});

export default withRouter(connect(mSTP,mDTP)(PinShow));