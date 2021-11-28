import React from 'react';

export default ({ pin }) => {
  return ( 
    <div>
      <img src={pin.media} alt="photo" />
      <h1>{pin.title}</h1>
    </div>
  )
};

