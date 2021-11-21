import React from "react";

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
        
        <button id="close-login" onClick={e => this.onClose(e)}>X</button>
      </div>)
  }
}
export default LoginModal;