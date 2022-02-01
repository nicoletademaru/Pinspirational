import React from 'react';
import PinboardItem from './user_pinboard_item';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.createPin = this.createPin.bind(this);
    this.handleClick= this.handleClick.bind(this);
  };

  createPin(e) {
    e.preventDefault();

    this.props.history.push('/pins')
  }

  handleClick(e) {
    e.preventDefault;
    this.props.history.push(`/pinboards/${e.target.id}/pinnings`)
  }

  componentDidMount() {
    this.props.requestUser(this.props.userId)
  }


  render() {
    const { pinboards, openModal } = this.props;
    return (
      <div className='users-show-page'>
        <div className='user-show-info'>
          <img src={this.props.user.profile_pic} alt="profile_pic" />
          <h1>{this.props.user.username}</h1>
        </div>
        <div>
            <img className='plus-img'
              src={plusUrl}
              onClick={this.createPin}
            />
            <img className='plus-img' 
              src={plusUrl} 
              onClick={()=> openModal('pinboard')}/>
          </div>
        <div className='pinboard-items'>
          <ul>
            { pinboards.map((pinboard) => 
              <PinboardItem 
                key={pinboard.id}
                pinboard={pinboard}
                handleClick={this.handleClick}/>
            )}
          </ul>
        </div>
      </div>
    )
  };
};

export default UserShow;