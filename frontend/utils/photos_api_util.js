export const fetchTrailPhotos = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos`,
    method: 'GET'
  })
)

export const postPhotos = (photos, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos`,
    method: 'POST',
    data: {photos}
  })
)

export const destroyPhoto = (photoId, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos`,
    method: 'DESTROY'
  })
)