import React from "react";
import PinIndexItem from './pin_item'

class PinIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.requestPins();
  }

  render() {
    const  { pins } =  this.props
    return (
      <div className='index-page-listings'>
        <ul>
          { pins.map((pin) => (
          <PinIndexItem key={pin.id} pin={pin}/> )
          )}
        </ul>
      </div>
    )
  }
}

export default PinIndex;