import { timers } from 'jquery';
import React from 'react';
import { Modal } from '../../components/modals/modal';
import { UserInfo } from '../users/user_info';

class PinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.pin) {
      this.props.history.push('/feed')
    }

    const { pin, sessionId, author, openModal } = this.props;
    return (
      <div className='pin-show-page'>
          <div className='pin-show-left'>
            <img className='pin-show-photo' src={pin.media} alt="photo" />
          </div>
          <div className='pin-show-right'>
            <div className='pin-edit'>
              { sessionId === author.id ? 
                <button onClick={()=> openModal('edit-pin')}>Edit</button> : "" }
            </div>
            <div className='right-show-details'>
              <div className='pin-details'>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                
              </div>
              <div className='pin-owner-info'>
                <UserInfo user={author} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default PinShow