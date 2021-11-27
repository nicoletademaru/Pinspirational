import PinIndex from "./pin_index";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestPins } from '../../actions/pin_actions'

const mSTP = state => ({
  pins: Object.keys(state.entities.pins).map(key => state.entities.pins[key])
})

const mDTP = dispatch => ({
  requestPins: () => dispatch(requestPins())
})

export default withRouter(connect(mSTP,mDTP)(PinIndex))