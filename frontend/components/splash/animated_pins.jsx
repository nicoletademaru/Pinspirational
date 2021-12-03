import React from 'react';


class AnimatedPins extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.pins) return null;
    let { pins, pinIds } = this.props;

    return (
      <div className='column-container'>
        { pinIds.map((pinId) => {
          return <ul className='splash-img'><img src={pins[pinId].photoUrl} alt="pin-img" /></ul>}
        )}
      </div>
    )
  }   
}

export default AnimatedPins