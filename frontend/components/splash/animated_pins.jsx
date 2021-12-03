import React from 'react';

class AnimatedPins extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.pins) return null;
    let { pins, pinIds } = this.props;

    return (
      <ul>
        { pinIds.map((pinId) => {
          return <p>{pins[pinId].id}</p> }
        )}
      </ul>
    )
  }   
}

export default AnimatedPins