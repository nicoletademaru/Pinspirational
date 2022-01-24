import { connect } from "react-redux";
import UserShow from './users_show';
import { requestUser } from "../../actions/users_actions";

const mSTP = ( state, ownProps ) => ({
  user: state.entities.users[ownProps.match.params.userId],
  userId: ownProps.match.params.userId
});

const mDTP = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(mSTP,mDTP)(UserShow);