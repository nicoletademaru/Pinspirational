export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/user/${userId}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);