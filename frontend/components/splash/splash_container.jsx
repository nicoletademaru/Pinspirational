import { connect } from 'react-redux';
import Splash from './splash'
import { requestPins } from '../../actions/pin_actions'

const mSTP = state => ({
  pins: state.entities.pins
})

const mDTP = dispatch => ({
  requestPins:() => dispatch(requestPins())
})

export default connect(mSTP,mDTP)(Splash)