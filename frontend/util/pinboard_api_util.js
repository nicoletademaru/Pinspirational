export const fetchPinboards = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pinboards',
  })
)

export const createPinboard = pinboard => (
  $.ajax({
    method: 'POST',
    url: '/api/pinboards',
    data: { pinboard },
  })
)

export const fetchPinboard = pinboardId => (
  $.ajax({
    method: 'GET',
    url: `/api/pinboards/${pinboardId}/pinnings`
  })
)

export const deletePinboard = pinboardId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pinboards/${pinboardId}`
  })
)
