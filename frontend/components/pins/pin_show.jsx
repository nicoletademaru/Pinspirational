import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pins, pinId } = this.props;
    let currPin = pins[pinId];

    console.log(currPin)

    return (
      <div className='pin-show-page'>
        <div className='pin-show-element'>
          <div className='pin-show-left'>
            <img src={currPin.media} alt="photo" />
          </div>
          <div className='pin-show-right'>
            <h1>{currPin.title}</h1>
            <p>{currPin.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PinShow