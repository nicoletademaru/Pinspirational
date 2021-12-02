import React from "react";
import PinIndexItem from './pin_item'

class PinIndex extends React.Component {
  constructor(props) {
    super(props);;

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/pins/${e.target.id}`);
  }

  componentDidMount() {
    this.props.requestPins();
    this.props.requestUsers();
  }

  render() {
    if (!this.props.pins) return null;
    
    const  { pins } =  this.props;
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