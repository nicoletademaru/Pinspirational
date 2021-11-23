import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';

const mSTP = ({ session }) => ({
  currentUser: session.currentUser
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mSTP,
  mDTP
)(Splash);
