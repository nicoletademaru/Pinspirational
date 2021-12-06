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
            <Delayed waitBeforeShow={600}>
              <AnimatedPins pins={pins} 
                pinIds={[
                  "https://pinspirational-seeds.s3.us-west-1.amazonaws.com/tall-plant.jpeg",
                  "https://pinspirational-seeds.s3.us-west-1.amazonaws.com/greencouch.jpeg",
                  "https://pinspirational-seeds.s3.us-west-1.amazonaws.com/switz.jpeg",
                  "https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dog-swing.jpeg"
                ]}
                />
            </Delayed>
          </div>
          <div className='animated-column column-1 mid'>
            <Delayed waitBeforeShow={600}>
              <AnimatedPins pins={pins}
                pinIds={[
                  "https://pinspirational-seeds.s3.us-west-1.amazonaws.com/plants.jpeg",
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/home-decor.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/louv.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dog.jpeg'
                ]} />
            </Delayed>
          </div>
          <div className='animated-column column-2 center'>
            <Delayed waitBeforeShow={600}>
              <AnimatedPins pins={pins} 
                pinIds={[
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/windowplant.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/bedroom.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/waterfall.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/big-doggo.jpeg'
                ]}/>
            </Delayed>
          </div>
          <div className='animated-column column-3 center'>
            <Delayed waitBeforeShow={600}>
              <AnimatedPins  pins={pins} 
                pinIds={[
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/indoorplant.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/dining.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/london.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/poodles.jpeg'
                ]}/>
            </Delayed>
          </div>
          <div className='animated-column column-4 mid'>
            <Delayed waitBeforeShow={600}>
              <AnimatedPins pins={pins} 
                pinIds={[
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/plantfriends.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/bedroomwhite.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/switz.jpeg',
                  'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/switz.jpeg'
                ]}/> 
            </Delayed>
          </div>
          <div className='animated-column column-5'>
            <Delayed waitBeforeShow={600}>
              <AnimatedPins pins={pins} pinIds={[
                'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/single-plant.jpeg',
                'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/laundry.jpeg',
                'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/canada.jpeg',
                'https://pinspirational-seeds.s3.us-west-1.amazonaws.com/beach-dog.jpeg'
              ]}/> 
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