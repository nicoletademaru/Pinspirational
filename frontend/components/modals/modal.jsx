import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../sessions/login_container';
import SignupContatiner from '../sessions/signup_contatiner';
import EditPinContainer from '../pins/edit_pin_container';
import { updatePin } from '../../util/pin_api_util';

function Modal({ modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let type;
  switch (modal) {
    case 'login':
      type = 'login'
      component = <LoginContainer />
      break;
    case 'signup':
      type = 'signup'
      component = <SignupContatiner />;
      break;
    case 'edit-pin':
      type = 'edit-pin'
      component = <EditPinContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className={type}>
      <div className='modal-background' onClick={closeModal}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
    </div>
    </div>
  )
}

const mSTP = state => ({
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP,mDTP)(Modal);


