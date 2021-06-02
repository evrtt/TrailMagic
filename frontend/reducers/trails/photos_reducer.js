import { 
  CLEAR_TRAIL_PHOTOS, 
  RECEIVE_TRAIL_PHOTOS 
} from '../../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRAIL_PHOTOS:
      return action.photoURLs.photoURLs
    case CLEAR_TRAIL_PHOTOS:
      return {}
    default:
      return state
  }
}

export default photosReducer;

