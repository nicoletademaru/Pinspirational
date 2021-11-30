import React from "react";

class RightNav extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  sessionLinks() {
    const { openModal } = this.props;
    return (
      <nav className="login-signup">
        <button className='login-button'onClick={() => openModal('login')}>Log in</button>
        &nbsp;&nbsp;
        <button className='signup-button' onClick={() => openModal('signup')}>Sign up</button>
      </nav> )
  }
  greeting() {
    return (
      <hgroup className="header-group">
        <div className="header-user-icon">
          <img 
            src={this.props.currentUser.profile_pic}
            alt="profile_pic"
            onClick={this.handleClick}
          />
        </div>
        {/* <button className="header-button" onClick={logout}>Log Out</button> */}
      </hgroup>
  )};

  render() {
    const { currentUser } = this.props;
    return (
      currentUser ?
        this.greeting(currentUser, logout) :
        this.sessionLinks()
    );
  }
}

export default RightNav;