export const postReview = (review, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews`,
    method: 'POST',
    data: { review }
  })
)

export const patchReview = (review, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
)

export const destroyReview = (review, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews/${review.id}`,
    method: 'DELETE',
    data: { review }
  })
)

export const getReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'GET'
  })
)

export const getTrailReviews = (trailId) => {
  console.log(trailId)
  return (
    $.ajax({
      url: `/api/trails/${trailId}/reviews`,
      method: 'GET'
    })
  )
}