export const fetchTrails = () => (
  $.ajax({
    url: '/api/trails',
    method: 'GET'
  })
)

export const searchTrails = (string) => (
  $.ajax({
    url: '/api/trails/search',
    method: 'GET',
    data: {string}
  })
)

export const fetchTrail = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}`,
    method: 'GET'
  })
)