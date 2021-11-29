import React from 'react';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const { pin, handleClick } = this.props;
    return (
      <div className='pin-index-item'>
        <figure>
          <img
            id={pin.id}
            src={pin.media}
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

