import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePin, deletePin } from '../../actions/pin_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import EditPin from './edit_pin';

const mSTP = (state, ownProps) => {
  let data = (ownProps.location.pathname.match(/(\d+)/g) || []);
  return {
    pin: state.entities.pins[data[0]]
  }
}

const mDTP = dispatch => ({ 
  updatePin: pin => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP,mDTP)(EditPin));