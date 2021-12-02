import React from 'react';

class PinboardShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // if (!this.props.pinboard) {
    //   this.props.history.push('/feed')
    // }

    const { pinboard } = this.props;
    return (
      <div className='pinboard-show-page'>
        <p>hi</p>
      </div>
    )
  }
}

export default PinboardShow