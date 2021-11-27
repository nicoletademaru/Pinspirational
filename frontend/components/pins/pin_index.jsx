import React from "react";

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
      <div>
        { pins.map((pin,i) => <p key={i}>{pin.title}</p>) }
      </div>
    )
  }
}

export default PinIndex;