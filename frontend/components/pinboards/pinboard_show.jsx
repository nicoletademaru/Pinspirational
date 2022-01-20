import React from 'react';

class PinboardShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestPinboard(this.props.pinboardId);
  }

  render() {
    // if (!this.props.pinboard) {
    //   this.props.history.push('/feed')
    // }

    const { pinboard } = this.props;
    return (
      <div className='pinboard-show-page'>
        {/* <p>{pinboard.title}</p> */}
        <p>{this.props.pinboardId}</p>
        <p>hi</p>
      </div>
    )
  }
}

export default PinboardShow