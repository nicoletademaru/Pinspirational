import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
})

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const requestUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const requestUsers = () => dispatch => (
  UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
)