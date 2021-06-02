export const postReview = (review) => (
  $.ajax({
    url: `/api/trails/${review.trailId}/reviews`,
    method: 'POST',
    data: {
      review: {
        rating: review.rating,
        body: review.body,
        author_id: review.authorId,
        trail_id: review.trailId
      }
    }
  })
)

export const patchReview = (review) => {
  return (
    $.ajax({
      url: `/api/trails/${review.trailId}/reviews/${review.id}`,
      method: 'PATCH',
      data: 
        { review: 
          {
            body: review.body,
            rating: review.rating
          } 
        }   
    })
  )
}

export const destroyReview = review => (
  $.ajax({
    url: `/api/trails/${review.trailId}/reviews/${review.id}`,
    method: 'DELETE',
    data: { review }
  })
)

export const getTrailReviews = (trailId) => {
  return (
    $.ajax({
      url: `/api/trails/${trailId}/reviews`,
      method: 'GET'
    })
  )
}