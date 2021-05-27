import { 
  CLEAR_TRAIL_REVIEWS, 
  INSERT_REVIEW, 
  RECEIVE_TRAIL_REVIEWS 
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
      let newState = Object.assign({}, state, action.review)
      return newState;
    default:
      return state
  }
}

export default reviewsReducer;
