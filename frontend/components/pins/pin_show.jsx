import React from 'react';
import { UserInfo } from '../users/user_info';

class PinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestPin(this.props.pinId)
    this.props.requestUsers();
  }

  render() {
    if (!this.props.pin) {
      return null
    }

    const { pin, sessionId, openModal, users } = this.props;

    return (
      <div className='pin-show-page'>
          <div className='pin-show-left'>
            <img className='pin-show-photo' src={pin.photoUrl} alt="photo" />
          </div>
          <div className='pin-show-right'>
            <div className='pin-edit'>
            {sessionId == users[pin.author_id].id ?
                <button onClick={()=> openModal('edit-pin')}>Edit</button> : "" }
            </div>
            <div className='right-show-details'>
              <div className='pin-details'>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                
              </div>
              <div className='pin-owner-info'>
                <UserInfo user={users[pin.author_id]} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default PinShow