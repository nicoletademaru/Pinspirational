import React from 'react';

function PinningDropdown({pinboards, handlePinning, pinId}) {
  if (!pinboards) return null;

  return <div className='dropdown pinning-dropdown'>
  <h1 className='dropdown-btn pinboard-pinning'>{pinboards[0].title}</h1> 
  <i className="fas fa-chevron-down"></i>
  <div className='dropdown-content pinning-content'>
    <h2>Save to pinboard</h2>
    <div className='pinboard-options'>
      <h1>All pinboards</h1>
      <ul>
        {pinboards.map((pinboard, idx) => {
          return <div className='drop-item pinning-item' key={idx} onClick={(e) => handlePinning(e, pinboard.id, pinId)} >
            <p>{pinboard.title}</p>
            <button id={""+pinboard.id+pinId} className='save-btn'>Save</button>
          </div>
        })}
      </ul>
    </div>
  </div>
</div>
}

export default PinningDropdown;