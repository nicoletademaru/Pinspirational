import React from 'React';

const SessionFormFooter = ({handleDemo , openModal}) => {
  return ( 
    <div className='modal-footer'>
      <p>&nbsp;OR&nbsp;</p>
      <button onClick={handleDemo}>Continue with Demo</button>
      {this.props.formType === 'Login'
        ? <a onClick={() => openModal('signup')}>
          Not on Pinspiration yet? Sign up</a>
        : <a onClick={() => openModal('login')}>
          Already a member? Log in</a>}
    </div>
  )
}

export default SessionFormFooter