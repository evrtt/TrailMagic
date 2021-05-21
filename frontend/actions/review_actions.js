import * as reviewsAPIUtil from '../utils/reviews_api_util';

export const INSERT_REVIEW = 'INSERT_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const insertReview = (review) => dispatch => ({
  type: INSERT_REVIEW,
  review
})

const removeReview = (review) => dispatch => ({
  type: REMOVE_REVIEW,
  review
})

export const createReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.postReview(review, trailId)
    .then(review => dispatch(insertReview(review)))
    .catch(err => dispatch(receiveErrors(err)))
}

export const updateReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.patchReview(review, trailId)
    .then(review => dispatch(insertReview(review)))
    .catch(err => dispatch(receiveErrors(err)))
}

export const deleteReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.destroyReview(review, trailId)
    .then(review => dispatch(removeReview(review)))
    .catch(err => dispatch(receiveErrors(err)))
}