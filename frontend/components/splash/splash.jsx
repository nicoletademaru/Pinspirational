import React from "react";
import LoginModal from "./modals/login_modal";
import SignupModal from "./modals/signup_modal";
import "./splash.css"

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      showSignUp: false,
    }

    this.showModal = this.showModal.bind(this)
  }

  showModal(e) {
    if (e.target.id === 'login' || e.target.id === 'close-login') {
      this.setState({ showLogin: !this.state.showLogin })
    } else if (e.target.id === 'signup' || e.target.id === 'close-signup') {
      this.setState({ showSignup: !this.state.showSignup })
    }
  }
  
  render() {
    return (
      <div className='splash'>
        <button id="login" onClick={this.showModal}>Login</button>
        <button id="signup" onClick={this.showModal}>Signup</button>
        <LoginModal onClose={this.showModal} show={this.state.showLogin} />
        <SignupModal onClose={this.showModal} show={this.state.showSignup} />
      </div>
    )
  }
}

export default Splash;