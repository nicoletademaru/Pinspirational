import React from "react";
import PinIndexItem from './pin_item'

class PinIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(e) {
    this.props.history.push(`/pins/${e.target.id}`)
  }

  componentDidMount() {
    this.props.requestPins();
  }

  render() {
    const  { pins } =  this.props
    return (
      <div className='index-page-listings'>
        <ul>
          { pins.map((pin) => (
          <PinIndexItem 
            key={pin.id} 
            pin={pin}
            handleClick={this.handleClick}
          /> )
          )}
        </ul>
      </div>
    )
  }
}

export default PinIndex;