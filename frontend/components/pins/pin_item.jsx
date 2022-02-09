import React from 'react';
import PinningForm from './pinning_create';

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
            <PinningForm
              pinId={pin.id}
              pinboards={pinboards}
              handlePinning={handlePinning}
              handleSave={handleSave}/>
            : 
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

