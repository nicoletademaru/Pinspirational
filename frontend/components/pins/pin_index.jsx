import React from "react";
import PinIndexItem from './pin_item'

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: "",
      pinboard_id:"",
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/pins/${e.target.id}`);
  }

  handleSave(e) {
    e.preventDefault();
    return (e) => this.setState({ pin_id: e.target.id })
  }

  componentDidMount() {
    this.props.requestUser(this.props.userId)
    this.props.requestUsers();
    this.props.requestPins();
  }

  render() {
    if (!this.props.pins) return null;
    if (!this.props.pinboards) return null;
    
    const  { pins, pinboards } =  this.props;
    return (
      <div className='index-page-listings'>
        <ul>
          { pins.map((pin) => (
          <PinIndexItem 
            key={pin.id} 
            pin={pin}
            pinboards={pinboards}
            handleClick={this.handleClick}
            handleSave={this.handleSave}
          /> )
          )}
        </ul>
      </div>
    )
  }
}

export default PinIndex;