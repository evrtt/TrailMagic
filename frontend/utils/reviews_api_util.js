export const createReview = (review, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews`,
    method: 'POST',
    data: { review }
  })
)

export const updateReview = (review, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
  })
)

export const deleteReview = (review, trailId) => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews/${review.id}`,
    method: 'DELETE',
    data: { review }
  })
)