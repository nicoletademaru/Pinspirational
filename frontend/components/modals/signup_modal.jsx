import React from "react";
import SignupContatiner from "../sessions/signup_contatiner";

class SignupModal extends React.Component {

  onClose(e) {
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    {
      if (!this.props.show)
        return null;
    }
    return (
      <div>
        <SignupContatiner />
        <button id="close-signup" onClick={e => this.onClose(e)}>X</button>
      </div>)
  }
}

export default SignupModal;