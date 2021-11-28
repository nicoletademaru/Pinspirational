import { connect } from "react-redux";
import PinShow from "./pin_show";

const mSTP = ( state, ownProps ) => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
});

const mDTP = dispatch => ({
  requestPin: id => dispatch(requestPin(id))
});

export default connect(mSTP,mDTP)(PinShow);