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
    let { logout } = this.props;
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
          <img className="dropdown-btn" 
              src={downArrowUrl}
          />
          <div className='dropdown-content'>
            <div className='user-shortcut'>
              <img 
                src={this.props.currentUser.profile_pic} 
              />
              <h1>{this.props.currentUser.username}</h1>
            </div>
            <div className='drop-item'>
              <p  >Notifications</p>
            </div>
            <div className='drop-item'>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
            
            {/* <Link className='drop-item'>
              <div >Discover Page</div>
            </Link>
            <Link className='drop-item'>
              <div  >Create a Project</div>
            </Link> */}
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