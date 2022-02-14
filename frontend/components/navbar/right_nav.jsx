import React from "react";

class RightNav extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.createPin = this.createPin.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}/pinboards`)
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

  createPin(e) {
    e.preventDefault();
    this.props.history.push('/pins')
  }

  createPinboard(e) {
    e.preventDefault();
    this.props.history.push('/pins')
  }


  greeting() {
    let { logout, openModal} = this.props;
    return (
      <div className="header-group">
        <div className="header-user-icon">
          <img 
            src={this.props.currentUser.profile_pic}
            alt="profile_pic"
            onClick={this.handleClick}
          />
        </div>
        <div className='dropdown'>
          <img className="dropdown-btn nav-btn" 
              src={downArrowUrl}
          />
          <div className='dropdown-content nav-content'>
            <div className='user-shortcut' onClick={this.handleClick}>
              <img 
                src={this.props.currentUser.profile_pic} 
              />
              <h1>{this.props.currentUser.username}</h1>
              <p>Profile</p>
            </div>
            <div className='drop-item nav-item'>
              <button className="header-button" onClick={this.createPin}>Create Pin</button>
            </div>
            <div className='drop-item nav-item'>
              <button className="header-button" onClick={()=> openModal('pinboard')}>Create Pinboard</button>
            </div>
            <div className='drop-item nav-item logout'>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
            </div>
          </div>
      </div>
  )};

  render() {
    const { currentUser, logout } = this.props;
    return (
      currentUser ?
        this.greeting(currentUser, logout) :
        this.sessionLinks()
    );
  }
}

export default RightNav;