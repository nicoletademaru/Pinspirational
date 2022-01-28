import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../sessions/login_container';
import SignupContainer from '../sessions/signup_contatiner';
import EditPinContainer from '../pins/edit_pin_container';
import CreatePinboardContainer from '../pinboards/create_pinboard_container'
import EditPinboardContainer from '../pinboards/edit_pinboard_container'

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
      component = <SignupContainer />;
      break;
    case 'pinboard':
      type = 'pinboard'
      component = <CreatePinboardContainer />;
      break;
    case 'edit-pinboard':
      type = 'edit-pinboard'
      component = <EditPinboardContainer />;
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


