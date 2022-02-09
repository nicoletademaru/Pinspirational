import React from 'react';
import { UserInfo } from '../users/user_info';
import PinningForm from './pinning_create';

class PinShow extends React.Component {
  constructor(props) {
    super(props)

    this.handlePinning = this.handlePinning.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    this.props.requestUser(this.props.sessionId)
    this.props.requestPin(this.props.pinId)
    this.props.requestUsers();
  }

  handlePinning(e, pinboard, pin) {
    e.preventDefault();

    let pinning = {}
    pinning["pin_id"] = pin;
    pinning["pinboard_id"] = pinboard;
    let btnId = ""+pinboard+pin

    let ele = document.getElementById(btnId)
    ele.innerHTML = "Saved"
    ele.style.backgroundColor ='black'
    // this.props.createPinning(pinning)
  }

  handleSave(e) {
    e.preventDefault();
  }
  render() {
    if (!this.props.pin) return null;

    const { pin, sessionId, openModal, users, pinboards} = this.props;

    return (
      <div className='pin-show-page'>
          <div className='pin-show-left'>
            <img className='pin-show-photo' src={pin.photoUrl} alt="photo" />
          </div>
          <div className='pin-show-right'>
            <div className='pin-edit'>
            {sessionId == users[pin.author_id].id ?
                <i className="fas fa-edit edit-pin-btn" onClick={()=> openModal('edit-pin')}></i> : "" }
            </div>
            <div className='pin-show-pinning'>
              <PinningForm
                pinId={pin.id}
                pinboards={pinboards}
                handlePinning={this.handlePinning}
                handleSave={this.handleSave}
              />
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