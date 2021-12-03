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
            <li className='new-look-item'>
              new best friend
            </li>
            <li className='destination-item'>
              travel destination
            </li>
          </ul>
        </div>
        </div>
        <div className='animated-columns-container'>
          <div className='animated-column column-1'>
            <Delayed waitBeforeShow={500}>
              <AnimatedPins pins={pins} pinIds={[2,7,3,8,1,5,4,6]} />
            </Delayed>
          </div>
          <div className='animated-column column-2 center'>
            <Delayed waitBeforeShow={500}>
              <AnimatedPins pins={pins} pinIds={[12,16,10,15,9,13,11,14]}/>
            </Delayed>
          </div>
          <div className='animated-column column-3 center'>
            <Delayed waitBeforeShow={500}>
              <AnimatedPins  pins={pins} pinIds={[19,23,20,24,17,22,18,21]}/>
            </Delayed>
          </div>
          <div className='animated-column column-4'>
            <Delayed waitBeforeShow={500}>
              <AnimatedPins pins={pins} pinIds={[28,32,27,30,25,29,26,31]}/> 
            </Delayed>
          </div>
        </div>
      </div>
    )
  }
};

export default Splash;