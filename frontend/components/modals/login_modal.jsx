import React from "react";
import LoginContainer from "../sessions/login_container";

class LoginModal extends React.Component {
  constructor(props) {
    super(props)
  }
  
  onClose(e) {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    {if (!this.props.show)
      return null;
    }
    return (
      <div>
        <LoginContainer />
        <button id="close-login" onClick={e => this.onClose(e)}>X</button>
      </div>)
  }
}
export default LoginModal;