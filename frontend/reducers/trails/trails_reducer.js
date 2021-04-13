import { 
  RECEIVE_ALL_TRAILS, 
  RECEIVE_CURRENT_TRAIL 
} from '../../actions/trails_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TRAILS:
      const newState = Object.assign( {}, action.trails );
      Object.values(newState).forEach (obj => {
        const newCoords = Object.values(JSON.parse(obj.routeCoords));
        newState[obj.id].routeCoords = newCoords
      });
      return Object.assign( {}, newState, )
      // return newState;
    case RECEIVE_CURRENT_TRAIL:
      return Object.assign({}, state, { [action.currentTrail.id]: action.currentTrail })
    default:
      return state;
  }
}