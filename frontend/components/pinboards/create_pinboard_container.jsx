import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createPinboard } from '../../actions/pinboard_actions';
import CreatePinboard from './create_pinboard_form';
import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => {
  return {
    userId: state.session.id,
  }
}

const mDTP = dispatch => ({ 
  createPinboard: pinboard => dispatch(createPinboard(pinboard)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP,mDTP)(CreatePinboard));