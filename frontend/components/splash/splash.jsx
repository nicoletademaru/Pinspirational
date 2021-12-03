import React from 'react';
import AnimatedPins from './animated_pins';
import Delayed from './delayed';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.requestPins();
  }

  render() {
    if (!this.props.pins) return null;
    let { pins, requestPins } = this.props;

    return (
      <div className='content'>
        <div className='splash-words'>
        <h1>Get your next</h1>
        <div className='animated-content'>
          <ul className='splash-content-theme'>
            <li className='green-thumb-item'>
              green thumb idea
            </li>
            <li className='home-decor-item'>
              home decor idea
            </li>
            <li className='destination-item'>
              travel destination
            </li>
            <li className='best-friend-item'>
                new best friend
            </li>
          </ul>
        </div>
        </div>
        <div className='animated-columns-container'>
          <div className='animated-column column-0'>
            <Delayed waitBeforeShow={7000}>
              <AnimatedPins pins={pins} pinIds={[23,13,26,20]} />
            </Delayed>
          </div>
          <div className='animated-column column-1 mid'>
            <Delayed waitBeforeShow={7000}>
              <AnimatedPins pins={pins} pinIds={[2,1,4,3]} />
            </Delayed>
          </div>
          <div className='animated-column column-2 center'>
            <Delayed waitBeforeShow={7000}>
              <AnimatedPins pins={pins} pinIds={[12,22,6,15]}/>
            </Delayed>
          </div>
          <div className='animated-column column-3 center'>
            <Delayed waitBeforeShow={7000}>
              <AnimatedPins  pins={pins} pinIds={[19,9,31,24]}/>
            </Delayed>
          </div>
          <div className='animated-column column-4 mid'>
            <Delayed waitBeforeShow={7000}>
              <AnimatedPins pins={pins} pinIds={[28,33,26,30]}/> 
            </Delayed>
          </div>
          <div className='animated-column column-5'>
            <Delayed waitBeforeShow={7000}>
              <AnimatedPins pins={pins} pinIds={[7,29,18,10]}/> 
            </Delayed>
          </div>
          <div className='white-space'></div>
          <div className='white-space2'></div>
          <div className='white-space3'></div>
        </div>
      </div>
    )
  }
};

export default Splash;