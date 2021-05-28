import * as reviewsAPIUtil from '../utils/reviews_api_util';

export const INSERT_REVIEW = 'INSERT_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_TRAIL_REVIEWS = 'CLEAR_TRAIL_REVIEWS';
export const RECEIVE_TRAIL_REVIEWS = 'RECEIVE_TRAIL_REVIEWS';

const insertReview = (review) => ({
  type: INSERT_REVIEW,
  review
})

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
})

const receiveTrailReviews = (reviews) => ({
  type: RECEIVE_TRAIL_REVIEWS,
  reviews
})

export const clearTrailReviews = () => ({
  type: CLEAR_TRAIL_REVIEWS
})

export const fetchReview = (reviewId) => dispatch => {
  reviewsAPIUtil.getReview(reviewId)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveErrors(err))
    )
}

export const fetchTrailReviews = (trailId) => dispatch => {
  reviewsAPIUtil.getTrailReviews(trailId)
    .then(
      reviews => {
        // console.log(reviews, "success!")
        return (
          dispatch(receiveTrailReviews(reviews))
        )
      },
      err => {
        // console.log(err, "failure!")
        return (
          dispatch(receiveErrors(err))
        )
      }
    )
}

export const createReview = (review) => dispatch => {
  reviewsAPIUtil.postReview(review)
    .then(
      review => dispatch(insertReview(review)),
      err => dispatch(receiveErrors(err))
    )
}

export const updateReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.patchReview(review)
    .then(
      review => {
        console.log(review, 'updated')
        return (
          fetchTrailReviews(trailId)
        )
      },
      err => {
        console.log(err)
        return(
          dispatch(receiveErrors(err))
        )
      }
    )
}

export const deleteReview = (review) => dispatch => {
  reviewsAPIUtil.destroyReview(review)
    .then(
      review => dispatch(removeReview(review)),
      err => dispatch(receiveErrors(err))
    )
}