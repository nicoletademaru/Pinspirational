export const fetchPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins',
  })
)

export const createPin = pin => (
  $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: { pin }
  })
)

export const updatePin = pin => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: { pin }
  })
)

export const fetchPin = pinId => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}`
  })
)

export const deletePin = pinId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`
  })
)


