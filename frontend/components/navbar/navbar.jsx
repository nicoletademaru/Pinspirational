import RightNavContainer from "./right_nav_container"
import React from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

  class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.homeClick = this.homeClick.bind(this);
    };

    homeClick(e) {
      e.preventDefault();
    
      this.props.history.push('/feed')
    }

    handleClick(e) {
      e.preventDefault();
      this.props.history.push(`/users/${this.props.currentUser.id}/pinboards`)
    }

    render() {
      const { currUser } = this.props;
      return (
        <div className='navbar'>
          <div className='left-nav'>
            <img className='navbar-logo' src={logoUrl} alt="logo" />
            { currUser ?
                <button
                  className='left-nav-item'
                  id='home-btn'
                  onClick={this.homeClick}
                  style={this.props.history.location.pathname === '/feed' ? {backgroundColor:'#292929',color:'white'} : {color:'black'}}>
                Home</button>
              :
                <p>Pinspiration</p>
            }
            <input type="checkbox" id='connect-btn'/>
            <label className='left-nav-item' htmlFor='connect-btn'>Connect</label>
            <a className='left-nav-item social'
            href='https://www.linkedin.com/in/nicole-tademaru-7800abb7/'>LinkedIn</a>
            <a className='left-nav-item social'
            href='https://github.com/nicoletademaru'>Github</a>

          </div>
          <ul className='connect-button right-navbar'>
            <RightNavContainer />
          </ul>
        <div className='underline'></div>
        </div>
      )
    }
}
// export default Navbar

const mSTP = state => ({
  currUser: state.session.id
})

export default withRouter(connect(mSTP)(Navbar));