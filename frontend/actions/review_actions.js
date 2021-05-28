import * as reviewsAPIUtil from '../utils/reviews_api_util';

export const INSERT_REVIEW = 'INSERT_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_TRAIL_REVIEWS = 'CLEAR_TRAIL_REVIEWS';
export const RECEIVE_TRAIL_REVIEWS = 'RECEIVE_TRAIL_REVIEWS';
export const EDIT_REVIEW = 'EDIT_REVIEW'

const insertReview = (review) => ({
  type: INSERT_REVIEW,
  review
})

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

const editReview = (review) => ({
  type: EDIT_REVIEW,
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
      reviews => dispatch(receiveTrailReviews(reviews)),
      err => dispatch(receiveErrors(err))
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
  reviewsAPIUtil.patchReview(review, trailId)
    .then(
      review => dispatch(editReview(review)),
      err => dispatch(receiveErrors(err))
    )
}

export const deleteReview = (review) => dispatch => {
  reviewsAPIUtil.destroyReview(review)
    .then(
      review => dispatch(removeReview(review)),
      err => dispatch(receiveErrors(err))
    )
}