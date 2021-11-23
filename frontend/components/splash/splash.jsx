import React from "react";

const Splash = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className='login-button'onClick={() => openModal('login')}>Log in</button>
      &nbsp;&nbsp;
      <button className='signup-button' onClick={() => openModal('signup')}>Sign up</button>
    </nav>
  );
  const greeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
      greeting(currentUser, logout) :
      sessionLinks()
  );
}

export default Splash;