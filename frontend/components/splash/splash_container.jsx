import { connect } from 'react-redux';
import Splash from './splash'

const mDTP = dispatch => ({
  fetchPins:() => dispatch(fetchPins())
})

export default connect(null,mDTP)(Splash)