import React from "react";

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

        <button id="close-signup" onClick={e => this.onClose(e)}>SX</button>
      </div>)
  }
}
export default SignupModal;