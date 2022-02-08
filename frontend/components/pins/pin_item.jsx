import React from 'react';
import PinningDropdown from './pinning_dropdown'

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props.pinboards) return null;

    const { pin, pinboards, handleClick, handleSave, handleRemove, handlePinning } = this.props;

    return (
      <div className='pin-index-item'>
        <figure>
          <div className='form-container'>{ pinboards.length > 0 ?
          <form className='create-pinning-form'>
            <PinningDropdown
              pin={pin.id}
              pinboards={pinboards}
              handlePinning={handlePinning}/>
            <button id={pin.id} onClick={handleSave} className='save-btn'>Save</button>
          </form> : 
          <button id={pin.pinning} onClick={handleRemove} className='remove-pin'>Remove</button> }
          </div>
          <img className='pin-img'
            key={pin.id}
            id={pin.id}
            src={pin.photoUrl}
            alt="photo"
            onClick={handleClick}
          />        
          <figcaption>{pin.title}</figcaption>
        </figure>
      </div>
    )
  }
};

export default PinIndexItem;

