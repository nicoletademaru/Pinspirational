import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createPin } from "../../actions/pin_actions";
import PinCreateForm from "./pin_create_form";

const mSTP = state => {
  let currUserId = state.session.id;
  return {
    errors: state.errors,
    currUser: state.entities.users[currUserId],
    authorId: currUserId,
  }
}

const mDTP = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
})

export default withRouter(connect(mSTP,mDTP)(PinCreateForm))