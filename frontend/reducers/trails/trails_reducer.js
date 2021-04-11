import { 
  RECEIVE_ALL_TRAILS, 
  RECEIVE_CURRENT_TRAIL 
} from '../../actions/trails_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TRAILS:
      return Object.assign( {}, state, action.trails )
    case RECEIVE_CURRENT_TRAIL:
      return Object.assign({}, state, { [action.currentTrail.id]: action.currentTrail })
    default:
      return state;
  }
}