import { 
  CLEAR_TRAIL_REVIEWS, 
  INSERT_REVIEW, 
  RECEIVE_TRAIL_REVIEWS,
  REMOVE_REVIEW,
  EDIT_REVIEW 
} from '../../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRAIL_REVIEWS:
      console.log(action.reviews)
      return action.reviews
    case CLEAR_TRAIL_REVIEWS:
      return {};
    case INSERT_REVIEW:
      let newState = Object.assign({}, state)
      newState[action.data.review.id] = action.data.review
      newState[action.data.review.id]['authorName'] = action.data.authorName
      return newState;
    case REMOVE_REVIEW:
      newState = Object.assign({}, state)
      delete newState[action.reviewId]
      return newState;
    case EDIT_REVIEW:
      newState = Object.assign({}, state)
      newState[action.data.review.id] = action.data.review
      newState[action.data.review.id]['authorName'] = action.data.authorName
      return newState;
    default:
      return state
  }
}

export default reviewsReducer;
