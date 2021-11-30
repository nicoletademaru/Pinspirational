import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className='users-show-page'>
        <img src={this.props.user.profile_pic} alt="profile_pic" />
        <h1>{this.props.user.username}</h1>
      </div>
    )
  };
};

export default UserShow;