import React from 'react';

class SessionFormFooter extends React.Component {
  constructor(props) {
    super(props)
    this.openModal = this.props.openModal.bind(this)
  }

  render() {
    return (
    <div className='modal-footer'>
      <p>&nbsp;OR&nbsp;</p>
      <button onClick={this.props.handleDemo}>Continue with Demo</button>
      {this.props.formType === 'Login'
        ? <a onClick={() => this.openModal('signup')}>
          Not on Pinspiration yet? Sign up</a>
        : <a onClick={() => this.props.openModal('login')}>
          Already a member? Log in</a>}
    </div>
    )
  }
}
export default SessionFormFooter;