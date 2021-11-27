import { signup } from "../../actions/session_actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.session,
  formType: 'Signup',
  cta: "Continue"
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: user => dispatch(login(user)),
  processForm: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));