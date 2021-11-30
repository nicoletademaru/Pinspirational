import { connect } from "react-redux";
import PinShow from "./pin_show";

const mSTP = ( state, ownProps ) => {
  let pin = state.entities.pins[ownProps.match.params.pinId]
  return {
    pin: pin,
    user: state.entities.users[pin.author_id],
  }
};

const mDTP = dispatch => ({
  requestPin: id => dispatch(requestPin(id))
});

export default connect(mSTP,mDTP)(PinShow);