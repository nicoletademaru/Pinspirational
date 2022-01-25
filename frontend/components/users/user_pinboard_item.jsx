import React from 'react';

class PinboardItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pinboard, handleClick } = this.props;
    let pins = [];
    if (pinboard.pins != undefined) {
      pins = Object.keys(pinboard.pins).map(key => pinboard.pins[key])}

    return (
      <div className='pinboard-index-item'>
        <div className='pinboard-preview'>
          { pins.length > 0 ? 
            <img className='left-photo'
              src={pins[0].photoUrl}
              alt="photo"
              onClick={handleClick}
              /> : " " }
          { pins.length > 1 ? 
            <img className='mid-photo'
              src={pins[1].photoUrl}
              alt="photo"
              onClick={handleClick}
              /> : " " }
          { pins.length > 0 ? 
            <img className='right-photo'
              src={pins[2].photoUrl}
              alt="photo"
              onClick={handleClick}
              /> : " " }
        </div>
        <p>{pinboard.title}</p>

      </div>
    )
  }
}

export default PinboardItem;