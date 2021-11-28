import React from 'react';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    const { pin, handleClick } = this.props;
    return (
      <div>
        <img
          id={pin.id}
          src={pin.media}
          alt="photo"
          onClick={handleClick}
        />
        <h1>{pin.title}</h1>
      </div>
    )
  }
};

export default PinIndexItem;

