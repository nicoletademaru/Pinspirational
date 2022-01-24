import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.createPin = this.createPin.bind(this);
  };

  createPin(e) {
    e.preventDefault();

    this.props.history.push('/pins')
  }

  componentDidMount() {
    this.props.requestUser(this.props.userId)
  }


  render() {
    return (
      <div className='users-show-page'>
        <img src={this.props.user.profile_pic} alt="profile_pic" />
        <h1>{this.props.user.username}</h1>
        <div>
          <img className='plus-img'
            src={plusUrl}
            onClick={this.createPin}
          />
        </div>
      </div>
    )
  };
};

export default UserShow;