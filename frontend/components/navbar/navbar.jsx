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


    render() {
      const { currUser } = this.props;
      return (
        <div className='navbar'>
          <div className='left-nav'>
            <img className='logo' src={logoUrl} alt="logo" />
            { currUser ?
                <button
                  className='home-button'
                  onClick={this.homeClick}>
                Home</button>
              :
                <p>Pinspiration</p>
            }
          </div>
          <ul className='right-navbar'>
            <RightNavContainer />
          </ul>
        </div>
      )
    }
}
// export default Navbar

const mSTP = state => ({
  currUser: state.session.id
})

export default withRouter(connect(mSTP)(Navbar));