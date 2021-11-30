import React from 'react';

export const UserInfo = ({ user, iconClick }) => {
  return (
    <div className='user-info'>
      <img 
        src={user.profile_pic} 
        onClick={iconClick}/>
      <h1>{user.username}</h1>
    </div>
  )
}

export const CurrUserInfo = ({ user }) => {
  return (
    <div className='user-info'>
      <img src={user.profile_pic} />
      <h1>{user.username}</h1>
    </div>
  )
}