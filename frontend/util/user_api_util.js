export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/pinboards`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);