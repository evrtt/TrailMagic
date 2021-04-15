export const fetchTrails = () => (
  $.ajax({
    url: '/api/trails',
    method: 'GET'
  })
)

export const fetchTrail = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}`,
    method: 'GET'
  })
)

export const fetchTrailPhotos = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos`,
    method: 'GET'
  })
)