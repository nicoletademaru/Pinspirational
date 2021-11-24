import { login } from "../../actions/session_actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import SessionForm from "./session_form"
import React from 'react';


const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.session,
  formType: 'Login',
  cta: "Log in"
})

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup 
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP,mDTP)(SessionForm));