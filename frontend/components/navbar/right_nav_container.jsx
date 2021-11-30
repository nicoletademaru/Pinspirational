import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import RightNav from './right_nav';

const mSTP = ({ session }) => ({
  currentUser: session.currentUser
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP,mDTP)(RightNav));
