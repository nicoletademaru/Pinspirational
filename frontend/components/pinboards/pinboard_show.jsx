import React from 'react';
import PinIndexItem from '../pins/pin_item';

class PinboardShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/pins/${e.target.id}`);
  }

  componentDidMount() {
    this.props.requestPinboard(this.props.pinboardId);
  }

  render() {
    if (!this.props.pinboard) {
      return ""
    }
    
    const { pinboard, pins } = this.props;
    console.log(pinboard.id)
    return (
      <div className='pinboard-show-page'>
        {/* <p>{pinboard}</p> */}
        <h1>{this.props.pinboard.title}</h1>
        <p>{pins.length} Pins</p>

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
      </div>

    )
  }
}

export default PinboardShow