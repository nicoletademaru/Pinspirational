import React from 'react';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const { pin, pinboards, handleClick, handleSave } = this.props;

    return (
      <div className='pin-index-item'>
        <figure>
          <div className='test-container'>
          <form className='create-pinning-form' onSubmit={handleSave}>
            <h1 className='pinboard-pinning'>{pinboards[0].title}</h1>
            <button className='save-pin'>Save</button>
          </form>
          </div>
          <img
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

