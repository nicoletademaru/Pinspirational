import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pin } = this.props;

    return (
      <div className='pin-show-page'>
          <div className='pin-show-left'>
            <img className='pin-show-photo' src={pin.media} alt="photo" />
          </div>
          <div className='pin-show-right'>
            <div className='pin-details'>
              <h1>{pin.title}</h1>
              <p>{pin.description}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default PinShow