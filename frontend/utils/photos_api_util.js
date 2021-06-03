export const fetchTrailPhotos = (trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos`,
    method: 'GET'
  })
)

export const postPhotos = (formData, trailId) => {
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

export const destroyPhotos = (photoId, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/photos/${photoId}`,
    method: 'DESTROY'
  })
)