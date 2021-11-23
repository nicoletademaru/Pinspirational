import React from "react";

const Splash = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
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