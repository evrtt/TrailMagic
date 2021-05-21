import { 
  CLEAR_TRAIL_REVIEWS, 
  RECEIVE_TRAIL_REVIEWS 
} from '../../actions/trails_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRAIL_REVIEWS:
      return action.reviews
    case CLEAR_TRAIL_REVIEWS:
      return {}
    default:
      return state
  }
}

export default reviewsReducer;
