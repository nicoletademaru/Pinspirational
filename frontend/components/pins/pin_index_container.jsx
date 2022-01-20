import PinIndex from "./pin_index";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestPins } from '../../actions/pin_actions'
import { requestUsers } from "../../actions/users_actions";
import { requestPinboards } from "../../actions/pinboard_actions"

const mSTP = state => ({
  pins: Object.keys(state.entities.pins).map(key => state.entities.pins[key])
})

const mDTP = dispatch => ({
  requestPins: () => dispatch(requestPins()),
  requestUsers: () => dispatch(requestUsers()),
  requestPinboards: () => dispatch(requestPinboards)
})

export default withRouter(connect(mSTP,mDTP)(PinIndex))