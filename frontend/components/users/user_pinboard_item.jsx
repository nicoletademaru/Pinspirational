import React from 'react';

class PinboardItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pinboard, handleClick } = this.props;
    return (
      <div className='pinboard-index-item'>
        <p>{pinboard.title}</p>
      </div>
    )
  }
}

export default PinboardItem;