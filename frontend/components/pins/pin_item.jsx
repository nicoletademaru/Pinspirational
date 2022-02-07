import React from 'react';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props.pinboards) return null;

    const { pin, pinboards, handleClick, handleSave, handleRemove, pinning } = this.props;

    return (
      <div className='pin-index-item'>
        <figure>
          <div className='form-container'>
          { pinboards.length > 0 ?
          
          <form className='create-pinning-form'>
            <div className='dropdown'>
              <h1 className='dropdown-btn pinboard-pinning'>{pinboards[0].title}</h1> 
              <i className="fas fa-chevron-down"></i>
              <div className='dropdown-content create-content'>
                <h2>Save to pinboard</h2>
                <h1>All pinboards</h1>
                <div>
                  <p className='drop-item create-item'onClick={()=> openModal('pinboard')}>Board</p>
                </div>
                <div className='bottom'></div>
              </div>
            </div>

            <button 
              onClick={handleSave}
              className='save-pin'
              id={pin.id}
              >Save</button>
          </form> : <button 
              onClick={handleRemove}
              className='remove-pin'
              id={pin.pinning}
              >Remove</button> }
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

