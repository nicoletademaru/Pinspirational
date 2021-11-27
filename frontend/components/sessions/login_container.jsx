import { login } from "../../actions/session_actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import SessionForm from "./session_form"
import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.session,
  formType: 'Login',
  cta: "Log in"
})

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  demoLogin: user => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP,mDTP)(SessionForm));