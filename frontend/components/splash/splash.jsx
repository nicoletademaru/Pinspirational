import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className='content'>
        <h1>Get your next</h1>
        <div className='gradient'></div>
        <div className='animated-content'>
          <ul className='splash-content-theme'>
            <li className='weeknight-dinner-item'>
              bucket list idea
            </li>
            <li className='home-decor-item'>
              home decor idea
            </li>
            <li className='new-look-item'>
              new best friend
            </li>
            <li className='green-thumb-item'>
              green thumb idea
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Splash;