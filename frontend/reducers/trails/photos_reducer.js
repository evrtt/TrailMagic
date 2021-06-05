import { 
  CLEAR_TRAIL_PHOTOS, 
  RECEIVE_TRAIL_PHOTOS,
  INSERT_TRAIL_PHOTO
} from '../../actions/photo_actions';

const photosReducer = (state = {}, action) => {

  console.log(action.photos)
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRAIL_PHOTOS:
      return action.photos
    case CLEAR_TRAIL_PHOTOS:
      return {};
    case INSERT_TRAIL_PHOTO:
      const newState = Object.assign({}, state)
      newState[action.photo.id] = action.photo
      return newState;
    default:
      return state
  }
}

export default photosReducer;

