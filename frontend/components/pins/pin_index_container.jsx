import PinIndex from "./pin_index";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestPins } from '../../actions/pin_actions'
import { requestUsers, requestUser } from "../../actions/users_actions";

const mSTP = state => ({
  pins: Object.keys(state.entities.pins).map(key => state.entities.pins[key]),
  pinboards: Object.keys(state.entities.pinboards).map(key => state.entities.pinboards[key]),
  userId: state.session.id,
})

const mDTP = dispatch => ({
  requestPins: () => dispatch(requestPins()),
  requestUsers: () => dispatch(requestUsers()),
  requestUser: id => dispatch(requestUser(id)),
})

export default withRouter(connect(mSTP,mDTP)(PinIndex))