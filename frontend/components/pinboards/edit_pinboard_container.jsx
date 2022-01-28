import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal, closeModal } from "../../actions/modal_actions";
import { deletePinboard } from '../../actions/pinboard_actions';
import EditPinboard from './edit_pinboard_form';

const mSTP = (state, ownProps) => {
  let data = (ownProps.location.pathname.match(/(\d+)/g) || []);
  return {
    pinboard: state.entities.pinboards[data[0]],
    userId: state.session.id,
  }
}

const mDTP = dispatch => ({ 
  deletePinboard: pinboardId => dispatch(deletePinboard(pinboardId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP,mDTP)(EditPinboard));