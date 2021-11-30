import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createPin } from "../../actions/pin_actions";
import PinCreateForm from "./pin_create_form";

const mSTP = state => ({
  errors: state.errors,
  authorId: state.session.id,
})

const mDTP = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
})

export default withRouter(connect(mSTP,mDTP)(PinCreateForm))