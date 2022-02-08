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
      <div className='pinboard-index-item' onClick={handleClick}>
        <div className='pinboard-preview'>
          <img className='left-photo'
            src= {pins.length > 0 ? pins[0].photoUrl : greyImg }
            alt="photo"
            id={pinboard.id}
          />
          <div className='right-photos'>
            <div className='right-photo'>
              <img 
                className={pins.length > 1 ? 'pinboard-img' : '.grey-img' }
                src= {pins.length > 1 ? pins[1].photoUrl : greyImg }
                alt="photo"
                id={pinboard.id}
              />
            </div>
            <div className='right-photo bottom-photo'>
              <img
                className={pins.length > 2 ? 'pinboard-img' : '.grey-img' }
                src= {pins.length > 2 ? pins[2].photoUrl : greyImg }
                alt="photo"
                id={pinboard.id}
              />
            </div>
          </div>
        </div>
        <p>{pinboard.title}</p>
      </div>
    )
  }
}

export default PinboardItem;