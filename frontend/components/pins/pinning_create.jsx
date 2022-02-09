import React from 'react';
import PinningDropdown from './pinning_dropdown';

function PinningForm({pinId, pinboards, handlePinning, handleSave}) {
  if (!pinboards) return null;

  return <form className='create-pinning-form'>
    <PinningDropdown
      pinId={pinId}
      pinboards={pinboards}
      handlePinning={handlePinning}/>
    <button id={pinId} onClick={handleSave} className='save-btn'>Save</button>
  </form>
}

export default PinningForm;