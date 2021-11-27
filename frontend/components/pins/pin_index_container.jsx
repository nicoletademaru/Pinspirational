import { connect } from "react-redux";
import { requestPins } from '../../actions/pin_actions'
import PinIndex from "./pin_index";

const mSTP = state => ({
  pins: state.pins
})

const mDTP = dispatch => ({
  requestPins: () => dispatch(requestPins())
})

export default connect(mSTP,mDTP)(PinIndex)