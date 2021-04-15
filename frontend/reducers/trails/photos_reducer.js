import { RECEIVE_TRAIL_PHOTOS } from '../../utils/trails_api_util';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRAIL_PHOTOS:
      return action.photoURLs
    default:
      return state
  }
}