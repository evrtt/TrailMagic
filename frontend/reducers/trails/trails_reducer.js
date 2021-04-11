import { 
  RECEIVE_ALL_TRAILS, 
  RECEIVE_CURRENT_TRAIL 
} from '../../actions/trails_actions';

const initState = {
  trails: null
}

export default (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TRAILS:
      return Object.assign( {}, state, { trails: action.trails })
    case RECEIVE_CURRENT_TRAIL:
      return Object.assign({}, state, { [action.currentTrail.id]: action.currentTrail })
    default:
      return state;
  }
}