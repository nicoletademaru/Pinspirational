import React from 'react';
import { UserInfo } from '../users/user_info';

class PinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pin, user } = this.props;
    return (
      <div className='pin-show-page'>
          <div className='pin-show-left'>
            <img className='pin-show-photo' src={pin.media} alt="photo" />
          </div>
          <div className='pin-show-right'>
            <div className='right-show-details'>
              <div className='pin-details'>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                
              </div>
              <div className='pin-owner-info'>
                <UserInfo user={user} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default PinShow