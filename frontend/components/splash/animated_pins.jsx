import React from 'react';


class AnimatedPins extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.pins) return null;
    let { pinIds } = this.props;

    return (
      <div className='column-container'>
        { pinIds.map((src) => {
          return <ul className='splash-img'><img src={src} alt="pin-img" /></ul>}
        )}
      </div>
    )
  }   
}

export default AnimatedPins