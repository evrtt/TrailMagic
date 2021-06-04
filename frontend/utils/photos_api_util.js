export const fetchTrailPhotos = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos`,
    method: 'GET'
  })
)

export const postPhoto = (formData, trailId) => {
  debugger
  return (
    $.ajax({
      url: `/api/trails/${trailId}/photos`,
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const destroyPhoto = (photoId, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos/${photoId}`,
    method: 'DESTROY'
  })
)