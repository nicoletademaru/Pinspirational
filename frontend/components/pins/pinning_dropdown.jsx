import React from 'react';

function PinningDropdown({pinboards, handlePinning, pin}) {

  return <div className='dropdown'>
  <h1 className='dropdown-btn pinboard-pinning'>{pinboards[0].title}</h1> 
  <i className="fas fa-chevron-down"></i>
  <div className='dropdown-content create-content'>
    <h2>Save to pinboard</h2>
    <h1>All pinboards</h1>
    <ul>
      {pinboards.map((pinboard, idx) => {
        return <p key={idx} id={pinboard.id} pin={pin} onClick={handlePinning}>{pinboard.title}</p>
      })}
    </ul>
    <div className='bottom'></div>
  </div>
</div>
}

export default PinningDropdown;